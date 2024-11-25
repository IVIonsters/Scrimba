// template strings/literals

const recipient = "James"
const sender = "Zachary"
// Create a new variable, sender, and set its value to your name

// Use your sender variable instead of "Per"
const email = `
  Hey ${recipient}! 
  How is it going? 
  Cheers ${sender}`

console.log(email)

console.log('---------------------------------')

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
// SETTING THE STAGE
const player = "Zachary"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(`${player} got  ${points} points and won ${game}`)
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game ${game}`)
}

