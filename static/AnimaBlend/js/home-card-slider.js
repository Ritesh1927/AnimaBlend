// Function to initialize slider logic for each individual slider
function initializeSlider(sliderWrapper) {
    const slider = sliderWrapper.querySelector('.home-card-slider');
    const cards = sliderWrapper.querySelectorAll('.home-card');
    const prevButton = sliderWrapper.querySelector('.home-card-prev');
    const nextButton = sliderWrapper.querySelector('.home-card-next');
    const cardWidth = sliderWrapper.querySelector('.home-card').offsetWidth + 40; // Card width plus the gap
    const visibleCards = 4; // Number of visible cards at a time
    let currentScrollPosition = 0;
  
    const totalCards = cards.length;
    const maxScrollPosition = (totalCards - visibleCards) * cardWidth; // Maximum scroll position
  
    // Next Button Event Listener
    nextButton.addEventListener('click', () => {
      if (currentScrollPosition < maxScrollPosition) {
        currentScrollPosition += cardWidth;
        slider.style.transform = `translateX(-${currentScrollPosition}px)`;
      }
    });
  
    // Previous Button Event Listener
    prevButton.addEventListener('click', () => {
      if (currentScrollPosition > 0) {
        currentScrollPosition -= cardWidth;
        slider.style.transform = `translateX(-${currentScrollPosition}px)`;
      }
    });
  }
  
  // Initialize both sliders
  document.querySelectorAll('.home-card-slider-wrapper').forEach(initializeSlider);
  