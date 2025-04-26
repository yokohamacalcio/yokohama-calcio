/**
 * Yokohama Calcio - Script completo funzionante
 * Menu mobile e back-to-top senza conflitti
 */

document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. HAMBURGER MENU (Funzionante)
  // ======================
  // Menu Mobile Semplice
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-nav');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      // Toggle dello stato del menu
      const isOpening = !mobileMenu.classList.contains('active');
      
      // Gestione icona
      const iconBars = this.querySelector('.fa-bars');
      const iconTimes = this.querySelector('.fa-times');
      
      if (iconBars) iconBars.classList.toggle('hidden', isOpening);
      if (iconTimes) iconTimes.classList.toggle('hidden', !isOpening);
      
      // Gestione menu
      mobileMenu.classList.toggle('active', isOpening);
      document.body.style.overflow = isOpening ? 'hidden' : '';
    });
    
    // Chiudi menu al click sui link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        const iconBars = menuButton.querySelector('.fa-bars');
        const iconTimes = menuButton.querySelector('.fa-times');
        if (iconBars) iconBars.classList.remove('hidden');
        if (iconTimes) iconTimes.classList.add('hidden');
      });
    });
  }

  // ======================
  // 2. BACK TO TOP (Funzionante)
  // ======================
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('visible', window.pageYOffset > 300);
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Inizializza lo stato
    backToTop.classList.toggle('visible', window.pageYOffset > 300);
  }
});
