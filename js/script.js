/**
 * yokohamacalcio - Funzioni globali
 * Ottimizzato per GitHub Pages (statico)
 */

// ======================
// 1. MENU MOBILE (Responsive)
// ======================
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('active');
    this.innerHTML = this.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Chiude il menu mobile al clic su un link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').innerHTML = '<i class="fas fa-bars"></i>';
    });
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
