

////////////////////////////////////////////
////// CALCULATOR
////////////////////////////////////////////

//Defining Variables
var x = 0,
y = 0,
z = 0,
solution = 0;


//document.querySelector('.result').textContent = solution

/////////////////////////////
//Calculator with two values
/////////////////////////////

function add() {
  solution = x + y;
  document.querySelector('.calc-two-result').textContent = solution;
}

function subtract() {
  solution = x - y;
  document.querySelector('.calc-two-result').textContent = solution;
}

function multiply() {
  solution = x * y;
  document.querySelector('.calc-two-result').textContent = solution;
}

function divide() {
  solution = x / y;
  document.querySelector('.calc-two-result').textContent = solution;
}

function mod() {
  solution = x % y;
  document.querySelector('.calc-two-result').textContent = solution;
}

///////////////////////////////
//Calculator with three values
///////////////////////////////

function add3() {
  solution = x + y + z;
  document.querySelector('.calc-three-result').textContent = solution;
}

function subtract3() {
  solution = x - y - z;
  document.querySelector('.calc-three-result').textContent = solution;
}

function multiply3() {
  solution = x * y * z;
  document.querySelector('.calc-three-result').textContent = solution;
}

function divide3() {
  solution = x / y / z;
  document.querySelector('.calc-three-result').textContent = solution;
}


// setX , setY , and setZ takes the string
// as a parameter, casts it to a number,
// and stores that value in the x, y, or z.

function setX(xString) {
  x = Number(xString);
}

function setY(yString) {
  y = Number(yString);
}

function setZ(zString) {
  z = Number(zString);
}




////////////////////////////////////////////
////// GUESSING-GAME
////////////////////////////////////////////

var gameNumber = Math.floor(Math.random() * 10) + 1;
var numTries = 0;
var solution = 0;


function choose() {
  numTries = ++numTries;
 if (guess > gameNumber) {
   solution = "Too high!";
   document.querySelector('.guess-result').textContent = solution;
 } else if (guess < gameNumber) {
   solution = "Too low!";
   document.querySelector('.guess-result').textContent = solution;
 } else {
    solution = "Correct! You guessed in " + numTries + " tries.";
    document.querySelector('.guess-result').textContent = solution;
}
}

function setGuess(guessValueAsString) {
 guess = Number(guessValueAsString);
}


////////////////////////////////////////////
////// CONVERTER
////////////////////////////////////////////

// var n=0;

//vol is volume, dist is distance, temp is temperature
var vol=0,
dist=0
temp=0;
var solution = 0;

//Conversion Cups to Quarts
function convertCups() {
  solution = vol + " cups is " + (vol / 4) + " quart(s)";
  document.querySelector('.vol-convert-result').textContent = solution;
}

//Conversion Quarts to Cups
function convertQuarts() {
  solution = vol + " quarts is " + (vol * 4) + " cups(s)";
  document.querySelector('.vol-convert-result').textContent = solution;
}

//Conversion Meters to Yards
function convertMeters() {
  solution = dist + " meters is " + (dist * 1.09361) + " yard(s)";
  document.querySelector('.dist-convert-result').textContent = solution;
}

//Conversion Yards to Meters
function convertYards() {
  solution = dist + " yards is " + (dist / 1.09361) + " meter(s)";
  document.querySelector('.dist-convert-result').textContent = solution;
}

//Conversion Celcius to Fahrenheit
function convertCelcius() {
  solution = temp + "\xB0C is " + (temp * 9/5 + 32) + "\xB0F";
  document.querySelector('.temp-convert-result').textContent = solution;
}

//Conversion Fahrenheit to Celcius
function convertFahrenheit() {
  solution = temp + "\xB0F is " + ((temp - 32) * 5/9) + "\xB0C";
  document.querySelector('.temp-convert-result').textContent = solution;
}


function setTemp(temperatureString) {
  temp = Number(temperatureString);
}

function setDist(distanceString) {
  dist = Number(distanceString);
}

function setVol(volumeString) {
  vol = Number(volumeString);
}


//setN string to a number stored in N
// function setN(nString) {
//   n = Number(nString);
// }


//
// var cups = 0;
//
// function convertCQ() {
//   alert(cups / 4 + " Quart(s)");
// }
//
// function setCups(cupsValueAsString) {
//   cups = Number(cupsValueAsString);
// }
//
//
// var quarts = 0;
//
//
// function convertQC() {
//   alert(quarts * 4 + " Cup(s)");
// }
//
//
// function setQuarts(quartsValueAsString) {
//   quarts = Number(quartsValueAsString);
// }

//
// var meters = 0;
//
//
// function convertMY() {
//   alert(n * 1.09361 + " Yard(s)");
// }
//
//
//
// function setMeters(metersValueAsString) {
//   meters = Number(metersValueAsString);
// }
//
// var yards = 0;
//
//
// function convertYM() {
//   alert(n / 1.09361 + " Meter(s)");
// }
//
//
// function setYards(yardsValueAsString) {
//   yards = Number(yardsValueAsString);
// }
