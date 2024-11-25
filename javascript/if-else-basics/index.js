// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let ageCheck = 21;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (ageCheck < 21) {
  console.log("access denied, you are not old enough to enter the club");
} else {
  console.log("Welcome");
}

//  with this logic anyone who is 21 or older can enter the club.

console.log("----------------");

// Check if the person is eligible for a birthday card from the King! (100)

let ageKing = 100;

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"

if (ageKing < 100) {
  console.log("Sorry, you are not old enough to chat with the king");
} else if (ageKing === 100) {
  console.log("Here is your birthday card from the King!");
} else {
  console.log("Sorry, you have already had a chat with the king");
}

// with this logic only people who are exactly 100 years old can get a birthday card from the king.

console.log("----------------");

console.log(4 === 3)  // False
console.log(5 > 2)    //  True
console.log(12 > 12)  // False
console.log(3 < 0)    // False
console.log(3 >= 3)   //  True
console.log(11 <= 11) // True
console.log(3 <= 2)   // False

console.log("----------------");

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable 

if(age < 6) {
  console.log("Free");
} else if (age >= 6 && age <=17) {
  console.log("Child discount");
} else if (age >=18 && age <=26) {
  console.log("Student discount");
} else if (age >=27 && age <=66) {
  console.log("Full price");
} else {
  console.log("Senior citizen discount");
}