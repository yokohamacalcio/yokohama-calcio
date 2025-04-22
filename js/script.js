/**
 * yokohamacalcio - Funzioni essenziali
 * Versione ottimizzata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const iconBars = toggleBtn.querySelector('.fa-bars');
  const iconClose = toggleBtn.querySelector('.fa-times');

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    iconBars.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

// ======================
// INIZIALIZZAZIONE
// ======================
document.addEventListener('DOMContentLoaded', function() {
    // DEBUG: Verifica caricamento
    console.log('Script inizializzato correttamente');
    
    setupMobileMenu();
    setupBackToTop();
});
