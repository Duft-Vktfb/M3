window.addEventListener('load', function() {
    const up = document.querySelector('.up');
    const fadeElements = document.querySelectorAll('.fade');
    up.classList.add('animate');
    up.addEventListener('transitionend', function() {
        fadeElements.forEach(function(el) {
        el.classList.add('animate');
        });
    });
});