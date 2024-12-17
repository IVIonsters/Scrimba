const sortBtn = document.getElementById('sort-btn')
let container = document.getElementById('container')

sortBtn.addEventListener('click', () => {
  container.classList.toggle('reverse')
  console.log('sort button hovered')
});

