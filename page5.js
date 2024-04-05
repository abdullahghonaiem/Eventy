// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUSHMa18joXtHUisJxMjRAC6DAQNEY5Io",
    authDomain: "culturalevent-96bce.firebaseapp.com",
    projectId: "culturalevent-96bce",
    storageBucket: "culturalevent-96bce.appspot.com",
    messagingSenderId: "448048937580",
    appId: "1:448048937580:web:384071435e9695b899f649",
    measurementId: "G-JH4N0SHFS5"
  };
  firebase.initializeApp(firebaseConfig);
  // Set database variable
  var database = firebase.database();
  
  function displayComments(comments) {
    var container = document.querySelector('.commentview');
    container.innerHTML = ''; // Clear existing comments
  
    if (comments) {
      Object.values(comments).forEach(comment => {
        var commentContainer = document.createElement('div'); // Create a new container for each comment
        commentContainer.classList.add('container-comment');
  
        var p = document.createElement('p');
        p.textContent = comment.comment;
  
        commentContainer.appendChild(p);
        container.appendChild(commentContainer); // Append the comment container to the main container
      });
    } else {
      var p = document.createElement('p');
      p.textContent = "No comments yet.";
      container.appendChild(p);
    }
  }
  
  // Function to fetch comments from Firebase
  function getComments() {
    var commentsRef = database.ref('comments');
    commentsRef.once('value', function (snapshot) {
      var comments = snapshot.val();
      displayComments(comments);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const commentTextElement = document.getElementById('commentText');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');

    let currentIndex = 0;
    let comments = [];

    // Function to update comment text with current comment
    function updateCommentText() {
        if (comments.length > 0) {
            commentTextElement.textContent = comments[currentIndex].comment;
        } else {
            commentTextElement.textContent = "No comments yet.";
        }
    }

    // Fetch comments from Firebase and update comments array
    getComments();

    // Left button event listener
    leftButton.addEventListener('click', () => {
        if (comments.length > 0) {
            currentIndex = (currentIndex - 1 + comments.length) % comments.length;
            updateCommentText();
        }
    });

    // Right button event listener
    rightButton.addEventListener('click', () => {
        if (comments.length > 0) {
            currentIndex = (currentIndex + 1) % comments.length;
            updateCommentText();
        }
    });

    // Function to fetch comments from Firebase
    function getComments() {
        var commentsRef = database.ref('comments');
        commentsRef.once('value', function (snapshot) {
            comments = Object.values(snapshot.val() || {}); // Convert comments object to array
            updateCommentText(); // Update comment text after fetching comments
        });
    }
});

  
  // Additional functions for image and video changes
  let currentIndex = 0;
  
  function changeImage() {
    const images = ['gallery/1.webp', 'gallery/2.webp', 'gallery/3.jpg', 'gallery/4.webp']; // Add your image URLs here
    const imageElement = document.getElementById('image');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the beginning if at the end
    imageElement.src = images[currentIndex];
  }
  
  function changeVideo() {
    const videos = ['videos/1.mp4', 'videos/2.mp4', 'videos/3.mp4']; // Add your video URLs here
    const videoElement = document.getElementById('video');
    currentIndex = (currentIndex + 1) % videos.length; // Loop back to the beginning if at the end
    videoElement.src = videos[currentIndex];
  }
  