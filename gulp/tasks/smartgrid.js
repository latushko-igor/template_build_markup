module.exports = () => {

	$.gulp.task('smartgrid', (cb) => {
		$.smartgrid($.paths.dev.particles, $.settings.smartgrid);
		cb();
	});

};
