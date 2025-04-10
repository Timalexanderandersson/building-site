import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Contact Bar */}
      <div className={styles.contactBar}>
        <div className={styles.innerbar}>
          
        <span className={styles.contactInfo}>
        <span><strong>Kontakta oss på:</strong></span>
<a href="tel:+1234567890">+123 456 7890</a> | 
<span><strong>Email:</strong></span>
<a href="mailto:info@example.com">info@example.com</a>

        </span>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>

        </div>
        
        </div>
      </div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}><Link to="/" className={styles.logo}>
  Demo byggfirma
</Link>
</div>

          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/omoss">Om oss</Link></li>
<li><Link to="/tjänster">Våra tjänster</Link></li>
<li><Link to="/kontakt">Kontakt</Link></li>
<li><Link to="/offert">Offert</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
