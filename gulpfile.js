const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

$scssSRC = 'src/**/*.scss';

function buildStyles() {
   return src($scssSRC).pipe(sass()).pipe(dest('dest'));
}

function watchTask() {
   watch([$scssSRC], buildStyles);
}

exports.default = series(buildStyles, watchTask);
