const menuHamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.nav-menu');

menuHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
});