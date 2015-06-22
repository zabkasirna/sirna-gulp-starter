/** ------------------------------------------------------------------------- *\
 *  FIRST RUN. HAPPY CODING.
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   sequence = require('run-sequence')
,   config = require( '../conf' );

gulp.task( 'first', function( done ) {
    sequence(
        [ 'markups' ],
        [ 'vendor', 'font', 'image' ],
        [ 'styles' ],
        [ 'script' ],
        done
    );
});