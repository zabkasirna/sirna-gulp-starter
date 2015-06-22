/** ------------------------------------------------------------------------- *\
 *  WHO WATCH THE WATCHMEN
 ** ------------------------------------------------------------------------- */

var gulp = require('gulp')
,   config = require('../conf');


gulp.task( 'watch', ['setWatch', 'script'], function() {

    gulp.watch(config.markup.partial.src, ['markups']);
    gulp.watch(config.style.src + '**/*.scss', ['styles']);
    gulp.watch(config.image.src, ['image']);
});
