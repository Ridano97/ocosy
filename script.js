// Sélecteurs de base
const menuHamburger   = document.querySelector(".menu-hamburger");
const navLinks        = document.querySelector(".nav-links");
const socialLinks     = document.querySelector(".social-links");

const menuSlideBoisson  = document.getElementById('menu-slide');
const menuSlideChichas  = document.getElementById('menu-slide-chichas');
const menuSlideCarte    = document.getElementById('menu-slide-carte');
const menuSlideGoogle   = document.getElementById('menu-slide-google'); // 👈 Ajout pour Google

const boissonLink    = document.getElementById('boisson-link');
const chichasLink    = document.getElementById('chichas-link');
const carteLink      = document.getElementById('carte-link');

const closeBoisson   = document.getElementById('close-menu-boisson');
const closeChichas   = document.getElementById('close-menu-chichas');
const closeCarte     = document.getElementById('close-menu-carte');
const closeGoogle    = document.getElementById('close-menu-google'); // 👈 Ajout pour Google

// Variable pour suivre l'état du menu hamburger
let isHamburgerOpen = false;

// Ferme tous les menus
function closeAllMenus() {
  document.body.classList.remove("menu-open");
  menuSlideBoisson.classList.remove('show');
  menuSlideChichas.classList.remove('show');
  menuSlideCarte.classList.remove('show');
  menuSlideGoogle.classList.remove('show'); // 👈 Ajout Google
  menuHamburger.classList.remove('hidden-hamburger');

  // Réaffiche socialLinks uniquement si le menu hamburger est fermé
  if (!isHamburgerOpen) {
    socialLinks.classList.remove('hidden');
  }
}

// Hamburger menu — changement instantané de l’icône
menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  isHamburgerOpen = navLinks.classList.contains('mobile-menu');

  // Masquer ou afficher les social links
  socialLinks.classList.toggle('hidden', isHamburgerOpen);

  // Changement direct de l'image
  menuHamburger.src = isHamburgerOpen
    ? "./images/croix.png"
    : "./images/hamburger.png";
});

// Ouverture des sous-menus
boissonLink.addEventListener('click', (e) => {
  e.preventDefault();
  closeAllMenus();
  document.body.classList.add("menu-open");
  menuSlideBoisson.classList.add('show');
  menuHamburger.classList.add('hidden-hamburger');
});

chichasLink.addEventListener('click', (e) => {
  e.preventDefault();
  closeAllMenus();
  document.body.classList.add("menu-open");
  menuSlideChichas.classList.add('show');
  menuHamburger.classList.add('hidden-hamburger');
});

carteLink.addEventListener('click', (e) => {
  e.preventDefault();
  closeAllMenus();
  document.body.classList.add("menu-open");
  menuSlideCarte.classList.add('show');
  menuHamburger.classList.add('hidden-hamburger');
});

document.getElementById("google-slide-link").addEventListener("click", function(e) {
  e.preventDefault();
  closeAllMenus(); // 👈 Ferme les autres au cas où
  document.body.classList.add("menu-open"); // 👈 Ajout pour cohérence
  menuSlideGoogle.classList.add("show");
  menuHamburger.classList.add('hidden-hamburger'); // 👈 Cacher le hamburger
});

document.getElementById("close-menu-google").addEventListener("click", function() {
  menuSlideGoogle.classList.remove("show");
  menuHamburger.classList.remove('hidden-hamburger'); // 👈 Réaffiche le hamburger
});


// Fermeture des menus
closeBoisson.addEventListener('click', closeAllMenus);
closeChichas.addEventListener('click', closeAllMenus);
closeCarte.addEventListener('click', closeAllMenus);
