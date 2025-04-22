/**
 * Yokohama Calcio - Script completo funzionante
 * Menu mobile e back-to-top senza conflitti
 */

document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. HAMBURGER MENU (Funzionante)
  // ======================
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-nav');
  
  if (menuButton && mobileMenu) {
    const iconBars = menuButton.querySelector('.fa-bars');
    const iconClose = menuButton.querySelector('.fa-times');

    function toggleMenu() {
      const isOpen = !mobileMenu.classList.contains('active');
      mobileMenu.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      
      if (iconBars) iconBars.classList.toggle('hidden', isOpen);
      if (iconClose) iconClose.classList.toggle('hidden', !isOpen);
    }

    menuButton.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', function() {
        toggleMenu();
      });
    });
  }

  // ======================
  // 2. BACK TO TOP (Funzionante)
  // ======================
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('visible', window.pageYOffset > 300);
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Inizializza lo stato
    backToTop.classList.toggle('visible', window.pageYOffset > 300);
  }
});
