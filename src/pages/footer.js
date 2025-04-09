import React from 'react';
import styles from '../styles/footer.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importera ikoner

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.newdiv}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3><FaEnvelope /> E-post</h3>
            <p>info@hotmail.se</p>
          </div>
          <div className={styles.footerSection}>
            <h3><FaPhoneAlt /> Telefonnummer</h3>
            <p>073-555555</p>
          </div>
          <div className={styles.footerSection}>
            <h3><FaMapMarkerAlt /> Besöksadress</h3>
            <p>Skellefteå, Skolgatan 8</p>
          </div>
          <div className={styles.footerSection}>
            <h3><FaClock /> Öppettider</h3>
            <p>Mån – Fre: 08.00 – 18.00</p>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
          Behöver du hjälp med ditt projekt?
        </h2>
        <p style={{ textAlign: 'center' }}>
          <span>Ta kontakt med oss! </span>
          <a href="/kontakt" className={styles.contactLink}>
            Kontakta oss
          </a>
        </p>

        <hr />

        <p className={styles.copyright}>
          Copyright © 2025 | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
