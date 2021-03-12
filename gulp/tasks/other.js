module.exports = () => {

	$.gulp.task('favicons', () => {
		return $.gulp.src($.paths.dev.favicons)
			.pipe($.gulp.dest($.paths.build.favicons))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('fonts', () => {
		return $.gulp.src($.paths.dev.fonts)
			.pipe($.gulp.dest($.paths.build.fonts))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:dev', () => {
		var svg = $.gulp.src($.paths.dev.content_svg)
			.pipe($.lp.svgmin({
				js2svg: {pretty: true}
			}))
			.pipe($.lp.cheerio({
				run: function($) {
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe($.lp.replace('&gt;', '>'))
			.pipe($.gulp.dest($.paths.build.content));

		var raster = $.gulp.src($.paths.dev.content_raster)
			.pipe($.gulp.dest($.paths.build.content));

		return $.merge(svg, raster)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:build', () => {
		var svg = $.gulp.src($.paths.dev.content_svg)
			.pipe($.lp.svgmin({
				js2svg: {pretty: true}
			}))
			.pipe($.lp.cheerio({
				run: function($) {
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe($.lp.replace('&gt;', '>'))
			.pipe($.gulp.dest($.paths.build.content));

		var raster = $.gulp.src($.paths.dev.content_raster)
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.content));

		return $.merge(svg, raster)
			.on('end', $.browserSync.reload);
	});

};
