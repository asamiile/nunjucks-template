var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlbeautify = require('gulp-html-beautify');

var beautify_options = {
  'indent_with_tabs': true
}

gulp.task('default', function() {
  return gulp.src(['src/templates/**/*.njk', '!src/templates/**/_*.njk'])
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }))
    .pipe(htmlbeautify(beautify_options))
    .pipe(gulp.dest('htdocs'));
});
