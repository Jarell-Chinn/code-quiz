// global variables that control the state of the quiz
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

var currentQuestion = 0;
var timer = 60;
var timerId;

// All of our selectors

// functions

document.getElementById("startButton").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("quiz").classList.remove("hidden");
  nextQuestion();
  timerId = setInterval(countdown, 1000);
});

function countdown() {
  document.getElementById("timer").textContent = --timer;
  if (timer <= 0) {
    gameOver();
  }
}

// event listener for beginning quiz
function nextQuestion() {
  var question = questions[currentQuestion];
  var quiz = document.getElementById("quiz");
  quiz.innerHTML = "";
  var prompt = document.createElement("h2");
  prompt.textContent = question.prompt;
  quiz.appendChild(prompt);
  question.answers.forEach(function (answer, i) {
    var button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", function () {
      if (answer === question.correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
      } else {
        timer -= 10;
        document.getElementById("timer").textContent = timer;
      }
      if (++currentQuestion < questions.length) {
        nextQuestion();
      } else {
        gameOver();
      }
    });
    quiz.appendChild(button);
  });
}

function gameOver() {
  // activates when game is over either time out or last question is answered
  clearInterval(timerId);
  // score is time left on timer
  var score = timer;
  // prompts the user for name
  var name = prompt(
    "Quiz Completed. Your score is " +
      score +
      ". Enter your name for the high scores"
  );
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ name: name, score: score });
  // store the highscores into localstorage
  localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "./assets/html/HighScores.html";
}

function SaveName() {
  // triggered when the user submits their name
  // save the scores and their name to local storage
  // read (save them to another var) the existing score
  // add the new scores to the end of the array
  // now overwrite the scores with the new array (do these steps in this order)
  // take the user to the highscore.html
}
