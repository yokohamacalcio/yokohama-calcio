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
