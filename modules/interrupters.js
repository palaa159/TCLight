/*
	Interrupters

	List of listeners
	- Tweet
	- Loudness
	– Movement using PIR Sensor
*/
var	Twitter = require('node-twitter'),
	colors = require('colors'),
	util = require('util');

var log = function(msg) {
	return util.log('::: Interrupter ::: '.cyan + (msg).bold);
};

var interrupters = function(settings, gpio) {
	var module = {};

	module.twitterListener = function() {
		var twitterStreamClient = new Twitter.StreamClient(
			'bAVZ7rBZ2QMqboXEtMPnRpCvK',
			'pje8rlOyGV9Rn7NRYJ9K7hZ5i8kZwmoBtD2MJQ8hCzqEE7amjy',
			'15753430-HEgWgh8CnqtrJe5QcNR3C0jPt3E9yRdwUmMPYQecX',
			'whPI5kbExfxoiBOt8v8WtJsg6oezGFU0sXdInsEoNJtlx'
		);
		twitterStreamClient.on('close', function() {
			log('Connection closed.');
		});
		twitterStreamClient.on('end', function() {
			log('End of Line.');
		});
		twitterStreamClient.on('error', function(error) {
			log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
		});
		twitterStreamClient.on('tweet', function(tweet) {
			log(tweet.text);
		});

		var service = {};
		// start
		service.start = function(wordarray) {
			twitterStreamClient.start(wordarray);
		};
		service.stop = function() {
			twitterStreamClient.stop();
		};

		return service;
	};

	return module;
};

module.exports = interrupters;
// Export modules