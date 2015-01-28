/*
	Settings
	
	– Pattern
	– Color
	– Speed
	– Randomizer
	– Direction
*/

var settings = function() {
	
	var settings = {
		PATTERN: 1,
		COLOR: 2,
		SPEED: 3,
		RANDOMIZER: 4,
		DIRECTION: 5
	};

	settings.resetToDefault = function(cb) {
		if(cb) cb();
	};

	settings.changeParam = function(param, val, cb) {
		this[param] = val;
		if(cb) cb();
	};

	settings.getParam = function(param, cb) {

		if(cb) cb(this[param]);
	};

	return settings;
};

// Finally export

module.exports = settings;