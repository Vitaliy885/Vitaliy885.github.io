var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');


gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('dist/css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true})),
        gulp.src('src/libs/**/*.js')
            .pipe(gulp.dest('dist/libs'))
            .pipe(browserSync.reload({stream: true}))
    done();
});

gulp.task('images', function () {
    return gulp.src('src/images/*')
       /* .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
        }))*/
        .pipe(gulp.dest('dist/images'))
        //.pipe(browserSync.reload({stream: true}))
});


gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/images/*', gulp.series('images'));
});

gulp.task('default', gulp.parallel('sass', 'js', 'watch'));

