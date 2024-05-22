let currentSlide = 0;
let slideInterval;

function updateSlidePosition() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.senior-card');
    const slideWidth = slides[0].offsetWidth + 20; // Width of a slide + margin
    sliderTrack.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.senior-card');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    const slides = document.querySelectorAll('.senior-card');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("farewell-video");
    video.play().catch(error => {
        console.error("Video autoplay failed:", error);
    });

    startSlideShow();

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseover', stopSlideShow);
    sliderContainer.addEventListener('mouseout', startSlideShow);
});
