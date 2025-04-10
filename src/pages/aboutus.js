import React from 'react';
import styles from '../styles/aboutus.module.css';
import face from '../assets/new.jpg';
import { Link } from 'react-router-dom'; // Exempel på en bildimport (ändra denna om du har andra bilder)

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsContainerinner}>

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
            <img src={face} alt="Anders Johansson" /> {/* Här används den importerade bilden */}
            <h3>Person</h3>
            <p>Byggmästare med över x antal års erfarenhet inom branschen.</p>
          </div>
          <div className={styles.teamMember}>
            <img src={face} alt="Eva" />
            <h3>Person</h3>
            <p>Snickare och allsidig hantverkare med fokus på detaljer.</p>
          </div>
          <div className={styles.teamMember}>
            <img src={face} alt="Johan" />
            <h3>Person</h3>
            <p>Snickare och allsidig hantverkare med fokus på detaljer.</p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Kontakta Oss</h2>
        <p>Har du frågor eller vill du boka ett möte? Tveka inte att höra av dig till oss!</p>
        <Link to="/kontakt" className={styles.contactButton}>Kontakt</Link>
      </section>

      </div>
     
    </div>
  );
};

export default AboutUs;
