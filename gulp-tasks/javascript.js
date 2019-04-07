const gulp = require('gulp')
const named = require('vinyl-named')
const webpack = require('webpack-stream')
const rename = require('gulp-rename')
const reports = require('gulp-sizereport')
const babel = require('gulp-babel')
const uglify = require("gulp-uglify");

gulp.task("js", () => {
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

gulp.task("js:app", () => {
  return gulp
    .src("./src/js/*.js")
    //.pipe(named())
    .pipe(
      webpack({
        mode: "production",
        watch: false,
        output: {
          filename: "app.js"
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


gulp.task("scripts", () =>
  gulp
    .src("./src/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(reports({
      gzip: true
    }))
    .pipe(gulp.dest("./src/js/scripts"))
);
