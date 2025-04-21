/**
 * yokohamacalcio - Funzioni essenziali
 * Versione semplificata per GitHub Pages
 */

// ======================
// 1. MENU MOBILE (Hamburger)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if(menuToggle && nav) {
        // Toggle del menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
        
        // Chiusura al click sui link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Chiusura al resize (se supera la breakpoint mobile)
        window.addEventListener('resize', function() {
            if(window.innerWidth > 768 && nav.classList.contains('active')) {
                closeMenu();
            }
        });
    }
    
    function toggleMenu() {
        // Icona
        const icons = menuToggle.querySelectorAll('i');
        icons.forEach(icon => icon.classList.toggle('hidden'));
        
        // Menu
        nav.classList.toggle('active');
        
        // Scroll
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }
    
    function closeMenu() {
        const icons = menuToggle.querySelectorAll('i');
        icons[0].classList.remove('hidden'); // Icona hamburger
        icons[1].classList.add('hidden');    // Icona X
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

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
