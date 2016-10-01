const gulp = require('gulp'),
    minify = require('gulp-minify'),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename')

const jsFiles = ['src/ngy-preview.js', 'src/ngy-preview-directive.js'];

gulp.task('minify-js', function () {
    gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('ngy-preview.js'))
        .pipe(minify({
            preserveComments: 'all'
        }))
        .pipe(sourcemaps.write('../dist'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function () {
    return gulp.src('src/ngy-preview.css')
        .pipe(sourcemaps.init())
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

gulp.task('move-css', function () {
    return gulp.src('src/ngy-preview.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['minify-js', 'minify-css', 'move-css']);

gulp.task('default', ['build']);