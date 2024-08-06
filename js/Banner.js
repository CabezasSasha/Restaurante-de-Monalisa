document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.contededorDeImg');
    const images = document.querySelectorAll('.cadaImg');
    const indicators = document.querySelectorAll('.carousel-indicators .boton');
    let currentIndex = 0;
    const intervalTime = 5000;
    let interval;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function goToPrevious() {
        currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function startCarousel() {
        interval = setInterval(goToNext, intervalTime);
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    document.querySelector('.prev').addEventListener('click', goToPrevious);
    document.querySelector('.next').addEventListener('click', goToNext);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);

    updateCarousel();
    startCarousel();
});
