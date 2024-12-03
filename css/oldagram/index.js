const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }
];

const mainContainer = document.querySelector('.mainContainer');

posts.forEach(post => {
  const postSection = document.createElement('section');
  postSection.classList.add('postContainer');

  postSection.innerHTML = `
    <section class="artistInfo">
      <img class="artistAvatar" src="${post.avatar}" alt="images of ${post.name}" />
      <div class="artistText">
        <p class="artistName">${post.name}</p>
        <p class="artistLocation">${post.location}</p>
      </div>
    </section>
    <img class="postImage" src="${post.post}" />
    <div class="postIcons">
      <img class="icon" src="images/icon-heart.png" />
      <img class="icon" src="images/icon-comment.png" />
      <img class="icon" src="images/icon-dm.png" />
    </div>
    <p class="likes">${post.likes} likes</p>
    <div class="postText">
      <p class="username">${post.username}</p>
      <p class="postDescription">${post.comment}</p>
    </div>
  `;

  mainContainer.appendChild(postSection);
});