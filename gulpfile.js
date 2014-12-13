var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    env = process.env.NODE_ENV,
    webserver = require('gulp-webserver'),
    zip = require('gulp-zip'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    run = require('gulp-run'),
    karma = require('gulp-karma');

gulp.task('scripts', function() {
    gulp.src(['src/js/main.js', 'src/js/module.js'])

    .pipe(concat('all_scripts.js'))
        .pipe(gulp.dest('src/js'))
        .on('error', swallowError);

    gulp.src(['src/js/all_scripts.js', 'src/js/vf_only/*.js'])
        .pipe(uglify())
        .on('error', swallowError)
        .pipe(concat('all_scripts.js'))
        .on('error', swallowError)
        .pipe(gulp.dest('static/js'));
});

gulp.task('styles', function() {
    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/css'));
});

gulp.task('images', function() {
    gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('static/img'));
});

gulp.task('serve', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('watch', function() {

    gulp.watch('src/js/*.js', ['scripts','unit']);
    gulp.watch('src/js/vf_only/*.js', ['scripts','unit']);
    gulp.watch('src/css/*.css', ['styles']);

    gulp.watch('static/js/*.js', ['zip','unit']);
    gulp.watch('static/css/*.css', ['zip']);
    gulp.watch('src/templates/**', ['pages', 'vf']);
    //to do: add images

});

gulp.task('zip', function() {
    return gulp.src('static/**')
        .pipe(zip('static_resource.zip'))
        .pipe(gulp.dest('dist'));

});
var bower = require('gulp-bower');

gulp.task('bower', function() {
    return bower({
        cwd: './src'
    })
});

gulp.task('pages', function() {
    //this is our local live copy
    gulp.src(['./src/templates/header.html', 'src/templates/body.html', './src/templates/footer.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('src'));

    //this is a copy of the VF page (may be redundant)
    gulp.src(['./src/templates/header.vf', 'src/templates/body.html', './src/templates/footer.vf'])
        .pipe(concat('index.vf.page'))
        .pipe(gulp.dest('dist'));

});

gulp.task('vf', function() {
    //save this to a local page in our MavensMate IDE -  must then save to server
    gulp.src(['./src/templates/header.vf', 'src/templates/body.html', './src/templates/footer.vf'])
        .pipe(concat('SPA.page'))
        .pipe(gulp.dest('../../src/pages'));
});

gulp.task('push', function() {
    run('cd ../..; force push src/pages/SPA.page').exec();
    //run('cd ../..; force push -t StaticResource -n spa_sample').exec();

});

var testFiles = [

        'src/bower_components/jquery/dist/jquery.js',
        'test/config.js',
        'src/bower_components/jsr-mocks/dist/jsr-mocks.js',
        'src/js/*.js',
        'test/unit/*.js'
    ];

gulp.task('unit', function() {
    //run('cd ../..; karma start').exec();

    return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'start'
    }));
});


gulp.task('default', ['bower',  'styles', 'images', 'pages', 'unit', 'scripts', 'zip','watch','serve']);


function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}