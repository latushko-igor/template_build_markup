module.exports = () => {

	$.gulp.task('deploy', () => {
		return $.ghpages.publish($.paths.build.dir, {
			repo: 		$.settings.deployRepo,
			branch: 	'master',
			dest: 		$.settings.projectType + '--' + $.settings.projectName,
			message: 	'Deploy commit from https://github.com/latushko-igor/' + $.settings.projectType + '--' + $.settings.projectName + '.git'
		});
	});

};
