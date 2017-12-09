//variables

var randomNumber;
var buttonRandom1;
var buttonRandom2;
var buttonRandom3;
var buttonRandom4;
var totalScore;

//Games Start


//Functions
$(document).ready(function(){

var randomNumber = getRandomIntInclusive(19,120);
var buttonRandom1 = getRandomIntInclusive(1,12);
var buttonRandom2 = getRandomIntInclusive(1,12);
var buttonRandom3 = getRandomIntInclusive(1,12);
var buttonRandom4 = getRandomIntInclusive(1,12);
var totalScore = 0;

//Updates Random Number

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


$("#random-number").text(randomNumber);


//Button Click Events

//Crystal 1
$("#crystal-1").on("click", function(){
	

	
	totalScore = totalScore + buttonRandom1;


          $("#total-score").text(totalScore);


});

//Crystal 2

$("#crystal-two").on("click", function(){
	;
totalScore = totalScore + buttonRandom2;
 $("#total-score").text(totalScore);

});

//Crystal 3

$("#crystal-three").on("click", function(){
totalScore = totalScore + buttonRandom3;
 $("#total-score").text(totalScore);

});

//Crystal 4
$("#crystal-four").on("click", function(){
totalScore = totalScore + buttonRandom4;
 $("#total-score").text(totalScore);
 });





	























}); //END DOC READY