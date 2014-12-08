var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    env = process.env.NODE_ENV,
    webserver = require('gulp-webserver'),
    zip = require('gulp-zip');
console.log(env);
// Scripts Task
gulp.task('scripts',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('static/js'));
});

// Styles Task
//Set up styles,

gulp.task('styles',function(){
    gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css'));
});

// Images Task
gulp.task('images',function(){
    gulp.src('src/img/**')
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

gulp.task('watch', function (){

    gulp.watch('static/js/*.js', ['scripts']);
    gulp.watch('static/css/*.css', ['styles']);

});

gulp.task('zip', function(){
    return gulp.src('static/**')
        .pipe(zip('static_resource.zip'))
        .pipe(gulp.dest('dist'));
});
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower({  cwd: './src' })

});

gulp.task('default', ['bower','scripts','styles', 'images', 'watch', 'webserver']);

