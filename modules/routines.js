/*
	Routines

	– Season
	– time of the day (morning, afternoon, night)
	– special day

*/
var colors = require('colors'),
	moment = require('moment'),
	schedule = require('node-schedule'),
	util = require('util');

var log = function(msg) {
	return util.log('::: Routines ::: '.cyan + (msg).bold);
};

var routines = function(settings) {

	var params = {
		TIME_CONDITION: 1 // morning
	};
	var module = {};
	// setup cron
	module.everyHour = function(cb) {
		var rule = new schedule.RecurrenceRule();
		rule.minute = 0; // occur every hour
		var j = schedule.scheduleJob(rule, function() {
			cb();
		});
	};

	module.everyDay = function(cb) {
		var rule = new schedule.RecurrenceRule();
		rule.hour = 12; // occur every hour
		var j = schedule.scheduleJob(rule, function() {
			cb();
		});
	};

	module.once = function(cb) {
		if(cb) cb();
	};

	module.getUnixSecond = function() {
		var unix = new Date().getTime();
		return ~~(unix);
	};

	module.getCurrTimeCondition = function() {
		// 1 = morning, 2 = afternoon, 3 = evening, 4 = night
	};

	
	return module;
};

// Finally export

module.exports = routines;