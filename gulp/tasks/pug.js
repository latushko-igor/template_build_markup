module.exports = () => {

	$.gulp.task('pug:dev', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				pretty: true,
				data: {
					json: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.on('error', $.lp.notify.onError({
				message: "<%= error.message %>",
				title: "pug error!"
			}))
			.pipe($.lp.beml({
				modPrefix: '--'
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('pug:build', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				data: {
					json: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.pipe($.lp.beml({
				modPrefix: '--'
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
