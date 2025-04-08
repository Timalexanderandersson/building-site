import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <div className={styles.newdiv}>

          <div className={styles.phone}>
            <h3>Kontakta oss</h3>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i> +123 456 7890
            </a>
            <a href="mailto:email@hotmail.com">
              <i className="fas fa-envelope"></i> email@hotmail.com
            </a>
          </div>

          <div className={styles.socialIcons}>
            <h3>Följ oss</h3>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className={styles.address}>
            <h3>Ni hittar oss</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Exempelgatan 123, Stockholm
            </p>
         
          </div>

        </div>
      </div>

      <hr />
      <div className={styles.copyright}>
        <p>&copy; 2025 Företagsnamn. Alla rättigheter reserverade.</p>
      </div>
    </footer>
  );
};

export default Footer;
