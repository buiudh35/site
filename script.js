// script.js

// Função para rolagem suave ao clicar em links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu de navegação responsivo (para dispositivos móveis)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// Fecha o menu quando um link é clicado
nav.addEventListener('click', () => {
    if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
    }
});