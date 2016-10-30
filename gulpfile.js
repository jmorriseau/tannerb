var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

gulp.task('sass', function(){
  gulp.src('sass/*.scss')
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest('./dist'));
})
gulp.task('scripts', function(){
  return gulp.src(['./node_modules/jquery/dist/jquery.js','./js/*.js'])
  .pipe(concat('main.js'))
  .pipe(uglify({output:{ascii_only:true}}))
  .pipe(gulp.dest('./dist/'));
})

gulp.task('js-watch', function(){
  gulp.watch(['./js/*.js'],['scripts']);
})

gulp.task('sass-watch', function(){
  gulp.watch(['./sass/*.scss'],['sass']);
})

gulp.task('webserver', function(){
  connect.server();
})

gulp.task('default', ['sass-watch','js-watch','webserver'])
