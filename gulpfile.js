
var gulp     = require('gulp');
var svgSprite = require("gulp-svg-sprites");
 
gulp.task('sprites', function () {
    return gulp.src('assets/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("assets"));
});

gulp.task('spritesymbol', function () {
    return gulp.src('source/*.svg')
        .pipe(svgSprite({mode: "symbols"}))
        .pipe(gulp.dest("assets"));
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});


