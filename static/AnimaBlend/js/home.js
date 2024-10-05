let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let autoSlideInterval;

// Function to show the slide based on index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'flex' : 'none';
  });
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Event listeners for manual control
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide(); // Reset auto-slide timer on manual action
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide(); // Reset auto-slide timer on manual action
});

// Function to start auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

// Function to reset auto-slide after a manual action
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide(); // Restart auto-slide after manual interaction
}

// Initialize with the first slide
showSlide(currentIndex);

// Start auto-slide when the page loads
startAutoSlide();
