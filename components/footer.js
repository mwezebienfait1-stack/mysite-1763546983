class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background: #1f2937;
          color: #f9fafb;
          padding: 3rem 0 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: #bfdbfe;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .footer-link {
          margin-bottom: 0.5rem;
        }
        
        .footer-link a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link a:hover {
          color: #bfdbfe;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .social-link {
          color: #d1d5db;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #bfdbfe;
        }
        
        .footer-contact {
          color: #d1d5db;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-section">
              <h3>Cabinet Avocats & Huissiers</h3>
              <p class="footer-contact">
                Avenue de la Justice<br>
                41114 Kinshasa, RDC<br>
                Tél: +243 88888888<br>
                Email: contact@cabinet.cd
              </p>
            </div>
            
            <div class="footer-section">
              <h3>Nos Services</h3>
              <ul class="footer-links">
                <li class="footer-link"><a href="services.html#droit-affaires">Droit des Affaires</a></li>
                <li class="footer-link"><a href="services.html#droit-famille">Droit de la Famille</a></li>
                <li class="footer-link"><a href="services.html#droit-immobilier">Droit Immobilier</a></li>
                <li class="footer-link"><a href="services.html#constats">Constats d'huissier</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Liens Utiles</h3>
              <ul class="footer-links">
                <li class="footer-link"><a href="index.html">Accueil</a></li>
                <li class="footer-link"><a href="equipe.html">Notre Équipe</a></li>
                <li class="footer-link"><a href="contact.html">Contact</a></li>
                <li class="footer-link"><a href="client-space.html">Espace Client</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Horaires</h3>
              <p class="footer-contact">
                Lundi - Vendredi: 9h00 - 18h00<br>
                Samedi: 9h00 - 12h00<br>
                Urgences: 7j/7
              </p>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-social">
              <a href="#" class="social-link">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="twitter"></i>
              </a>
            </div>
            <p>&copy; 2025 Cabinet d'étude maître Ekondji Liloka. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);