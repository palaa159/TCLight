/*
	Facecandy

	– – – – –
*/

var SimplexNoise = require('simplex-noise'),
	simplex = new SimplexNoise(Math.random),
	OPC = new require('./opc'),
	model = OPC.loadModel('grid8x8.json'),
	client = new OPC('localhost', 7890),
	util = require('util');

var log = function(msg) {
	return util.log('::: FadeCandy ::: '.yellow + (msg).bold);
};

var fc = function(settings) {

	var params = {};

	var module = {};
	module.draw = function() {
		// DRAW LOOP
		// log(client);
		// if(typeof client !== undefined) {
		// 	log(client);
		// }
		log(client);
		// client.mapPixels(shader, model);
	};
	module.start = function() {
		setInterval(this.draw, 1);
	};

	return module;
};

// Finally export

module.exports = fc;

// Utilities
var colors = {
	red: '#f00' // for example
};