const

    gulp = require("gulp"),
    
    shell = require("gulp-shell")
;

// this is the main call
gulp.task("build",
    shell.task('gulp pug:prod sass:prod js:prod'));
    
// run pug and scss in dev mode
gulp.task("dev:font",
    shell.task("gulp pug:w sass:w show:w"));
// run pug and scss +js in dev mode
gulp.task("dev:all",
    shell.task("gulp pug:w sass:w js:w show:w"));
// run pug and scss in debug mode
gulp.task("debug:font",
    shell.task("gulp debug:pug debug:sass show:w"));
// run pug and scss + js in debug mode
gulp.task("debug:all",
    shell.task("gulp debug:pug debug:sass debug:js show:w"));