// main variables
let sentence = ["Hello ", "my ", "name ", "is ", "Zachary ", "and ", "I ", "am ", "learning ", "JavaScript "] 
let greeting = document.getElementById("greeting")

// Render the sentence array in the greeting div using a for loop and .textContent
for (let i=0; i<sentence.length; i++) {
  greeting.textContent += sentence[i]
}
