document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');

        // Cambia icona hamburger ↔ X
        const icon = toggleButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});
