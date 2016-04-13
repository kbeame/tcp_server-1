const gulp = require('gulp');
const eslint = require('gulp-eslint');

var files = ['gulpfile.js', 'server.js', './test/**/*test.js'];

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint({
    'env': [
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});
