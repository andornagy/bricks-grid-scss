const { src, dest, series, watch } = require('gulp');

// Styles
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');

function styles() {
   return src('./src/scss/**/*.scss')
      .pipe(scss())
      .pipe(autoPrefixer('last 2 versions'))
      .pipe(clean({ force: true }))
      .pipe(dest('./dist/css/'));
}

function watchTask() {
   watch(['./src/scss/**/*.scss'], series(styles));
}

exports.default = series(styles, watchTask);
