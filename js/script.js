/**
 * yokohamacalcio - Funzioni essenziali
 * Versione semplificata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if(menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cambia icona hamburger/X
            const icon = this.querySelector('i');
            if(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            // Mostra/nascondi menu con animazione
            nav.classList.toggle('active');
            
            // Blocca scroll quando menu è aperto
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Chiudi menu al click sui link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ======================
// 2. BACK TO TOP BUTTON
// ======================
function setupBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Torna su');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ======================
// INIZIALIZZAZIONE
// ======================
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setupBackToTop();
    
    // DEBUG: Verifica caricamento
    console.log('Script inizializzato correttamente');
});
