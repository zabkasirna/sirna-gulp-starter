#!/bin/bash
# should be manually run
# to copy the required files
# to project's root directory

if [ ! ./gulpfile-src.js ]; then

    echo 'FAILED: No main gulp js source file found'

else

    cp ./task/gulpfile-src.js ./gulpfile.js

fi