// declare main variables
let cards = []; // array of cards
let sum = 0;
let blackJack = false;
let playerAlive = false;
let message = "";

// Get the DOM element for message display
let messageDisplay = document.getElementById("messageDisplay");
let sumDisplay = document.getElementById("sumDisplay");
let cardDisplay = document.getElementById("cardDisplay");
let playerDisplay = document.getElementById("playerDisplay");

// player object
let player = {
  name: "Player",
  chips: 200,
};

// Display the player object
playerDisplay.textContent = player.name + ": $" + player.chips;

// Random card function
function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    console.log("Ace");
    return 11; // ACE
  } else if (randomNumber > 10) {
    console.log("Jack, Queen, King");
    return 10; // Jack, Queen, King
  } else {
    console.log("numbers 2-10");
    return randomNumber; // numbers 2-10
  }
}

// Start the game - work around for game development
function startGame() {
  playerAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  // this updates the global variables because they are outside the function
  cards = [firstCard, secondCard]; // array of cards
  sum = firstCard + secondCard;
  cardGame();
}


//  re-render the game
function cardGame() {
  // check if the sum is less than 21, exactly 21, or over 21
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You've got Blackjack!";
    blackJack = true;
  } else {
    message = "Tough luck Ol' Bean, your outta the game!!";
    playerAlive = false;
  }

  // let's cash in some chips and play again!
  console.log("blackjack status = " + blackJack);

  // check if the player is still in the game
  console.log("player status = " + playerAlive);

  // Initial message
  messageDisplay.textContent = message;

  // Display the sum
  sumDisplay.textContent = "Sum: " + sum;

  // Display the cards - refer to the cards array at the top
  cardDisplay.textContent = "Cards: ";

  // Loop through the cards array and display each card
  for (let i = 0; i < cards.length; i++) {
    cardDisplay.textContent += cards[i] + " - ";
  }
}

// New card function
function newCard() {
  if (playerAlive === true && sum < 21) {
    console.log("New card function called");

    // New Card Value
    let newCard = randomCard();

    // add new card to sum
    sum += newCard;

    // push new card to cards array
    cards.push(newCard);
    console.log(cards);
    // recall startGame()
    cardGame();
  } else {
    console.log("Player is out of the game");
  }
}
