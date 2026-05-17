// nav.js - Navigation commune à toutes les pages
(function() {
    function init() {
        if (document.querySelector('.nav')) return;
        
        const navHTML = `
        <nav class="nav">
            <div class="nav-logo">MARIELLE <span>BOUSS</span></div>
            <div class="nav-links" id="navLinks">
                <a href="index.html">Accueil</a>
                <a href="index.html#services">Formules</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="apropos.html">À propos</a>
                <a href="index.html#process">Comment ça marche</a>
                <a href="index.html#contact">Contact</a>
            </div>
            <button class="nav-hamburger" id="hamburgerBtn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="index.html#contact" class="nav-cta">Démarrer un projet</a>
        </nav>
        <div class="mobile-menu-overlay" id="mobileMenu">
            <button class="mobile-menu-close" id="closeMenuBtn" aria-label="Fermer">
                <span></span>
                <span></span>
            </button>
            <div class="mobile-menu-links">
                <a href="index.html" class="mobile-link">Accueil</a>
                <a href="index.html#services" class="mobile-link">Formules</a>
                <a href="portfolio.html" class="mobile-link">Portfolio</a>
                <a href="apropos.html" class="mobile-link">À propos</a>
                <a href="index.html#process" class="mobile-link">Comment ça marche</a>
                <a href="index.html#contact" class="mobile-link">Contact</a>
                <a href="index.html#contact" class="mobile-menu-cta">Démarrer un projet</a>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Initialiser le menu mobile
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        if (hamburgerBtn && mobileMenu) {
            hamburgerBtn.addEventListener('click', function() {
                mobileMenu.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
            
            if (closeMenuBtn) {
                closeMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                });
            }
            
            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                });
            });
            
            mobileMenu.addEventListener('click', function(e) {
                if (e.target === mobileMenu) {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // CTA desktop
        const navCta = document.querySelector('.nav-cta');
        if (navCta) {
            navCta.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'index.html#contact';
            });
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
