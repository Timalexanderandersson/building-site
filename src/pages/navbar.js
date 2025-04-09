import React, { useState } from 'react';
import styles from '../styles/navbar.module.css'; 

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
          <div className={styles.logo}>Demo byggfirma</div>

          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <li><a href="#omoss">Om oss </a></li>
            <li><a href="#tjanster">Våra tjänster</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="#offert">Offert</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
