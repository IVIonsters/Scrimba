const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const quantityDisplay = document.getElementById('quantity-display')
const cartBtn = document.getElementById('cartBtn')

let quantity = 0

decrement.addEventListener('click', function () {
  quantity--
  if (quantity === 0) {
    decrement.disabled = true
  }
  quantityDisplay.innerText = quantity
  // if statement for add to cart
  if (quantity === 0) {
    cartBtn.disabled = true
  }
})

increment.addEventListener('click', function () {
  quantity++
  decrement.disabled = false
  quantityDisplay.innerText = quantity
  // if statement for add to cart
  if (quantity > 0) {
    cartBtn.disabled = false
  }
})

cartBtn.addEventListener('click', function () {
  console.log(`Your order for ${quantity} pairs of shoes is being processed`)

})