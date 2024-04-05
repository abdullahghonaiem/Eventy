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
