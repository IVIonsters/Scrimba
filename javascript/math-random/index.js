let randomNumber = Math.random();

console.log(randomNumber);

// what does Math.random() do?

// Math.random() generates a random number between 0 and 1 (not including 1). This is useful for generating random numbers in JavaScript. For example, if you want to simulate a dice roll, you can use Math.random() to generate a random number between 1 and 6.

console.log("-------------------------");

// How can you generate a random number between 1 and 10?

let randomNum = Math.random() * 10;

console.log(randomNum);

// the issue with this is that it will generate a number between 0 and 9.9999999999999999, but not 10, the number is not inclusive.

console.log("-------------------------");

let flooredNumber = Math.floor(3.95632)

console.log(flooredNumber)

// Math.floor() rounds a number down to the nearest whole number. In this case, 3.95632 is rounded down to 3.


console.log("-------------------------");

// lets combined Math.random() and Math.floor() to generate a random number between 1 and 10

let randomNum2 = Math.floor(Math.random() * 10)

console.log(randomNum2)

// now all the possible numbers are between 0 and 9, but not 10, the number is not inclusive.

console.log("-------------------------");

// lets add 1 to the random number to make it inclusive of 10
// lets do this by creating a function for a dice roll

function rollDice() {
  let diceNumber = Math.floor(Math.random() * 6) + 1
  return diceNumber
}

console.log(rollDice())

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function rockPaperScissor() {
  let randomHand = Math.floor(Math.random() * hands.length)
  return hands[randomHand]
}   

console.log(rockPaperScissor())