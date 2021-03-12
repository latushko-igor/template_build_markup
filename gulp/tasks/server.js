module.exports = () => {

	$.gulp.task('server', () => {
		$.browserSync.init({
			notify: true,
			open: true,
			reloadOnRestart: true,
			server: {
				baseDir: $.paths.build.dir,
				index: $.settings.index
			},
			port: 8080
		})
	});

};
