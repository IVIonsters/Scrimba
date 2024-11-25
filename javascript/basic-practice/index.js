// lets create a basic function setup.
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// add 3 points
function add3Points() {
    myPoints = myPoints += 3
}

// remove single point
function remove1Point() {
    myPoints = myPoints -= 1
}

// call functions to modify points
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)


// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) //My Points 59
console.log(2 + 2) //  4 
console.log("11" + "14") // 1114
