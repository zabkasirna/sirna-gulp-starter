/** ------------------------------------------------------------------------- *\
 *  STYLE
 ** ------------------------------------------------------------------------- */


var gulp         = require('gulp')
,   config       = require('../conf')
,   errors       = require('../util/error-handler')
,   sass         = require('gulp-sass')
,   autoprefixer = require('gulp-autoprefixer')
,   size         = require('gulp-size')
,   gulpif       = require('gulp-if')
,   sourcemaps   = require('gulp-sourcemaps')
,   sequence     = require('run-sequence')
,   replace      = require('gulp-replace')
,   rename       = require('gulp-rename')
;

gulp.task('style:modern', function() {

    var file = 'styleguide';

    return gulp.src( config.style.src + file + '.scss' )
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions',
        }))
        .pipe( sass() )
        .pipe(sourcemaps.write('./maps'))
        .on( 'error', errors )
        .pipe(gulp.dest( config.style.dest ))
        .pipe( size( { title: config.style.dest + file + '.css' } ) )
    ;
});

gulp.task('style:old', function() {

    var file = 'styleguide';

    return gulp.src( config.style.src + file + '.scss' )
        .pipe(replace(/\$old\:\s*false;/g, function(str) {
            return str.replace(/false/, "true");
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions',
        }))
        .pipe( sass() )
        .pipe( sourcemaps.write('./maps') )
        .on( 'error', errors )
        .pipe( rename( file + ".ie.css") )
        .pipe( gulp.dest( config.style.dest ) )
        .pipe( size( { title: config.style.dest + file + '.ie.css' } ) )
    ;
});

gulp.task('style:proto-modern', function() {

    var file = 'proto';

    return gulp.src( config.style.src + file + '.scss' )
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions',
        }))
        .pipe( sass() )
        .pipe(sourcemaps.write('./maps'))
        .on( 'error', errors )
        .pipe(gulp.dest( config.style.dest ))
        .pipe( size( { title: config.style.dest + file + '.css' } ) )
    ;
});

gulp.task('style:proto-old', function() {

    var file = 'proto';

    return gulp.src( config.style.src + file + '.scss' )
        .pipe(replace(/\$old\:\s*false;/g, function(str) {
            return str.replace(/false/, "true");
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions',
        }))
        .pipe( sass() )
        .pipe( sourcemaps.write('./maps') )
        .on( 'error', errors )
        .pipe( rename( file + ".ie.css") )
        .pipe( gulp.dest( config.style.dest ) )
        .pipe( size( { title: config.style.dest + file + '.ie.css' } ) )
    ;
});


gulp.task( 'styles', function( done ) {
    sequence(
        [ 'style:modern', 'style:old' ],
        [ 'style:proto-modern', 'style:proto-old' ],
        done
    );
});