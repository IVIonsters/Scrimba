const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close-btn');

setTimeout(() => {
  modal.style.display = 'block';
}, 1500);

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

const formId = document.getElementById('consent-form')

formId.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
});