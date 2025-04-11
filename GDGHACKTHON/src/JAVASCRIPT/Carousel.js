export function setupScrolBar() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel_slide img");
  const totalSlides = slides.length;

  function showSlide(index) {
    // Use modulo operator to cycle through slides
    try {
      document.querySelector(".carousel_slide").style.transform = `translateX(${-index * (100 / totalSlides)
        }%)`;
    }
    catch (Exception) {

    }

  }

  // Function to go to the next slide

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Wrap around to the first slide
    showSlide(currentSlide);
  }
  setInterval(nextSlide, 3000);
}



