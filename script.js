window.addEventListener('load', function () {
    const up = document.querySelector('.up');
    const fadeElements = document.querySelectorAll('.fade');

    if (up) {
        up.addEventListener('transistionend', function () {
            fadeElements.forEach(el => el.classList.add('visible'));
        }, { once: true });
    }
});