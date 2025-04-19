/**
 * yokohamacalcio - Funzioni globali
 * Ottimizzato per GitHub Pages (statico)
 */

// ======================
// 1. MENU MOBILE (Responsive)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    // Crea il pulsante menu per mobile
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').prepend(menuToggle);

    // Elementi UI
    const nav = document.querySelector('nav');
    const icon = menuToggle.querySelector('i');

    // Gestione click
    menuToggle.addEventListener('click', function() {
        // Animazione icona
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        
        // Mostra/nascondi menu
        nav.classList.toggle('active');
    });

    // Reset su resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// ======================
// 2. CAROSELLO SPONSOR
// ======================
function initSponsorCarousel() {
    const sponsors = document.querySelectorAll('.sponsor-card');
    if (sponsors.length > 0) {
        let current = 0;
        setInterval(() => {
            sponsors[current].classList.remove('active');
            current = (current + 1) % sponsors.length;
            sponsors[current].classList.add('active');
        }, 3000); // Cambia ogni 3 secondi
    }
}

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
