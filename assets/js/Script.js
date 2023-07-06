// global variables that control the state of the quiz
var timer = 60;
var timerId;

var questions = [
  {
    question: "What is the Newest valorant agent?",
    answers: ["Chamber", "Astra", "Jett", "Deadlock"],
    correctAnswer: "Deadlock",
  },
  {
    question: "What is Batman's real name?",
    answers: ["Jack", "Slippin' Jimmy", "Bruce", "Jason"],
    correctAnswer: "Bruce",
  },
];
var currentQustion = 0;

// All of our selectors

// functions

function startgame() {
  // triggered when they press button use event listener
  // start timer start interval
  startTimer();
  // display none/display hidden for CSS

  // Text content for timer
}

// event listener for beginning quiz

function nextquestion(event) {
  // triggered when the user selects any answer
  // figure out what answer the user chose "eventTarget"
  // check answer if answer is wrong or right
  // if wrong reduce the time and show that its wrong
  // increment the current question by 1
  // save to local storage
  // change the question
  // change the choice
}

function gameOver() {
  // activates when game is over either time out or last question is answered
  // stops timer
  // link to the ending page
  // prompts the user for name
  // display score
  // if the user finishes before timer ends, stop and record timer
}

function SaveName() {
  // triggered when the user submits their name
  // save the scores and their name to local storage
  // read (save them to another var) the existing score
  // add the new scores to the end of the array
  // now overwrite the scores with the new array (do these steps in this order)
  // take the user to the highscore.html
}
