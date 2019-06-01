const gulp = require('gulp')
const prefixer = require('gulp-autoprefixer')
const sass = require('gulp-dart-sass')
const cleanCss = require('gulp-clean-css')
const print = require('gulp-print').default
const reports = require('gulp-sizereport')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const clean = require('gulp-clean')

gulp.task('clean', () => {
  return gulp.src('./dist').pipe(clean())
})

gulp.task('sass', () => {
  return gulp
    .src('./src/bootstrap-lite.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('reports', () => {
  return gulp.src('./dist/*').pipe(
    reports({
      gzip: true
    })
  )
})

gulp.task('default', gulp.series('clean', 'sass'))

gulp.task('watch', () => gulp.watch('./src/**/*.scss', gulp.parallel('sass')))
