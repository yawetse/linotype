'use strict';

// console.log("example test wepps!!s");

var Stroller = require('../../../lib/stroller');

window.onload =function(){
	window.stroller1 = new Stroller({
		'strollerContainerQuerySelector':'.strollerContainer',
		'strollerItemQuerySelector':'.stroller'
	});

	// window.Linotype.init();
};