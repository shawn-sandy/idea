const gulp = require("gulp");
const reports = require("gulp-sizereport");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const sass = require("gulp-sass");

gulp.task("default", function(done) {
  console.log("Gulp default");
  done();
});

gulp.task("sass", () =>
  gulp
    .src(["./style.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest("./dist"))
    .pipe(reports({ gzip: true }))
);
