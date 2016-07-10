var gulp = require('gulp');
var sass = require("gulp-sass");
var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;
var browserSync = require("browser-sync");
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task("compress", function(){
  return gulp.src('src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/js/'))
})

gulp.task('js-watch', ['compress'], browserSync.reload);

gulp.task("sass", function() {
  gulp.src("src/scss/**/*.scss")
      .pipe(plumber())
      .pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// Spin up a server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: "dist"
    }
  })
});

gulp.task("watch", ["browserSync", "sass", "compress"], function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["compress"]);
  gulp.watch("src/js/**/*.js", ["js-watch"]);
  gulp.watch("dist/*.html").on("change", browserSync.reload);

});

gulp.task("default");
