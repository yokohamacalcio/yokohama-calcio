/**
 * yokohamacalcio - Funzioni essenziali
 * Versione semplificata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.main-nav');
    
    if (!menuButton || !mobileMenu) return;

    // Icone (verifica che esistano nel tuo HTML)
    const iconHamburger = menuButton.querySelector('.fa-bars');
    const iconClose = menuButton.querySelector('.fa-times');

    menuButton.addEventListener('click', function() {
        // Toggle del menu
        mobileMenu.classList.toggle('active');
        
        // Toggle icone (se presenti)
        if (iconHamburger && iconClose) {
            iconHamburger.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        }
        
        // Blocco scroll
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        
        // Debug (puoi rimuoverlo dopo)
        console.log('Menu stato:', mobileMenu.classList.contains('active') ? 'APERTO' : 'CHIUSO');
    });

    // Chiudi menu al click sui link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            if (iconHamburger && iconClose) {
                iconHamburger.classList.remove('hidden');
                iconClose.classList.add('hidden');
            }
        });
    });
});

// ======================
// 2. BACK TO TOP BUTTON
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) return;

    // Mostra/nascondi al scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Click handler
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ======================
// INIZIALIZZAZIONE
// ======================
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setupBackToTop();
    
    // DEBUG: Verifica caricamento
    console.log('Script inizializzato correttamente');
});
