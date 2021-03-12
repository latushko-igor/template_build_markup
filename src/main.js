'use strict';

// custom scripts

let mobile 		= 320,
	tablet 		= 768,
	laptop 		= 1024,
	desktop 	= 1280,
	devices 	= 'mobile tablet laptop desktop',
	body 		= $('body');

// breakpoints helper classes

function breakpoints_classes() {
	if ( body.width() < tablet ) {
		body.removeClass(devices).addClass('mobile');
	} else if ( body.width() < laptop && body.width() >= tablet ) {
		body.removeClass(devices).addClass('tablet');
	} else if ( body.width() < desktop && body.width() >= laptop ) {
		body.removeClass(devices).addClass('laptop');
	} else if ( body.width() >= desktop ) {
		body.removeClass(devices).addClass('desktop');
	}
}

$(window).on('load resize', function() {
	breakpoints_classes();
});

$(document).ready(function() {

	// map

	// let myMap,
	// 	myGeoObject;

	// function init() {
	// 	myMap = new ymaps.Map ('map', {
	// 		center: [45.059029, 38.931602],
	// 		zoom: 15,
	// 		controls: ['smallMapDefaultSet']
	// 	}, {
	// 		searchControlProvider: 'yandex#search'
	// 	});

	// 	myGeoObject = new ymaps.GeoObject({
	// 		geometry: {
	// 			type: 'Point',
	// 			coordinates: [45.059029, 38.931602]
	// 		}
	// 	}, {
	// 		preset: 'twirl#redDotIcon'
	// 	});

	// 	myMap.behaviors.disable('scrollZoom');
	// 	myMap.geoObjects.add(myGeoObject);
	// }

	// ymaps.ready(init);

});
