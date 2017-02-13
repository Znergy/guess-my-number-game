

var userGuessCount = 3;

var userGuess = document.getElementById("userInput").value;


//This will call the generateRandomNum function, test it versus the user's guess, then change the html accordingly..
document.getElementById("submit").onclick=function() {
  var gameState = true;
  var userGuess = document.getElementById("userInput").value;
  while (gameState) {
    if ((userGuess >= 1) && (userGuess <= 12)) {
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
  }
  // decrease guess count after user guesses
  // if the guess count is within a valid range
  if(userGuessCount <= 3 || userGuessCount >= 0) {
    userGuessCount--;
    checkCount(userGuessCount);
  } else {
    var userChoice = prompt("You have no lives left. Do you want to play again? Type yes or no.");
    userChoice.toLowerCase();
    userContinue(userChoice);
  }
}

function userContinue (choice) {
  if (choice == yes || choice == y) {
    resetGame();
  } else if (choice == no || choice == n) {
    alert("Thanks for playing");
  }
}

function resetGame () {
  // reset text fields
  document.getElementById("winOrLose").innerHTML = "";
  document.getElementById("guessCount").innerHTML = "";

  // reset userGuessCount to 3
  userGuessCount = 3;
}

// This will generate a random number between two values
function generateRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// This will trigger when someone hits enter within the input field
function enterIsPressed() {
  if (event.keyCode == 13) {
    document.getElementById("submit").click();
  }
}

function checkCount(count) {
  if (count == 0) {
    // game over
    document.getElementById("guessCount").innerHTML = "You have " + count + " guesses left.";
    alert("Game Over!");
  } else {
    document.getElementById("guessCount").innerHTML = "You have " + count + " guesses left.";
  }
}

function checkWin(count) {

}
