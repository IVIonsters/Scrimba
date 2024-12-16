const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const quantityDisplay = document.getElementById('quantity-display')
const cartBtn = document.getElementById('cartBtn')

let quantity = 0

decrement.addEventListener('click', function () {
  quantity--
  quantityDisplay.innerText = quantity
})

increment.addEventListener('click', function () {
  quantity++
  quantityDisplay.innerText = quantity
})

cartBtn.addEventListener('click', function () {
  console.log(`Your order for ${quantity} pairs of shoes is being processed`)

})