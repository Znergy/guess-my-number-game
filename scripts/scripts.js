

var userGuessCount = 0;

var userGuess = document.getElementById("userInput").value;


//This will call the generateRandomNum function, test it versus the user's guess, then change the html accordingly..
document.getElementById("submit").onclick=function() {
  var gameState = true;
  var userGuess = document.getElementById("userInput").value;
  while (gameState) {
    if ((userGuess >= 1) && (userGuess <= 12)) {
      // increase userGuessCount if args are met
      userGuessCount++;
      var myNumber = generateRandomNum(1, 12);

      if(myNumber == userGuess) {
        // change a text field
        document.getElementById("winOrLose").innerHTML = "You guessed " + userGuess + ", my number was " + myNumber + ". You Win! Type another number to play again!";
        gameState = false;
      } else {
        document.getElementById("winOrLose").innerHTML = "You guessed " + userGuess + ", my number was " + myNumber + ". You Lose. Type another number to play again!";
        gameState = false;
      }
    } else {
      document.getElementById("winOrLose").innerHTML = "Please enter a valid number";
      gameState = false;
    }
    document.getElementById("userInput").innerHTML = "";
  }

}

// This will generate a random number between two values
function generateRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
