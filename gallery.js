// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDoeMIIjexhefgn-1fc-byEdwl9GufZPIw",
    authDomain: "eventy-53625.firebaseapp.com",
    projectId: "eventy-53625",
    storageBucket: "eventy-53625.appspot.com",
    messagingSenderId: "371659741850",
    appId: "1:371659741850:web:3e545238058543f5cd1d23",
    measurementId: "G-FN8MSHZGZH"
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


document.addEventListener('DOMContentLoaded', function() {
    // Function to open modal and play video
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        var video = modal.querySelector('video');
        modal.style.display = 'block';
        video.play();
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    }

    // Function to close modal and pause video
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        var video = modal.querySelector('video');
        modal.style.display = 'none';
        video.pause();
    }

    // Get all the overlay elements
    var overlays = document.querySelectorAll('.overlay');

    // Loop through each overlay and attach click event
    overlays.forEach(function(overlay) {
        overlay.addEventListener('click', function() {
            var modalId = this.parentNode.querySelector('.modal').id;
            openModal(modalId);
        });
    });

    // Get all the close buttons
    var closeButtons = document.querySelectorAll('.close');

    // Loop through each close button and attach click event
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modalId = this.parentNode.parentNode.id;
            closeModal(modalId);
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            var modalId = event.target.id;
            closeModal(modalId);
        }
    };

    // When the video ends, close the modal
    document.querySelectorAll('video').forEach(function(video) {
        video.addEventListener('ended', function() {
            var modalId = this.parentNode.parentNode.id;
            closeModal(modalId);
        });
    });

    // Listen for fullscreen change event
    document.addEventListener('fullscreenchange', function(event) {
        if (!document.fullscreenElement) {
            // Exit full-screen mode, close modal
            var modalId = document.querySelector('.modal').id;
            closeModal(modalId);
        }
    });

    document.addEventListener('mozfullscreenchange', function(event) {
        if (!document.mozFullScreenElement) {
            // Exit full-screen mode, close modal
            var modalId = document.querySelector('.modal').id;
            closeModal(modalId);
        }
    });

    document.addEventListener('webkitfullscreenchange', function(event) {
        if (!document.webkitFullscreenElement) {
            // Exit full-screen mode, close modal
            var modalId = document.querySelector('.modal').id;
            closeModal(modalId);
        }
    });

    document.addEventListener('msfullscreenchange', function(event) {
        if (!document.msFullscreenElement) {
            // Exit full-screen mode, close modal
            var modalId = document.querySelector('.modal').id;
            closeModal(modalId);
        }
    });
});
