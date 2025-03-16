const carouselContainer = document.querySelector('.carousel');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;
carouselContainer.style.width = size + 'px';

function nextSlide() {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

window.addEventListener('resize', () => { 
    const newSize = images[0].clientWidth;
    carouselContainer.style.width = newSize + 'px';
});

setInterval(nextSlide, 5000);
