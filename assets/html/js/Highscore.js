var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highscoresDiv = document.getElementById("highscores");
highscores.sort(function (a, b) {
  return b.score - a.score;
}); // Sort high to low
highscores.forEach(function (score) {
  var p = document.createElement("p");
  p.textContent = score.name + ": " + score.score;
  highscoresDiv.appendChild(p);
});
