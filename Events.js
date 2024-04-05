let currentIndex = 0;

function changeImage() {
    const images = ['home_screens_event/Albalad.jpg',
    'home_screens_event/Desert_Iftar.jpg',
    'horseriding/horse.jpg',
    'Diving/Diving.jpg']; // Add your image URLs here
    const imageElement = document.getElementById('image');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the beginning if at the end
    imageElement.src = images[currentIndex];
  }