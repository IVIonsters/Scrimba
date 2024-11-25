// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
  "Check out my Netflix clone",        // 0 
  "Here's the code for my project",    // 1
  "I've just relaunched my portfolio"  // 2
]

console.log( featuredPosts[2] )

console.log('-------------------')

let experience = ["Fullstack developer", "Frontend developer", "Backend developer"]

// Make the following appear in the console:
// "Frontend developer"
// "Backend developer"
// "Fullstack developer"

console.log(experience[0])
console.log('-------------------')
console.log(experience[1])
console.log('-------------------')
console.log(experience[2])
console.log('-------------------')

// create an an array that describes yourself: use three primitive data types.
// string, number, boolean
// your name, age, and whether you like developing.
// print each one to the console, as well as them all at once.

let aboutMe= ['Zachary', 31, true]
console.log(aboutMe)
console.log('-------------------')
console.log(aboutMe[0])
console.log('-------------------')
console.log(aboutMe[1])
console.log('-------------------')
console.log(aboutMe[2])
console.log('-------------------')

// lets talk about .push()
// .push() is a method that allows us to add items to the end of an array
// here is an example, push adds the item to the end of the array
let cards = ['diamond', 'spade', 'heart', 'club']
cards.push('ace')
console.log(cards)
console.log('-------------------')

// you can also use .push() with variables
let newCard = ['queen', 'king', 'joker']
let jack = 'jack'
newCard.push(jack)
console.log(newCard)
console.log('-------------------')

// lets talk about .pop()
// .pop() is a method that allows us to remove the last item from an array
// here is an example, pop removes the last item from the array
let dishes = ['plates', 'cups', 'bowls', 'forks']
dishes.pop()
console.log(dishes)
console.log('-------------------')

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places 1st and last

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.shift()
largeCountries.unshift('China')
largeCountries.push('Pakistan')

console.log(largeCountries)