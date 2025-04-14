// Sélecteurs de base
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

// Menus slide
const menuSlideBoisson = document.getElementById('menu-slide');
const menuSlideChichas = document.getElementById('menu-slide-chichas');
const menuSlideCarte = document.getElementById('menu-slide-carte');

// Liens de navigation
const boissonLink = document.getElementById('boisson-link');
const chichasLink = document.getElementById('chichas-link');
const carteLink = document.getElementById('carte-link');

// Fonction pour fermer tous les menus
function closeAllMenus() {
    menuSlideBoisson.classList.remove('show');
    menuSlideChichas.classList.remove('show');
    menuSlideCarte.classList.remove('show');
}

// Gère le bouton hamburger
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    menuHamburger.classList.add('fade-out');

    setTimeout(() => {
        if (menuHamburger.src.includes("hamburger.png")) {
            menuHamburger.src = "./images/croix.png";
        } else {
            menuHamburger.src = "./images/hamburger.png";
        }
        menuHamburger.classList.remove('fade-out');
    }, 150);
});

// Gestion des clics sur les liens
boissonLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeAllMenus();
    menuSlideBoisson.classList.add('show');
});

chichasLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeAllMenus();
    menuSlideChichas.classList.add('show');
});

carteLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeAllMenus();
    menuSlideCarte.classList.add('show');
});

// Fermeture des menus
document.getElementById('close-menu-boisson').addEventListener('click', closeAllMenus);
document.getElementById('close-menu-chichas').addEventListener('click', closeAllMenus);
document.getElementById('close-menu-carte').addEventListener('click', closeAllMenus);
