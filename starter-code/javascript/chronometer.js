// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  that = this;

  this.intervalId = setInterval(function() {
    that.currentTime += 1;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds;
  if (this.currentTime < 60) {
    seconds = this.currentTime;
    return seconds;
  } else {
    seconds = this.currentTime % 60;
    return seconds;
  }
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  if (value < 10) {
    return "0" + value;
  }else{
    return value + ""
    }
};

 Chronometer.prototype.setTime = function () {
   
  this.minutes = this.twoDigitsNumber(this.minutes);
  this.seconds = this.twoDigitsNumber(this.seconds);

 };

Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

 Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
