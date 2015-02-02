/* require:config
--------------------------------------------- */

require.config({
	paths: {
		// libs
			jquery: 'lib/jquery',
			Modernizr: 'lib/modernizr',
			bowser: 'lib/bowser',
			slick: 'lib/slick',
			bootstrap: 'lib/bootstrap',
			growl: 'lib/bootstrap-growl'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		Modernizr: {
			exports: 'Modernizr'
    }
	}
});


/* init
--------------------------------------------- */

require(['jquery'], function($) {
	$(document).ready(function() {
		console.log('hellow');
	});
});


/* modernizr
--------------------------------------------- */

define(['Modernizr'],function(Modernizr) {});
