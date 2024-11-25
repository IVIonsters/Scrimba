let data = [
  {
    player: "Jane",
    score: 52
  },
  {
    player: "Mark",
    score: 41
  }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const button = document.querySelector('button');
const scoreDisplay = document.querySelector('#display');

button.addEventListener('click', () => {
  scoreDisplay.innerHTML = data[0].score;
  console.log(data[0].score);
});