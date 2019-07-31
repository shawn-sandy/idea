const gulp = require('gulp')
const named = require('vinyl-named')
const webpack = require('webpack-stream')
const rename = require('gulp-rename')
const reports = require('gulp-sizereport')
const uglify = require("gulp-uglify");

gulp.task("js:webpack", () => {
  return gulp
    .src("./src/js/*.js")
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
    .pipe(
      reports({
        gzip: true
      })
    )
    .pipe(gulp.dest("./src/js/min"))
});

gulp.task("js:libs", () => {
  return gulp
    .src("./src/js/libs/*.js")
    //.pipe(named())
    .pipe(
      webpack({
        mode: "production",
        watch: false,
        output: {
          filename: "app.js"
        },
        optimization: {
          splitChunks: {
            chunks: 'all',
          },
        },
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
    .pipe(
      reports({
        gzip: true
      })
    )
    .pipe(gulp.dest("./src/js/min"))
});

gulp.task("js", () =>
  gulp
    .src("./src/js/*.js")
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(reports({
      gzip: true
    }))
    .pipe(gulp.dest("./src/js/min"))
);
