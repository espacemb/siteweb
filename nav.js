// nav.js - Navigation commune à toutes les pages
(function() {
    // Chemin de base pour les liens (si toutes les pages sont au même niveau)
    const basePath = '';
    
    const navHTML = `
    <nav class="nav">
        <div class="nav-logo">MARIELLE <span>BOUSS</span></div>
        <div class="nav-links" id="navLinks">
            <a href="${basePath}index.html">Accueil</a>
            <a href="${basePath}index.html#services">Formules</a>
            <a href="${basePath}portfolio.html">Portfolio</a>
            <a href="${basePath}apropos.html">À propos</a>
            <a href="${basePath}index.html#process">Comment ça marche</a>
            <a href="${basePath}index.html#contact">Contact</a>
        </div>
        <button class="nav-hamburger" id="hamburgerBtn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a href="${basePath}index.html#contact" class="nav-cta">Démarrer un projet</a>
    </nav>
    <div class="mobile-menu-overlay" id="mobileMenu">
        <button class="mobile-menu-close" id="closeMenuBtn" aria-label="Fermer">
            <span></span>
            <span></span>
        </button>
        <div class="mobile-menu-links">
            <a href="${basePath}index.html" class="mobile-link">Accueil</a>
            <a href="${basePath}index.html#services" class="mobile-link">Formules</a>
            <a href="${basePath}portfolio.html" class="mobile-link">Portfolio</a>
            <a href="${basePath}apropos.html" class="mobile-link">À propos</a>
            <a href="${basePath}index.html#process" class="mobile-link">Comment ça marche</a>
            <a href="${basePath}index.html#contact" class="mobile-link">Contact</a>
            <a href="${basePath}index.html#contact" class="mobile-menu-cta">Démarrer un projet</a>
        </div>
    </div>
    `;

    // Insérer la navigation juste après l'ouverture du body
    function initNavigation() {
        // Vérifier si la nav existe déjà
        if (document.querySelector('.nav')) return;
        
        // Insérer le HTML
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Initialiser les événements
        initMobileMenu();
        initNavEvents();
    }

    function initMobileMenu() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (!hamburgerBtn || !mobileMenu) return;

        function openMobileMenu() {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }

        hamburgerBtn.addEventListener('click', openMobileMenu);
        if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                closeMobileMenu();
            });
        });

        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) closeMobileMenu();
        });
    }

    function initNavEvents() {
        const navCta = document.querySelector('.nav-cta');
        if (navCta) {
            navCta.addEventListener('click', (e) => {
                e.preventDefault();
                const href = navCta.getAttribute('href');
                window.location.href = href;
            });
        }
    }

    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
