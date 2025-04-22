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
// 2. BACK TO TOP BUTTON
// ======================
function setupBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) {
        console.warn('Pulsante "Torna su" non trovato');
        return;
    }

    function handleScroll() {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Inizializza lo stato
    handleScroll();
}

// ======================
// INIZIALIZZAZIONE
// ======================
document.addEventListener('DOMContentLoaded', function() {
    // DEBUG: Verifica caricamento
    console.log('Script inizializzato correttamente');
    
    setupMobileMenu();
    setupBackToTop();
});
