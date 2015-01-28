// edlablight@gmail.com :: 3dL@b500

/*
	Routines
	– Time of the day
	– Time of the year (Season)
*/

/* Schedules

	– Get weather
	– Get trending twitter hash
	– Get statistics

*/

/*
	Interrupters 

	– Gesture
	– Proximity
	– Loudness
	– Camera
	– 
*/

/*
	Global Requires
*/

var http = require('http'),
	nodemailer = require('nodemailer'),
	// For Raspi only
	gpio = require('gpio');

/*
	Defining My modules
*/
var mo_settings = require('./modules/settings'),
	mo_weather = require('./modules/weather'),
	mo_routines = require('./modules/routines')(mo_settings),
	mo_interrupters = require('./modules/interrupters')(mo_settings, gpio),
	mo_fadecandy = require('./modules/fadecandy')(mo_settings);

/* 
–--------------------

	Init services

--------------------- 
*/

var app = {};
app.init = function() {
	mo_routines.everyHour(function() {
		console.log('–––––––––––');
		console.log('It happens EVERY HOUR');
		console.log('–––––––––––');
	});
	// mo_interrupters.twitterListener().start(['love']);
	// mo_fadecandy.start();
	mo_routines.once(function() {
		mo_weather.getCurrentWeatherCondition(function(data) {
			console.log(data);
		});
	});
};

app.init();