const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const babel = require("gulp-babel");


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function() {
    return gulp.src("./sass/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src("./js/main.js")
    .pipe(babel({
            presets: ['es2015', 'react']
        }))
    .on('error', handleError)
    .pipe(gulp.dest('./dist/js/'));
});
 
gulp.task('browserSync', ['sass', 'js'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./js/**/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['browserSync']);

