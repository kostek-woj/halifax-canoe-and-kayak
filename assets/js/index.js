window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
});