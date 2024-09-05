// Seleciona o ícone de hambúrguer e o menu de navegação
const menuHamburger = document.querySelector('.menu-hamburger');
const navMenu = document.querySelector('.nav-menu');

// Adiciona evento de clique no ícone de hambúrguer
menuHamburger.addEventListener('click', () => {
    // Adiciona ou remove a classe 'nav-open' para abrir/fechar o menu
    navMenu.classList.toggle('nav-open');
});

// Adicional: Fecha o menu ao clicar em qualquer link (opcional)
const navLinks = document.querySelectorAll('.nav-menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
    });
});