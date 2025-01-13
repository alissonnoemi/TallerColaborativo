const menuButton = document.getElementById('botonm');
const dropdownMenu = document.getElementById('menub');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-gray-800', index === currentIndex);
    });
} prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? indicators.length - 1 : currentIndex - 1;
    updateCarousel();
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === indicators.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}); indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
}); updateCarousel();
