var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var paths = {
  scripts: './js/**/*.js',
  images: './img/**/*',
  less: './less/**/*.less'
};

//Compile less into css
gulp.task('less', function () {
  return gulp.src('./less/**/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

//Minify css
/*gulp.task('minify-css', function() {
  return gulp.src('./css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});*/

//Watch & refresh fresh code
/*gulp.task('webserver', function() {
  gulp.src('root')
    .pipe(webserver({
      fallback: 'index.html',
      host: 'localhost',
      path: '/',
      livereload: false,
      directoryListing: true,
      open: 'index.html' 
    }));
});*/

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  /*gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);*/
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);