// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
//     // This code will execute after the DOM has been fully loaded
//     var modal = document.getElementById('myModal');
//     var modalImg = document.getElementById("modal-image");
//     var modalButtons = document.querySelectorAll('.photo-button'); // Select all buttons in the modal
//     var currentImageIndex = 0; // Track the index of the currently displayed image

//     // Store all small photos
//     var smallPhotos = document.querySelectorAll('.small-photo img');
    
//     // Function to show the modal with the specified image
//     function showModal(imageSrc) {
//         modal.style.display = "block";
//         modalImg.src = imageSrc;
//     }

//     // Event listener for the click on the big photo
//     var bigPhoto = document.querySelector('.big-photo');
//     bigPhoto.addEventListener('click', function() {
//         showModal(this.querySelector('img').src);
//         currentImageIndex = 0; // Reset the image index
//         updateButtonVisibility(); // Update button visibility based on current image index
//     });

//   // Event listeners for the small photos
// smallPhotos.forEach(function(photo, index) {
//     photo.addEventListener('click', function() {
//         showModal(this.src);
//         currentImageIndex = Array.from(smallPhotos).indexOf(this); // Set the current image index
//         updateButtonVisibility(); // Update button visibility based on current image index
//     });
// });


//     // Event listener for the left button
//     document.querySelector('.left-button').addEventListener('click', function() {
//         currentImageIndex = (currentImageIndex - 1 + smallPhotos.length) % smallPhotos.length; // Decrement index
//         modalImg.src = smallPhotos[currentImageIndex].src; // Update modal image
//         updateButtonVisibility(); // Update button visibility based on current image index
//     });

//     // Event listener for the right button
//     document.querySelector('.right-button').addEventListener('click', function() {
//         currentImageIndex = (currentImageIndex + 1) % smallPhotos.length; // Increment index
//         modalImg.src = smallPhotos[currentImageIndex].src; // Update modal image
//         updateButtonVisibility(); // Update button visibility based on current image index
//     });

//     // Function to update button visibility based on the current image index
//     function updateButtonVisibility() {
//         // Show/hide left button based on current image index
//         document.querySelector('.left-button').style.display = (currentImageIndex === 0) ? "none" : "block";
//         // Show/hide right button based on current image index
//         document.querySelector('.right-button').style.display = (currentImageIndex === smallPhotos.length - 1) ? "none" : "block";
//     }

//     // Close the modal when the close button is clicked
//     var span = document.getElementsByClassName("close")[0];
//     span.onclick = function() { 
//         modal.style.display = "none";
//     };
// });


document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // This code will execute after the DOM has been fully loaded
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modal-image");
    var modalButtons = document.querySelectorAll('.photo-button'); // Select all buttons in the modal
    var currentImageIndex = 0; // Track the index of the currently displayed image

    // Store all small photos
    var smallPhotos = document.querySelectorAll('.small-photo img');
    
    // Function to show the modal with the specified image
    function showModal(imageSrc) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }

    // Event listener for the click on the big photo
    var bigPhoto = document.querySelector('.big-photo');
    bigPhoto.addEventListener('click', function() {
        showModal(this.querySelector('img').src);
        currentImageIndex = 0; // Reset the image index
    });

  // Event listeners for the small photos
smallPhotos.forEach(function(photo, index) {
    photo.addEventListener('click', function() {
        showModal(this.src);
        currentImageIndex = Array.from(smallPhotos).indexOf(this); // Set the current image index
    });
});


    // Event listener for the left button
    document.querySelector('.left-button').addEventListener('click', function() {
        changeImage();

    });

    // Event listener for the right button

    document.querySelector('.right-button').addEventListener('click', function() {
        changeImage();
    });

    let currentIndex=0;
    function changeImage(){
        const images=['horseriding/horse.jpg','horseriding/horse2.jpg','horseriding/horse3.jpg','horseriding/horse4.jpg','horseriding/horse5.jpg'];
        const imageElement=document.getElementById('modal-image');
        currentIndex=(currentIndex+1)% images.length;
        imageElement.src=images[currentIndex];
    
    }


    // Close the modal when the close button is clicked
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    };

    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

});