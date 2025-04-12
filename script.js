const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const boissonLink = document.getElementById('boisson-link');
const menuSlide = document.getElementById('menu-slide');


menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');

    // Animation de fondu avant de changer l’image
    menuHamburger.classList.add('fade-out');

    setTimeout(() => {
        if (menuHamburger.src.includes("hamburger.png")) {
            menuHamburger.src = "./images/croix.png";
        } else {
            menuHamburger.src = "./images/hamburger.png";
        }
        menuHamburger.classList.remove('fade-out');
    }, 150); // attendre un peu avant de changer l’image
});

boissonLink.addEventListener('click', (e) => {
    e.preventDefault(); // Évite le scroll vers le haut
    menuSlide.classList.toggle('show');
});

const closeBtn = document.getElementById('close-menu');
closeBtn.addEventListener('click', () => {
    menuSlide.classList.remove('show');
});

