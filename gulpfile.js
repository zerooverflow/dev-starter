var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', function() {
    return gulp.src(['style.css'])
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['minify-css'], function() {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'style.min.css'
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});