document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav__links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});