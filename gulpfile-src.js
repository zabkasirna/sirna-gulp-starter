/** ------------------------------------------------------------------------- *\
 *  START HERE!
 ** ------------------------------------------------------------------------- */

var gulp     = require('gulp')
,   sequence = require('run-sequence')
,   tasks    = require('./task')
;

gulp.task('default', function(done) {
    sequence(
        ['markups'],
        ['styles'],
        ['watch'],
        done
    );
});

gulp.task('proto', function(done) {
    sequence(
        ['markups'],
        ['style:proto'],
        ['watch'],
        done
    );
});