var wunderAPI = 'http://api.wunderground.com/api/4127799bc4bc6295/conditions/q/NY/10027.json',
	request = require('request'),
	util = require('util'),
	log = function(msg) {
		return util.log('::: Weather ::: '.cyan + (msg));
	};

var weather = {};

weather.getCurrentWeatherCondition = function(cb) {
	request(wunderAPI, function(err, res, body) {
		if (!err && res.statusCode == 200 && cb) {
			// log(body.current_observation);
			cb(body); // Show the HTML for the Google homepage.
		}
	});
};

module.exports = weather;