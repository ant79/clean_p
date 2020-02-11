var gulp = require('gulp');



gulp.task('styles',function (){

	gulp.src('src/styles/**/*.css')
	.pipe(gulp.dest('build/styles'));

})

