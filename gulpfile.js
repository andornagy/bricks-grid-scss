const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

$scssSRC = 'src/**/*.scss';

function buildStyles() {
   return (
      src($scssSRC)
         .pipe(sass())
         // .pipe(purgecss({ content: ['homepage.html'] }))
         .pipe(dest('dest'))
   );
}

function watchTask() {
   watch([$scssSRC], buildStyles);
}

exports.default = series(buildStyles, watchTask);
