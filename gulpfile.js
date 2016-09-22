var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// var paths = {
// 	mainscss: './assets/css/styles.scss',
// }

// gulp.task('sass', function () {
//   return gulp.src('./assets/css/styles.scss', {base: "./"})
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./'))
//     .pipe(browserSync.stream())
// });

gulp.task('sass', function() {
    return gulp.src("./sass/main.scss")
        .pipe(sass().on('error', sass.logError)) // Using gulp-sass + error handling
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.stream());
});
 
gulp.task('watch', function () {
  gulp.watch('./assets/css/**/*.scss', ['sass']);
 // gulp.watch('./assets/css/**/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('browserSync', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['browserSync']);

