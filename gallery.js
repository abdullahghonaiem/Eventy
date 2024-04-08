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
  var database = firebase.database();
  
  function displayComments(comments) {
    var container = document.querySelector('.commentview');
    container.innerHTML = ''; 
  
    if (comments) {
      Object.values(comments).forEach(comment => {
        var commentContainer = document.createElement('div'); 
        commentContainer.classList.add('container-comment');
  
        var p = document.createElement('p');
        p.textContent = comment.comment;
  
        commentContainer.appendChild(p);
        container.appendChild(commentContainer);
      });
    } else {
      var p = document.createElement('p');
      p.textContent = "No comments yet.";
      container.appendChild(p);
    }
  }
  

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


    function updateCommentText() {
        if (comments.length > 0) {
            commentTextElement.textContent = comments[currentIndex].comment;
        } else {
            commentTextElement.textContent = "No comments yet.";
        }
    }


    getComments();

     leftButton.addEventListener('click', () => {
        if (comments.length > 0) {
            currentIndex = (currentIndex - 1 + comments.length) % comments.length;
            updateCommentText();
        }
    });


    rightButton.addEventListener('click', () => {
        if (comments.length > 0) {
            currentIndex = (currentIndex + 1) % comments.length;
            updateCommentText();
        }
    });

   
    function getComments() {
        var commentsRef = database.ref('comments');
        commentsRef.once('value', function (snapshot) {
            comments = Object.values(snapshot.val() || {}); 
            updateCommentText(); 
        });
    }
});



var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");


var overlay1 = document.getElementById("overlay1");
var overlay2 = document.getElementById("overlay2");
var overlay3 = document.getElementById("overlay3");
var overlay4 = document.getElementById("overlay4");


var span1 = document.querySelector("#myModal1 .close");
var span2 = document.querySelector("#myModal2 .close");
var span3 = document.querySelector("#myModal3 .close");
var span4 = document.querySelector("#myModal4 .close");


overlay1.onclick = function() {
  modal1.style.display = "block";
}
overlay2.onclick = function() {
  modal2.style.display = "block";
}
overlay3.onclick = function() {
  modal3.style.display = "block";
}
overlay4.onclick = function() {
  modal4.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

span1.onclick = function() {
    modal1.style.display = "none";
    pauseVideo('video1'); 
  }
  span2.onclick = function() {
    modal2.style.display = "none";
    pauseVideo('video2');
  }
  span3.onclick = function() {
    modal3.style.display = "none";
    pauseVideo('video3'); 
  }
  span4.onclick = function() {
    modal4.style.display = "none";
    pauseVideo('video4'); 
  }
  

  function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
  }