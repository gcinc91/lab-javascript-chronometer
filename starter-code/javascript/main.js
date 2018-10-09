var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  var intervalId = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnLeft.className = "btn split";
  btnLeft.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnLeft.className = "btn reset";
  btnLeft.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
if (btnLeft.className === "btn start"){

  setStopBtn();
  printTime();
  chronometer.startClick();
}else{
  setStartBtn();
  chronometer.stopClick();
}

});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  
    chronometer.resetClick();
   
});
