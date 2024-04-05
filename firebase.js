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
  
  function save() {
    var comment = document.getElementById('comment').value;
    var event = document.getElementById('Event').value;
  
    // Check if the comment is empty
    if (comment.trim() === '') {
      alert('Please enter a comment before saving.');
      return; // Exit the function if the comment is empty
    }
  
    // Check if comment exceeds 150 words
    var words = comment.trim().split(/\s+/);
    if (words.length > 150) {
      alert('Maximum word count exceeded (150 words)');
      return;
    }
  
    database.ref('comments').push({
      comment: comment,
      event: event
    }).then(function () {
      alert('Comment saved successfully');
    }).catch(function (error) {
      console.error('Error saving comment:', error);
    });
  }
  
  function countWords() {
    var comment = document.getElementById('comment').value;
    var words = comment.trim().split(/\s+/);
    var wordCount = words.length;
  
    var indicator = document.getElementById('word-count-indicator');
    indicator.textContent = wordCount + '/150';
  
    // Update the color of the word count indicator
    if (wordCount > 150) {
      indicator.style.color = 'red';
    } else {
      indicator.style.color = 'grey';
    }
  }
  
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