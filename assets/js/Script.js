// global variables that control the state of the quiz
var questions = [
  {
    prompt: "What is the Newest valorant agent?",
    answers: ["Chamber", "Astra", "Jett", "Deadlock"],
    correctAnswer: "Deadlock",
  },
  {
    prompt: "What is Batman's real name?",
    answers: ["Jack", "Slippin' Jimmy", "Bruce", "Jason"],
    correctAnswer: "Bruce",
  },
  {
    prompt: "Can a match box?",
    answers: ["Yes", "No", "No, but a tin can", "Yes, one beat mike tyson"],
    correctAnswer: "No, but a tin can",
  },
  {
    prompt: "Who does Michael Scott end up with in The Office",
    answers: ["Jan Levinson", "Holly Flax", "Carol Stills", "Helene Beesly"],
    correctAnswer: "Holly Flax",
  },
];

var currentQuestion = 0;
var timer = 60;
var timerId;

// functions
// event listener for beginning quiz
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
      if (answer !== question.correctAnswer) {
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

  window.location.href = "HighScores.html";
}
