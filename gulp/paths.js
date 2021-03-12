module.exports = {

	dev: {
		packages: 					'./node_modules',
		particles: 					'./src/_particles',

		data: 						'./src/_particles/_data.json',
		pages: 						'./src/*.pug',
		pug: 						'./src/**/*.pug',

		styles: 					'./src/main.scss',
		scss: 						'./src/**/*.scss',

		scripts: 					'./src/*.js',

		favicons: 					'./src/media/favicons/*.{ico,png}',
		fonts: 						'./src/media/fonts/**/*.{woff2,woff}',
		content_svg: 				'./src/media/content/*.svg',
		content_raster: 			'./src/media/content/*.{jpeg,jpg,png}',

		vector: 					'./src/media/appearance/svg/*.svg',
		// relative to $.paths.build.img + '/symbol'
			icons_name: 				'../icons.svg',

		raster: 					'./src/media/appearance/*.{jpeg,jpg,png}',
		raster2x: 					'./src/media/appearance/retina/*.{jpeg,jpg,png}',
		raster2x_filter: 			'./src/media/appearance/retina/*@2x.{jpeg,jpg,png}',

		// relative to $.paths.build.styles
			sprite_name: 			'../img/sprite.png',
			retina_sprite_name: 	'../img/retina-sprite.png',
			retina_sprite2x_name: 	'../img/retina-sprite@2x.png',

		sprite_scss_name: 			'_sprite.scss',
		sprite2x_scss_name: 		'_sprite@2x.scss',

		sprite_scss_tpl: 			'./src/_templates/_scss.sprite',
		retina_sprite_scss_tpl: 	'./src/_templates/_scss.retina.sprite',

		bg: 						'./src/media/appearance/bg/*.{jpeg,jpg,png}'
	},

	build: {
		tinypng_tmp: 				'./.gulp',
		dir: 						'./dist',
		styles: 					'./dist/css',
		images: 					'./dist/img',
		bg: 						'./dist/img/bg/',
		content: 					'./dist/img/content',
		favicons: 					'./dist/img/favicons',
		fonts: 						'./dist/fonts',
		vendor: 					'./dist/js/vendor',
		scripts: 					'./dist/js'
	}

};
