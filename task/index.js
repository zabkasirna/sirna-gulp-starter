/** ------------------------------------------------------------------------- *\
 *  CALLING ALL TASKS
 ** ------------------------------------------------------------------------- */

var fs = require('fs')
,   onlyScripts = require('./util/script-filter')
,   tasks = fs.readdirSync('./task/task/').filter(onlyScripts)
;

tasks.forEach(function(task) {
    require('./task/' + task);
});
