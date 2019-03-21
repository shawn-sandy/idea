const gulp = require("gulp");
const print = require("gulp-print").default;
const reports = require("gulp-sizereport");
const replace = require("gulp-string-replace");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const sass = require("gulp-sass");
const shell = require("gulp-shell");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream")
const named = require('vinyl-named')
const rename = require('gulp-rename')

// fetch command line arguments
const arg = (argList => {
  let arg = {},
    a,
    opt,
    thisOpt,
    curOpt;
  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, "");

    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    } else {
      // argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;
})(process.argv);

gulp.task("default", function() {
  console.log("Gulp default");
});

gulp.task("sass", () =>
  gulp
    .src(["./src/scss/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest("./src/css/"))
);

gulp.task("reports", () =>
  gulp.src("./dist/**/*.*").pipe(
    reports({
      gzip: true
    })
  )
);

gulp.task("new:page", () => {
  scaffold("pages", "pages");
});

const scaffold = (sourceFolder, targetFolder = "packages") => {
  let packageName = arg.name || arg.n;
  let packageTitle = capitalize(packageName.replace("-", " "));
  const dirs = [
    `scaffolds/${sourceFolder}/**/*`,
    `scaffolds/${sourceFolder}/.*`,
    `scaffolds/${sourceFolder}/*.*`
  ];
  gulp
    .src(dirs, {
      base: `./scaffolds/${sourceFolder}`
    })
    .pipe(replace("package-name", packageName))
    .pipe(replace("package-title", packageTitle))
    .pipe(gulp.dest(`./${targetFolder}/${packageName}`))
    .pipe(print());
};

const capitalize = function(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

gulp.task("watch", () => gulp.watch("./src/**/*.scss", gulp.parallel("sass")));

gulp.task("watch:scripts", () =>
  gulp.watch("./src/scripts/**/*.js", gulp.parallel("scripts"))
);

gulp.task("start", shell.task("yarn eleventy --serve"));

gulp.task("dev", gulp.parallel("watch", "watch:scripts", "start"));

gulp.task("scripts", () =>
  gulp
    .src("./src/scripts/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./src/js"))
);

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(named())
    .pipe(webpack({
      mode: 'production',
      watch: true,
      module: {
        rules: [
          {
            test: /\.(js)$/,
            loader: 'babel-loader'
          }
        ]
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./src/js/min'))
    .pipe(reports ({
      gzip: true
    }))
})
