var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    env = process.env.NODE_ENV,
    webserver = require('gulp-webserver'),
    zip = require('gulp-zip'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    //template = require('gulp-template'),
    concat = require('gulp-concat');


gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

gulp.task('styles', function() {
    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/css'));
});

gulp.task('images', function() {
    gulp.src('src/img/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('static/img'));
});

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('watch', function() {

    gulp.watch('src/js/*.js', ['scripts', 'zip']);
    gulp.watch('src/css/*.css', ['styles', 'zip']);
    gulp.watch('src/body.html', ['pages']);
    gulp.watch('src/templates/**', ['pages']);
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
    gulp.src(['./src/templates/header.html', 'src/body.html', './src/templates/footer.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('src'));

    //this is a copy of the VF page (may be redundant)
    gulp.src(['./src/templates/header.vf', 'src/body.html', './src/templates/footer.vf'])
        .pipe(concat('index.vf.page'))
        .pipe(gulp.dest('dist'));


});

//this is not a default task
gulp.task('vf', function(){
    //save this to a local page in our MavensMate IDE -  must then save to server
    gulp.src(['./src/templates/header.vf', 'src/body.html', './src/templates/footer.vf'])
        .pipe(concat('SPA.page'))
        .pipe(gulp.dest('../../src/pages'));
});


gulp.task('default', ['bower', 'scripts', 'styles', 'images', 'watch', 'pages', 'webserver', 'zip']);
