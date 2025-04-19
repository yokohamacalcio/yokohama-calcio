document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');
  const icon = toggleButton.querySelector('i');

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Cambia icona hamburger <-> chiusura
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});
