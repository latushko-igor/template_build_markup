module.exports = {

	projectType: 'job_markup',
	projectName: 'projectName',
	deployRepo: 'https://github.com/latushko-igor/latushko-igor.github.io.git',
	index: 'index.html',

	vendor: [
		'./node_modules/jquery/**/*',
		// './node_modules/jquery-form/**/*',
		// './node_modules/svg4everybody/**/*',
		// './node_modules/jquery-nice-select/**/*',
		// './node_modules/jquery.maskedinput/**/*',
		// './node_modules/jquery-validation/**/*',
		// './node_modules/fancybox/**/*',
		// './node_modules/slick-carousel/**/*',
		// './node_modules/bootstrap/**/*',
	],

	smartgrid: {
		filename: '_smartgrid',
		outputStyle: 'scss',
		columns: 12,
		offset: '20px',
		mobileFirst: true,
		container: {
			maxWidth: '1280px',
			fields: '20px'
		},
		breakPoints: {
			xs: {
				width: '320px'
			},
			sm: {
				width: '768px',
				fields: '40px'
			},
			md: {
				width: '1024px'
			},
			lg: {
				width: '1280px'
			}
		}
	}

};
