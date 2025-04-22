/**
 * Yokohama Calcio - Tutte le funzionalità
 * Script unificato senza conflitti
 */

document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. HAMBURGER MENU (Isolato in una IIFE)
  // ======================
  (function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-nav');
    
    if (!menuButton || !mobileMenu) return;

    const iconBars = menuButton.querySelector('.fa-bars');
    const iconClose = menuButton.querySelector('.fa-times');

    function toggleMenu() {
      const isOpen = mobileMenu.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      
      // Gestione icone
      if (iconBars) iconBars.classList.toggle('hidden', isOpen);
      if (iconClose) iconClose.classList.toggle('hidden', !isOpen);
    }

    // Event listeners con namespace univoco
    menuButton.addEventListener('click.mobileMenu', toggleMenu);
    
    // Chiudi menu al click sui link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click.mobileMenu', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        if (iconBars) iconBars.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  })();

  // ======================
  // 2. BACK TO TOP (Isolato in una IIFE)
  // ======================
  (function setupBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) return;

    // Mostra/nascondi al scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    // Click per tornare su
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Inizializza lo stato
    backToTop.classList.toggle('visible', window.pageYOffset > 300);
  })();
}); // <-- Questa era la parentesi mancante
