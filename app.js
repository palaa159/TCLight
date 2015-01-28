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
	util = require('util'),
	colors = require('colors'),
	// For Raspi only
	gpio = require('gpio');

var log = function(msg) {
	util.log('::: APP DEBUG ::: '.magenta);
	util.log(colors.white.bold(msg));
	util.log('::::::::::::::::: '.magenta);
};

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
		log('It happens EVERY HOUR');
	});
	// mo_interrupters.twitterListener().start(['love']);
	// mo_fadecandy.start();
	mo_routines.minute(function() {
		mo_weather.getCurrentWeatherCondition(function(data) {
			data = JSON.parse(data);
			log('The weather now is ' + data['current_observation']['weather'] + ', ' + data['current_observation']['wind_mph'] + ' mph. heading from ' + data['current_observation']['wind_degrees'] + ' degrees.');
		});
	});
};

app.init();