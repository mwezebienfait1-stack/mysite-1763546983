class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .navbar-logo {
          height: 40px;
          width: auto;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .navbar-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .navbar-link:hover {
          color: #bfdbfe;
        }

        .navbar-link.active {
          background: rgba(255,255,255,0.3);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          color: #fbbf24;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          background: white;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.active {
          display: block;
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-menu-link {
          display: block;
          padding: 0.75rem 0;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-menu-link:hover {
          color: #1e3a8a;
        }

        .mobile-menu-link.active {
          background: #fef3c7;
          color: #f59e0b;
          padding: 0.75rem;
          border-radius: 0.375rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      </style>

      <nav class="navbar">
        <div class="navbar-container">
          <a href="index.html" class="navbar-brand">
            <img src="https://via.placeholder.com/150x50?text=LOGO" alt="Logo Cabinet" class="navbar-logo">
          </a>

          <ul class="navbar-menu" id="navbar-menu">
            <li><a href="index.html" class="navbar-link" data-page="index.html">Accueil</a></li>
            <li><a href="services.html" class="navbar-link" data-page="services.html">Services</a></li>
            <li><a href="equipe.html" class="navbar-link" data-page="equipe.html">Notre Équipe</a></li>
            <li><a href="bibliotheque.html" class="navbar-link" data-page="bibliotheque.html">Bibliothèque</a></li>
            <li><a href="blog.html" class="navbar-link" data-page="blog.html">Actualités</a></li>
            <li><a href="contact.html" class="navbar-link" data-page="contact.html">Contact</a></li>
            <li><a href="client-space.html" class="navbar-link" data-page="client-space.html" style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 0.375rem;">
              <i data-feather="user" style="display: inline; vertical-align: middle; margin-right: 0.25rem;"></i>
              Espace Client
            </a></li>
          </ul>

          <button class="mobile-menu-button" onclick="this.getRootNode().host.toggleMobileMenu()">
            <i data-feather="menu"></i>
          </button>
        </div>

        <div class="mobile-menu hidden" id="mobile-menu">
          <ul class="mobile-menu-list" id="mobile-menu-list">
            <li><a href="index.html" class="mobile-menu-link" data-page="index.html">Accueil</a></li>
            <li><a href="services.html" class="mobile-menu-link" data-page="services.html">Services</a></li>
            <li><a href="equipe.html" class="mobile-menu-link" data-page="equipe.html">Notre Équipe</a></li>
            <li><a href="bibliotheque.html" class="mobile-menu-link" data-page="bibliotheque.html">Bibliothèque</a></li>
            <li><a href="blog.html" class="mobile-menu-link" data-page="blog.html">Actualités</a></li>
            <li><a href="contact.html" class="mobile-menu-link" data-page="contact.html">Contact</a></li>
            <li><a href="client-space.html" class="mobile-menu-link" data-page="client-space.html" style="background: #1e3a8a; color: white; padding: 0.75rem; border-radius: 0.375rem; margin-top: 0.5rem;">
              <i data-feather="user" style="display: inline; vertical-align: middle; margin-right: 0.5rem;"></i>
              Espace Client
            </a></li>
          </ul>
        </div>
      </nav>
    `;

    // Add space for fixed navbar
    document.body.style.paddingTop = '80px';

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = this.shadowRoot.querySelectorAll('.navbar-link[data-page]');
    const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-menu-link[data-page]');

    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
      }
    });
  }
  
  toggleMobileMenu() {
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);