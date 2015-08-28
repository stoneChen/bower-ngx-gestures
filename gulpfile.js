var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var script = 'ngx-gestures.js';

gulp.task('uglify', function() {
  return gulp.src(script)
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
    .pipe(gulp.dest('.'));
});