// view in browser to see the magic happen!
const welcomeEl = document.getElementById("welcome-el")
let greeting = "I see you have been here before... Welcome back 👋"
let name = "Richard of York "
let emoji = "💡"

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting} ${name} ${emoji}`
}

// Call the function and pass in the greeting variable
greetUser(greeting, name, emoji)

// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
  return num1 + num2; // Add the two numbers and return the sum
}

let sum = add(3, 4) // should log 7
let resultDisplay = document.getElementById("result")

resultDisplay.textContent = `The sum of 3 and 4 is ${sum}`
// ----------------------------------------------------------------------

// Create a function, getFirst(arr), that returns the first item in the array
let array = getFirst([1, 2, 3, 4, 5])

function getFirst(array) {
  return array[0]
}

let arrayDisplay = document.getElementById("array")
arrayDisplay.textContent = `The first item in the array is ${array}`