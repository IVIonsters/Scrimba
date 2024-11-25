// set base score and set textContent to display the score
let homeScore = 0;
let awayScore = 0;
document.getElementById("home-score").textContent = homeScore;
document.getElementById("away-score").textContent = awayScore;

// Function to update the scores and highlight the leading score
function updateScores() {
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("away-score").textContent = awayScore;

  const homeScoreContainer = document.getElementById("home-score");
  const awayScoreContainer = document.getElementById("away-score");

  if (homeScore > awayScore) {
    homeScoreContainer.classList.add("leading");
    awayScoreContainer.classList.remove("leading");
  } else if (awayScore > homeScore) {
    awayScoreContainer.classList.add("leading");
    homeScoreContainer.classList.remove("leading");
  } else {
    homeScoreContainer.classList.remove("leading");
    awayScoreContainer.classList.remove("leading");
  }
}

// create function to add one point to the home team score
function singlePointHome() {
  homeScore += 1;
  updateScores();
}

// create function to add two points to the home team score
function twoPointsHome() {
  homeScore += 2;
  updateScores();
}

// create function to add three points to the home team score
function threePointsHome() {
  homeScore += 3;
  updateScores();
}

// create function to add one point to the away team score
function singlePointAway() {
  awayScore += 1;
  updateScores();
}

// create function to add two points to the away team score
function twoPointsAway() {
  awayScore += 2;
  updateScores();
}

// create function to add three points to the away team score
function threePointsAway() {
  awayScore += 3;
  updateScores();
}

// create function to reset the scores
function reset() {
  homeScore = 0;
  awayScore = 0;
  updateScores();
}

// Timer logic
let timerInterval;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      display.textContent = "00:00";
      alert("Time's up!");
    }
  }, 1000);
}

window.onload = function () {
  const tenMinutes = 60 * 10,
    display = document.getElementById("timer");
  startTimer(tenMinutes, display);
};

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  const tenMinutes = 60 * 10,
    display = document.getElementById("timer");
  startTimer(tenMinutes, display);
}

// Add reset timer functionality to the reset button
document.querySelector(".resetButton").addEventListener("click", resetTimer);