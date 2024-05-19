// script.js
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close');

    // Open de lightbox wanneer op een projectafbeelding wordt geklikt
    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = item.getAttribute('src');
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.style.display = 'block';
        });
    });

    // Sluit de lightbox wanneer op de sluitknop wordt geklikt
    closeButton.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});
