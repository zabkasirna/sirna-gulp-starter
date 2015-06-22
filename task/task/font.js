/** ------------------------------------------------------------------------- *\
 *  Font
 ** ------------------------------------------------------------------------- */

var gulp       = require('gulp')
,   config     = require('../conf')
,   changed    = require('gulp-changed')
,   gulpif     = require('gulp-if')
;

gulp.task('font', function() {
    return gulp.src( config.font.src )
        .pipe( changed( config.font.dest ) )
        .pipe( gulp.dest( config.font.dest ) )
    ;
});
