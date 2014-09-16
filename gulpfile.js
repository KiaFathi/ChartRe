'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

var paths = {
    index_js: ['./app/index.jsx'],
    js: ['app/**/*.jsx'],
};

gulp.task('js', function() {
    // Browserify/bundle the JS.
    browserify(paths.index_js)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['connect', 'watch', 'js']);