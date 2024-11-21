// Function to initialize slider logic for each individual slider
function initializeSlider(sliderWrapper) {
  const slider = sliderWrapper.querySelector('.home-card-slider');
  const cards = sliderWrapper.querySelectorAll('.home-card');
  const prevButton = sliderWrapper.querySelector('.home-card-prev');
  const nextButton = sliderWrapper.querySelector('.home-card-next');
  const cardWidth = sliderWrapper.querySelector('.home-card-wrapper').offsetWidth; // Card width plus the gap
  const visibleCards = 4; // Number of visible cards at a time
  let currentScrollPosition = 0;

  const totalCards = cards.length;
  const maxScrollPosition = (totalCards - visibleCards) * cardWidth; // Maximum scroll position

  // Next Button Event Listener
  nextButton.addEventListener('click', slideRight);

  function slideRight() {
    // Add code to move the slider to the right
    if (currentScrollPosition < maxScrollPosition) {
      currentScrollPosition += cardWidth;
      slider.style.transform = `translateX(-${currentScrollPosition}px)`;
    }
  }

  function slideLeft() {
    // Add code to move the slider to the left
    if (currentScrollPosition > 0) {
      currentScrollPosition -= cardWidth;
      slider.style.transform = `translateX(-${currentScrollPosition}px)`;
    }
  }

  // Previous Button Event Listener
  prevButton.addEventListener('click', slideLeft);


  // js for swipe behaviour in touch screens

  // let startX, currentX, diffX;

  // // Handle the start of a swipe
  // slider.addEventListener("touchstart", (e) => {
  //   startX = e.touches[0].clientX; // Get the initial touch position
  // });

  // // Handle movement of the swipe
  // slider.addEventListener("touchmove", (e) => {
  //   currentX = e.touches[0].clientX; 
  //   diffX = startX - currentX;       
  // });

  // // Handle the end of a swipe
  // slider.addEventListener("touchend", () => {
  //   if (diffX > 50) {
  //     // Swipe left action
  //     slideRight(); 
  //   } else if (diffX < -50) {
  //     // Swipe right action
  //     slideLeft(); 
  //   }
  //   // Reset values
  //   startX = 0;
  //   currentX = 0;
  //   diffX = 0;
  // });
}

// Initialize both sliders
document.querySelectorAll('.home-card-slider-wrapper').forEach(initializeSlider);
