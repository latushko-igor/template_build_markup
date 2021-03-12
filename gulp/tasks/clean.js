module.exports = () => {

	$.gulp.task('clean:before', () => {
		return $.del($.paths.build.dir);
	});

	$.gulp.task('clean:after', () => {
		return $.del($.paths.build.tinypng_tmp);
	});

};
