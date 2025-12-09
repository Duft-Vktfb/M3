window.addEventListener('load', function() {
    const up = document.querySelector('.up');
    const fadeElements = document.querySelectorAll('.fade');

    up.classList.add('animate');
    up.addEventListener('transitionend', function() {
        fadeElements.forEach(function(el) {
            el.classList.add('animate');
        });
    });

    const allImages = document.querySelectorAll('img');
    let pressTimer;

    allImages.forEach(function(img) {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        img.addEventListener('touchstart', function(e) {
            pressTimer = setTimeout(function() {
                e.preventDefault();
            }, 400);
        }, { passive: false });
        img.addEventListener('touchend', function() {
            clearTimeout(pressTimer);
        });
    });
});