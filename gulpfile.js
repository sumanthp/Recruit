/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var deploy = require('gulp-gh-pages');

gulp.task("heroku:production", function(){
  console.log('hello'); // the task does not need to do anything.
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    port: process.env.PORT || 5000
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js', 'views/*.html', 'template/*.html', './*.html'], {cwd: 'app'}, reload);
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
