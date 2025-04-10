import React from 'react';
import styles from '../styles/aboutus.module.css'; // CSS-modul för stilar

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.header}>
        <h1>Om Oss</h1>
        <p>Vi är ett passionerat hantverkarteam som erbjuder pålitliga och professionella tjänster för alla dina bygg- och renoveringsbehov.</p>
      </div>

      <section className={styles.missionSection}>
        <h2>Vår Mission</h2>
        <p>
          Vår mission är att leverera högkvalitativa byggtjänster och renoveringar, samtidigt som vi behåller en personlig kontakt med våra kunder. Vi strävar efter att skapa hållbara lösningar och överträffa kundernas förväntningar, varje gång.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2>Vårt Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Anders Johansson</h3>
            <p>Byggmästare med över 15 års erfarenhet inom branschen.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Eva Svensson</h3>
            <p>Expert på inredning och design för hållbara hem.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Johan Eriksson</h3>
            <p>Snickare och allsidig hantverkare med fokus på detaljer.</p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Kontakta Oss</h2>
        <p>Har du frågor eller vill du boka ett möte? Tveka inte att höra av dig till oss!</p>
        <button className={styles.contactButton}>Kontakt</button>
      </section>
    </div>
  );
};

export default AboutUs;
