window.addEventListener('load', function() {
    const up = document.querySelector('.up');
    const fadeElements = document.querySelectorAll('.fade');
    
    document.body.classList.add("disable-interactions");
    
    if (up) {
        up.classList.add('animate');
        up.addEventListener('transitionend', function() {
            
            let remaining = fadeElements.length;
            
            fadeElements.forEach(function(el) {
                el.addEventListener('animationend', function() {
                    remaining--; 
                    if (remaining === 0) {
                        document.body.classList.remove("disable-interactions");
                    }
                });
            });
            
            fadeElements.forEach(function(el) {
                el.classList.add('animate');
            });
        });
    }

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

function adjustScale() {
    const content = document.getElementById('scalable-content');
    const hr = document.getElementById('line');
    const alphabet = document.getElementById('alphabet');

    if (!content || !hr || !alphabet) return;

    if (window.innerWidth > window.innerHeight) {
        content.style.transform = '';
        content.style.width = '';
        return;
    }

    content.style.transform = 'scale(1)';
    content.style.width = '100%';

    void content.offsetWidth;

    const targetWidth = hr.getBoundingClientRect().width;

    content.style.width = 'max-content';

    void content.offsetWidth;

    const alphaWidth = alphabet.getBoundingClientRect().width;

    if (alphaWidth > 0) {
        const scale = targetWidth / alphaWidth;
        content.style.transform = `scale(${scale})`;
    }
}

document.fonts.ready.then(() => {
    adjustScale();
});

window.addEventListener('resize', () => {
    requestAnimationFrame(adjustScale);
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    menu.addEventListener("click", () => {
        menu.classList.toggle("open");
        sideMenu.classList.toggle("open");
    });
});