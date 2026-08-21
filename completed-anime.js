document.querySelectorAll('.anime-carousel').forEach((carousel) => {
    const list = carousel.querySelector('.anime-list');
    const prevButton = carousel.querySelector('.scroll-button.prev');
    const nextButton = carousel.querySelector('.scroll-button.next');

    if (list && prevButton && nextButton) {
        const scrollAmount = 280;

        prevButton.addEventListener('click', () => {
            list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});