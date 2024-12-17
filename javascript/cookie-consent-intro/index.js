const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById("modal-text");

// Set a timeout to show the modal after 1.5 seconds
setTimeout(() => {
  modal.style.display = "block";
}, 1500);

// Close the modal when the close button is clicked
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

const formId = document.getElementById("consent-form");

// Prevent the form from submitting and replace modal text
consentForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // Form data is collected and displayed in the console
  const consentFormData = new FormData(consentForm)
  const fullName = consentFormData.get('fullName')
  console.log('The response from the form is:', fullName)


  // Replace the modal text
  modalText.innerHTML = `
  <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">Uploading your data to the dark web...</p>
  </div>`

  // Set a timeout to simulate the upload process
  setTimeout(function () {
    document.getElementById("upload-text").innerText = "Making the sale..."
  }, 1500)

  // Set a timeout to replace the modal text after 3 seconds
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `
  }, 3000)

  // Enable modal button X
  const modalCloseBtn = document.getElementById('modal-close-btn')

  // set timeout to display X to close modal after 7 seconds
  setTimeout(() => {
    modalCloseBtn.disabled = false
  }, 4500)
});

// grab decline button element
const declineBtn = document.getElementById('decline-btn')

// grab container element
const modalBtn = document.getElementById('modal-choice-btns')
// add event listener to decline button

declineBtn.addEventListener('mouseenter', () => {
  modalBtn.classList.toggle('modalReverse')
  console.log('decline button hovered')
})


