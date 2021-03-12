module.exports = () => {

	$.gulp.task('deploy', () => {
		return $.ghpages.publish($.paths.build.dir, {
			repo: 		$.settings.deployRepo,
			branch: 	'master',
			dest: 		'job_markup--' + $.settings.projectName,
			message: 	'Deploy commit from https://github.com/latushko-igor/job_markup--' + $.settings.projectName + '.git'
		});
	});

};
