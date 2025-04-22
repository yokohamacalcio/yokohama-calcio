/**
 * yokohamacalcio - Funzioni essenziali
 * Versione ottimizzata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const iconBars = menuToggle.querySelector('.fa-bars');
  const iconTimes = menuToggle.querySelector('.fa-times');

  menuToggle.addEventListener('click', function() {
    // Toggle menu visibility
    mobileNav.classList.toggle('hidden');
    
    // Toggle icons
    iconBars.classList.toggle('hidden');
    iconTimes.classList.toggle('hidden');
    
    // Toggle body scroll
    document.body.style.overflow = mobileNav.classList.contains('hidden') ? '' : 'hidden';
  });

  // Close menu when clicking on links
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.add('hidden');
      iconBars.classList.remove('hidden');
      iconTimes.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
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
