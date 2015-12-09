var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var connect = require('gulp-connect');
var open = require('open');



var paths = {

  'scripts': {
    'src' : 'app/**/!(test|*.d).ts',
    'dest': 'build/js'
  }
} 

gulp.task('clean', function() {
  return del(['build']);
});


gulp.task('script', function() {
  return gulp.src(paths.scripts.src)
  .pipe(ts({
      out: 'index.js'
  }))
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(connect.reload());

})

gulp.task('views', function() {

  return gulp.src('app/index.html')
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());;

})

gulp.task('serve', function() {
  connect.server({
    root: 'build',
    port: 5566,
    livereload: true
  });
  open('http://localhost:5566');
});

gulp.task('watch',['serve'], function() {
  gulp.watch(paths.scripts.src, ['script']);
  gulp.watch('app/index.html', ['views']);
});

gulp.task('dev', ['script','views','watch'] );




