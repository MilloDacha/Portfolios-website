$(document).ready(function() {
    function initializeSlider(sliderId) {
      const slider = $('#' + sliderId + ' .slider');
      let slideIndex = 0;
  
      function showSlides() {
        slideIndex++;
        if (slideIndex >= slider.children().length) {
          slideIndex = 0;
        }
  
        const translateValue = -slideIndex * 100 + '%';
        slider.css('transform', 'translateX(' + translateValue + ')');
      }
  
      // Change slide every 3 seconds (adjust as needed)
      setInterval(showSlides, 2500);
    }
  
    // Initialize sliders for all 12 containers
    for (let i = 1; i <= 12; i++) {
      initializeSlider('slider' + i);
    }
  });