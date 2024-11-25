let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

// this is a logical AND operator
if(hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

console.log("-----------------------------------") 

// this is the logical OR operator
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries = true
let likesStartups = false

if( likesDocumentaries || likesStartups === true) {
  recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
}

console.log("-----------------------------------") 

let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&


function isFridayThe13th() {
  if(weekday === "Friday" && dayOfMonth === 13) {
    console.log("😱")
  } else {
    console.log("Nothing to worry about!")
  }
}

isFridayThe13th()