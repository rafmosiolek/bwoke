const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const babelPreset = require('babel-preset-env');
const autoprefixer = require('gulp-autoprefixer');
const webserver = require('gulp-webserver');

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

gulp.task('sass', () => {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'));

    });

gulp.task('babel', () => {
    return gulp.src('./assets/scripts/*.js')
    .pipe(babel({
        "presets": [
            ["env", {
                "targets": {
                    "browsers": ["last 2 versions", "safari >= 7"]
                }
            }]
        ]
    }))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('serve', () => {
    gulp.src("./")
        .pipe(webserver({
            livereload: false,
            directoryListing: true,
            open: true
        }))
})

gulp.task('watch', ['sass', 'babel'], () => {
    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch('./assets/scripts/*.js', ['babel']);
});

gulp.task('default', ['watch']);