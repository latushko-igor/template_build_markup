module.exports = () => {

	$.gulp.task('js:dev', () => {
		var vendor = $.gulp.src($.settings.vendor, {base: $.paths.dev.packages})
			.pipe($.gulp.dest($.paths.build.vendor));

		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.js'))
			.pipe($.gulp.dest($.paths.build.scripts));

		return $.merge(vendor, scripts)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:build', () => {
		var vendor = $.gulp.src($.settings.vendor)
			.pipe($.gulp.dest($.paths.build.vendor));

		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.paths.build.scripts));

		return $.merge(vendor, scripts);
	});

}
