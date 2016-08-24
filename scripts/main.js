import $ from 'jquery';

import OS from './lib/os'; // Determine Device/OS


$(document).one('ready', function() {

	// We access our Instances from our 
	var device = OS.getInstance();
	console.log( device );
	window.device = OS.getInstance();



});







