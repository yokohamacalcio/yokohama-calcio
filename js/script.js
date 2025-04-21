/**
 * yokohamacalcio - Funzioni essenziali
 * Versione ottimizzata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.main-nav');
    
    if (!menuButton || !mobileMenu) {
        console.warn('Elementi del menu mobile non trovati');
        return;
    }

    const iconHamburger = menuButton.querySelector('.fa-bars');
    const iconClose = menuButton.querySelector('.fa-times');

    function toggleMenu() {
        const isActive = mobileMenu.classList.toggle('active');
        
        // Gestione icone
        if (iconHamburger) iconHamburger.classList.toggle('hidden', isActive);
        if (iconClose) iconClose.classList.toggle('hidden', !isActive);
        
        // Blocco scroll
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    menuButton.addEventListener('click', toggleMenu);

    // Chiudi menu al click sui link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            if (iconHamburger) iconHamburger.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
        });
    });
}

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
