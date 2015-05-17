// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css/min'))
        .pipe(minifyCss({compatibility: 'ie8'}))
    	.pipe(gulp.dest('assets/css/min'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('assets/javascripts/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/javascripts/min/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/javascripts/*.js', ['lint', 'scripts']);
    gulp.watch('assets/stylesheets/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);