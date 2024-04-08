document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modal-image");
    var modalButtons = document.querySelectorAll('.photo-button');
    var currentImageIndex = 0; 


    var smallPhotos = document.querySelectorAll('.small-photo img');

    function showModal(imageSrc) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }


    var bigPhoto = document.querySelector('.big-photo');
    bigPhoto.addEventListener('click', function() {
        showModal(this.querySelector('img').src);
        currentImageIndex = 0;
    });


smallPhotos.forEach(function(photo, index) {
    photo.addEventListener('click', function() {
        showModal(this.src);
        currentImageIndex = Array.from(smallPhotos).indexOf(this); 
    });
});



    document.querySelector('.left-button').addEventListener('click', function() {
        changeImage();

    });



    document.querySelector('.right-button').addEventListener('click', function() {
        changeImage();
    });

    let currentIndex=0;
    function changeImage(){
        const images=['Stargazing/Stargazing.jpg','Stargazing/Stargazing2.png','Stargazing/Stargazing3.jpg','Stargazing/Stargazing4.jpg','Stargazing/Stargazing5.jpg'];
        const imageElement=document.getElementById('modal-image');
        currentIndex=(currentIndex+1)% images.length;
        imageElement.src=images[currentIndex];
    
    }


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