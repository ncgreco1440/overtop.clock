var Clock = function() {
	
};

Clock.prototype.timeUntilMidnight = function() {
	//TODO...
};

Clock.prototype.timeUntilNextWeek = function() {
	//TODO...
};

Clock.prototype.timeUntilNextMonth = function() {
	//TODO...
};

Clock.prototype.timeUntilNextYear = function() {
	//TODO...
};

Clock.prototype.daylightSavings = function() {
	//TODO...
};

Clock.prototype.date = function(args) {
	return new Date(args.year, args.month, args.day);
};

Clock.prototype.utc = function() {
	
};

// Alias for utc
Clock.prototype.gmt = function() {
	return this.utc();
};

module.exports = Clock;