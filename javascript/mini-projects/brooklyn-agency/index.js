// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

let imgContainer = document.getElementById('container')

function renderImages() {
  for (let i = 0; i < imgs.length; i++) {
    imgContainer.innerHTML += `
      <img src="${imgs[i]}" alt="team member" class="team-img">
    `
  }
}

renderImages()
//  --------------------------------------------------------------------------
// optimized version

// Array of image paths
// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ];

// // Reference to the container where images will be rendered
// let imgContainer = document.getElementById('container');

// // Function to render images
// function renderImages() {
//   // Use a variable to build the HTML string
//   let imgHTML = "";

//   // Loop through the array of image paths
//   for (let i = 0; i < imgs.length; i++) {
//     // Append each image HTML to the string
//     imgHTML += `
//       <img src="${imgs[i]}" alt="team member ${i + 1}" class="team-img">
//     `;
//   }

//   // Update the container's innerHTML once, after the loop
//   imgContainer.innerHTML = imgHTML;
// }

// // Call the function to render images
// renderImages();
// --------------------------------------------------------------------------
// BEST VERSION POSSIBLE
// Array of image paths
// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ];

// // Reference to the container where images will be rendered
// let imgContainer = document.getElementById('container');

// // Function to render images
// function renderImages() {
//   // Loop through the array of image paths
//   imgs.forEach((imgSrc, index) => {
//     // Create a new <img> element
//     const img = document.createElement('img');

//     // Set the attributes for the <img> element
//     img.src = imgSrc; // Image source
//     img.alt = `Team member ${index + 1}`; // Accessibility text
//     img.className = 'team-img'; // CSS class for styling

//     // Append the <img> element to the container
//     imgContainer.appendChild(img);
//   });
// }

// // Call the function to render images
// renderImages();