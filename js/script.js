const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .nav');
const header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    header.classList.toggle('active', window.scrollY > 0);
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', () => {
            localStorage.setItem('scrollPosition', window.scrollY);
        });
    }

    const scrollY = localStorage.getItem('scrollPosition');
    if (scrollY !== null) {
        window.scrollTo(0, scrollY);
        localStorage.removeItem('scrollPosition');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.image-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (carousel && prevBtn && nextBtn) {

        const boxWidth = document.querySelector('.image-box').offsetWidth + 20;


        prevBtn.addEventListener('click', () => {

            carousel.scrollBy({
                left: -boxWidth,
                behavior: 'smooth'
            });
        });


        nextBtn.addEventListener('click', () => {

            carousel.scrollBy({
                left: boxWidth,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const moreHistoryText = document.getElementById("moreHistoryText");
    const historyToggleText = document.getElementById("historyToggleText");

    if (historyToggleText && moreHistoryText) {
        historyToggleText.addEventListener('click', () => {
            if (moreHistoryText.style.display === "none") {
                moreHistoryText.style.display = "inline";
                historyToggleText.innerHTML = "Ver menos...";
            } else {
                moreHistoryText.style.display = "none";
                historyToggleText.innerHTML = "Ver más...";
            }
        });
    }
});