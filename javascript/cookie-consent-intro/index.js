const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close-btn');
const modalText = document.getElementById('modal-text');

// Set a timeout to show the modal after 1.5 seconds
setTimeout(() => {
  modal.style.display = 'block';
}, 1500);

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

const formId = document.getElementById('consent-form');

// Prevent the form from submitting and replace modal text
formId.addEventListener('submit', (e) => {
  e.preventDefault();
  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
    </div>
  `;
});

