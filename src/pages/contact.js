import React from 'react';
import styles from '../styles/contact.module.css';
import { FiMail, FiPhone, FiClock, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Kontakta Oss</h2>
            <p className={styles.contactDescription}>
              Tveka inte att höra av dig till oss. Här är våra kontaktuppgifter och öppettider:
            </p>
            <ul className={styles.contactList}>
              <li>
                <FiMail className={styles.icon} />
                <strong>E-post:</strong> kontakt@exempel.se
              </li>
              <li>
                <FiPhone className={styles.icon} />
                <strong>Telefon:</strong> 012-345 6789
              </li>
              <li>
                <FiClock className={styles.icon} />
                <strong>Öppettider:</strong> Mån - Fre: 08:00 - 18:00
              </li>
            </ul>
          </div>

          <div className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>Vårat kontor</h2>
            <p className={styles.mapAddress}>
              <FiMapPin className={styles.icon} />
              Bygdeträsk 100, Skellefteå 93141
            </p>
            <iframe
              title="Google Maps"
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.968167690915!2d144.9537353153165!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5c02433f8b%3A0x5045675218cd430!2sFed%20Square!5e0!3m2!1sen!2sus!4v1622543425019!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
