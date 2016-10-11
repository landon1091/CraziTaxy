let gulp = require('gulp');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js', 'css']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});
gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(browserify())
        .pipe(gulp.dest('public/'));
});
gulp.task('css', function () {
    return gulp.src('style.css')
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
    gulp.watch('index.html', ['html']);
    gulp.watch('app.js', ['js']);
})