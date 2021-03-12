'use strict';

global.$ = {
	paths: require('./gulp/paths.js'),
	tasks: require('./gulp/tasks.js'),
	settings: require('./gulp/settings.js'),

	gulp: require('gulp'),
	del: require('del'),
	fs: require('fs'),
	browserSync: require('browser-sync').create(),
	buffer: require('vinyl-buffer'),
	merge: require('merge-stream'),
	ghpages: require('gh-pages'),
	smartgrid: require('smart-grid'),

	lp: require('gulp-load-plugins')()
};

// watch
// ==========================================================================

$.gulp.task('watch', () => {
	$.gulp.watch($.paths.dev.favicons, $.gulp.series('favicons'));
	$.gulp.watch($.paths.dev.fonts, $.gulp.series('fonts'));

	$.gulp.watch([
		$.paths.dev.content_svg,
		$.paths.dev.content_raster
	], $.gulp.series('content:dev'));

	$.gulp.watch($.paths.dev.vector, $.gulp.series('vector', 'scss:dev'));

	$.gulp.watch([
		$.paths.dev.raster,
		$.paths.dev.sprite_scss_tpl,
		$.paths.dev.bg
	], $.gulp.series('raster:dev', 'scss:dev'));

	$.gulp.watch([
		$.paths.dev.data,
		$.paths.dev.pug
	], $.gulp.series('pug:dev'));

	$.gulp.watch($.paths.dev.scss, $.gulp.series('scss:dev'));

	$.gulp.watch([
		// $.settings.vendor,
		$.paths.dev.scripts
	], $.gulp.series('js:dev'));
});

// tasks
// ==========================================================================

$.tasks.forEach(function(path) {
	require(path)();
});

$.gulp.task('dev', $.gulp.series(
	'clean:before',
	// 'smartgrid',
	$.gulp.parallel('favicons', 'fonts', 'content:dev', 'vector', 'raster:dev'),
	$.gulp.parallel('pug:dev', 'scss:dev', 'js:dev'),
	'clean:after',
	$.gulp.parallel('server', 'watch')
));

$.gulp.task('build', $.gulp.series(
	'clean:before',
	// 'smartgrid',
	$.gulp.parallel('favicons', 'fonts', 'content:build', 'vector', 'raster:build'),
	$.gulp.parallel('pug:build', 'scss:build', 'js:build'),
	'clean:after'
));

$.gulp.task('default', $.gulp.series('dev'));
