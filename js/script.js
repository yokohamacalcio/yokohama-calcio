/**
 * yokohamacalcio - Funzioni globali
 * Ottimizzato per GitHub Pages (statico)
 */

// ======================
// 1. MENU MOBILE (Responsive)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    // Debug iniziale
    console.log('Script loaded - Menu elements:', {menuToggle, nav});
    
    if(menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hamburger clicked - current state:', nav.classList.contains('active'));
            
            // Cambia solo l'icona senza mostrare il menu
            const icon = this.querySelector('i');
            if(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            // DEBUG: Forza la chiusura se per qualche motivo fosse aperto
            nav.classList.remove('active');
        });
        
        // DEBUG: Controlla se altri script stanno interferendo
        console.log('Event listeners on menuToggle:', 
            getEventListeners(menuToggle));
    } else {
        console.error('Elementi menu non trovati!');
    }
});

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Torna su');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setupBackToTop();
});

// ======================
// 3. HELPER CALENDARIO
// ======================
function setupCalendarFilters() {
    const filters = document.querySelectorAll('.match-filters button');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.match-card').forEach(match => {
                match.style.display = filter === 'all' || match.dataset.status === filter ? 'flex' : 'none';
            });
        });
    });
}

// ======================
// 4. FORM CONTATTI
// ======================
function handleContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            
            try {
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    alert('メッセージを送信しました！');
                    form.reset();
                }
            } catch (error) {
                alert('エラーが発生しました。後でもう一度試してください。');
            }
        });
    }
}

// ======================
// INIZIALIZZAZIONE
// ======================
document.addEventListener('DOMContentLoaded', function() {
    initSponsorCarousel();
    setupCalendarFilters();
    handleContactForm();
    
    // Highlight menu corrente
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current-page');
        }
    });
});
