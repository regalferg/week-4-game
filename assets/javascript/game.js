//variables

var randomNumber;
var buttonRandom1;
var buttonRandom2;
var buttonRandom3;
var buttonRandom4;
var totalScore;
var wins = 0;
var losses = 0;
var random;
var total;


//Games Start




$(document).ready(function(){

 randomNumber = getRandomIntInclusive(19,120);
 buttonRandom1 = getRandomIntInclusive(1,12);
 buttonRandom2 = getRandomIntInclusive(1,12);
 buttonRandom3 = getRandomIntInclusive(1,12);
buttonRandom4 = getRandomIntInclusive(1,12);
	totalScore = 0;

//Game Reset
function resetGame(){
	randomNumber = getRandomIntInclusive(19,120);
	 buttonRandom1 = getRandomIntInclusive(1,12);
 buttonRandom2 = getRandomIntInclusive(1,12);
 buttonRandom3 = getRandomIntInclusive(1,12);
buttonRandom4 = getRandomIntInclusive(1,12);
	totalScore = 0;
	


// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
// }
$("#total-score").text(total);
$("#random-number").text(randomNumber);


}; //END of RESET


//Updates Random Number

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function scores(){
	 total = $("#total-score").text();
	  random= $("#random-number").text();

	if (total == random && total > 0 ) {
		wins++;
		
		resetGame();

	console.log("match! " + " Total= " + total + " Random= " + random );
	$("#loss-ratio").text("Loss: " + losses)
	$("#win-ratio").text("Wins: " + wins);

}
 if (total > random) {
	losses++;
	
	resetGame();


	console.log("Total= " + total + " Random= " + random );
	$("#loss-ratio").text("Loss: " + losses);

}


} //END OF SCORES



$("#random-number").text(randomNumber);


//Button Click Events

//Crystal 1
$("#crystal-1").on("click", function(){

totalScore = totalScore + buttonRandom1;
 $("#total-score").text(totalScore);
 scores();

});

//Crystal 2

$("#crystal-two").on("click", function(){
	;
totalScore = totalScore + buttonRandom2;
 $("#total-score").text(totalScore);
 scores();

});

//Crystal 3

$("#crystal-three").on("click", function(){
totalScore = totalScore + buttonRandom3;
 $("#total-score").text(totalScore);
 scores();

});

//Crystal 4
$("#crystal-four").on("click", function(){
totalScore = totalScore + buttonRandom4;
 $("#total-score").text(totalScore);
 scores();
 });


// function convertWins(){
// 	var updateWins = $("#total-score").text();
// }

//Win Ratio

// totalScore = parseInt(totalScore);
// randomNumber = parseInt(randomNumber);





// 	if (ifWin == ifLose && ifWin > 0) {
// 		win++

// 	console.log("match!")
// 	$("#win-ratio").text("Wins: " + wins);

// }
//  if (ifWin < ifLose) {
// 	losses++;
// 	$("#loss-ratio").text("Loss: " + losses);

// }























}); //END DOC READY