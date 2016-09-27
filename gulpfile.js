var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var imagemin     = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

// uglify task
gulp.task('compress', function () {
  gulp.src('./js/*.js')
  .pipe(plumber()) // plumber
  .pipe(uglify())
  .pipe(gulp.dest('./js/min'));
});

// sass task
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
  .pipe(plumber()) // plumber
  .pipe(sass({ outputStyle: 'expanded' }))
  // autoprefixer task
  .pipe(autoprefixer({
    browser: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./css'));
});

// imagemin task
gulp.task('imagemin', function () {
  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./img'));
});

// browserSync task
var source = {
  css   : './css/*.css',
  js    : './js/*.js',
  jsmin : './js/min/*js',
  scss  : './sass/*.scss',
  html  : './*.html'
};

gulp.task('serve', function () {
  browserSync.init({
    server: './'
  });

  gulp.watch(source.scss, ['sass']);
  gulp.watch(source.js, ['compress']);

  gulp.watch(source.jsmin).on('change', reload);
  gulp.watch(source.html).on('change', reload);
  gulp.watch(source.css).on('change', reload);
});

// watch task
gulp.task('watch', function () {

});

// default task
gulp.task('default', ['compress', 'sass', 'serve']);
