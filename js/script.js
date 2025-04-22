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
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    function handleScroll() {
      backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }

    function scrollToTop(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event listeners con namespace univoco
    window.addEventListener('scroll.backToTop', handleScroll);
    backToTopBtn.addEventListener('click.backToTop', scrollToTop);
    
    // Inizializzazione
    handleScroll();
  })();
});
