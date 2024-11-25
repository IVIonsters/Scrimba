// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for (let count = 1; count < 11; count += 1) {

  console.log(count)

};

console.log('---------------------------------')

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let countBig = 10; countBig < 101; countBig += 10) {
  console.log(countBig)
}

console.log('---------------------------------')

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i += 1) {
  console.log(cards[i])
}

console.log('---------------------------------')

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log('The 5 largest countries in the world:')
for (let i = 0; i < largeCountries.length; i += 1) {
  console.log(largeCountries[i])
}

console.log('---------------------------------')

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

logItems(myCourses)