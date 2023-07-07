var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var dartSass = require('sass');

const sass = gulpSass(dartSass);

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
