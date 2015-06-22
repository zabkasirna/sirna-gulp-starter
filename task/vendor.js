/** ------------------------------------------------------------------------- *\
 *  VENDOR ( mostly bower components )
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   bower = require( 'main-bower-files' )
,   config = require( '../conf' );

gulp.task( 'vendor', function() {
    return gulp.src(
            bower(),
            { base: config.vendor.src }
        )
        .pipe( gulp.dest( config.vendor.dest ) );
});