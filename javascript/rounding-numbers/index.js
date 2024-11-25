// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

let totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${totalPrice}`


// This returns a string though, so we need to convert it back to a number
// if you want to do any math with it.
const btn2 = document.getElementById("purchase-btn2")
let roundedPrice = totalPrice.toFixed(2)
btn2.textContent = `Buy €${roundedPrice}`

// Math.Floor method - gives precision to the lower number
// ideal for needing to do more math with the number
const btn3 = document.getElementById("purchase-btn3")
let roundedPrice2 = Math.floor(totalPrice * 100) / 100
btn3.textContent = `Buy €${roundedPrice2}`

// To fixed - converting the string back to a number
let totalPriceString = "420.69235632455";
const btn4 = document.getElementById("purchase-btn4");
// Convert string to number and then apply .toFixed()
btn4.textContent = `Buy €${parseFloat(totalPriceString).toFixed(2)}`;
