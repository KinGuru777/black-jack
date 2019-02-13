var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
 
sass.compiler = require('node-sass');


gulp.task('default', function() {
    gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    gulp.src('js/*.js')
   .pipe(babel({
    presets: ['@babel/env']
}))
   .pipe(uglify())
   .pipe(gulp.dest('build'));
   gulp.src(['./build/flickity.js', './build/clock.js', './build/app.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./finalJs/'));
   gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('buildCss'));
    gulp.src('./buildCss/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('./finalCss'));
   console.log('gdshdsh');
});
   