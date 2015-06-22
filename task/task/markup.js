/** ------------------------------------------------------------------------- *\
 *  MARKUP
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   changed = require( 'gulp-changed' )
,   sequence = require('run-sequence')
,   config = require( '../conf' );

gulp.task( 'markup:partial', function() {
    return gulp.src( config.markup.partial.src )
        .pipe( changed( config.markup.partial.dest ) )
        .pipe( gulp.dest( config.markup.partial.dest ) );
});

gulp.task( 'markups', function( done ) {
    sequence(
        [ 'markup:partial' ],
        done
    );
});