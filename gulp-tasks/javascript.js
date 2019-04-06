const gulp = require('gulp')
const named = require('vinyl-named')
const webpack = require('webpack-stream')
const stripDebug = require('gulp-strip-debug')
const rename = require('gulp-rename')
const reports = require('gulp-sizereport')

gulp.task("js", () => {
  return gulp
    .src("./src/js/*.js")
    .pipe(stripDebug())
    .pipe(named())
    .pipe(
      webpack({
        mode: "production",
        watch: true,
        module: {
          rules: [
            {
              test: /\.(js)$/,
              loader: "babel-loader"
            }
          ]
        }
      })
    )
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./src/js/min"))
    .pipe(
      reports({
        gzip: true
      })
    );
});
