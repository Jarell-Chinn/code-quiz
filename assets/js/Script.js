// global variables that control the state of the quiz
var scores = 0;
var timeLeft = 120;
var questions = ["What valorant agent just came out"];
var potentialAnswers = [["Jett", "Kayo", "Astra", "Deadlock"], [""], [""]]; //an array of arrays
var correctAnswers = []; // made of strings
var currentqustions = 0;

// All of our selectors
var question1 = document.querySelector("#question");

// function
function init() {
  // triggered when they press button use event listener
  // links to other html to show questions
  // start timer start interval
  //
}

function gamerOver() {
  // activates when game is over either time out or last question is answered
  // stops timer
  // link to the ending page
  // prompts the user for name
  // display score
  // if the user finishes before timer ends, stop and record timer
}

function saveName() {
  // triggered when the user submits their name
  //save the scores and their name to local storage
  // read (save them to another var) the existing score
  // add the new scores to the end of the array
  // now overwrite the scores with the new array (do these steps in this order)
  // take the user to the highscore.html
}
