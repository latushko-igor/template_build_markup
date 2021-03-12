module.exports = () => {

	$.gulp.task('scss:dev', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.lp.sourcemaps.init())
				.pipe($.lp.sass({
					outputStyle: 'expanded'
				}))
				.on('error', $.lp.notify.onError({
					message: "<%= error.message %>",
					title: "scss error!"
				}))
			.pipe($.lp.sourcemaps.write())
			.pipe($.lp.autoprefixer())
			.pipe($.lp.rename('styles.css'))
			.pipe($.gulp.dest($.paths.build.styles))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('scss:build', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.lp.sass({
				outputStyle: 'compressed'
			}))
			.pipe($.lp.groupCssMediaQueries())
			.pipe($.lp.autoprefixer())
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.lp.rename('styles.min.css'))
			.pipe($.gulp.dest($.paths.build.styles))
	});

};
