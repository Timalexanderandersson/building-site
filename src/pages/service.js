import React from 'react';
import styles from '../styles/services.module.css';
import kök from '../assets/kök.jpg';
import balkong from '../assets/balkong.jpg';
import altan from '../assets/veranda.jpg';
import tak from '../assets/tak.jpg';
import fasad from '../assets/fasad.jpg';
import renovering from '../assets/renovera.jpg';

const services = [
  {
    title: "Altan",
    description: "Vi erbjuder professionella altanbyggnationer som passar ditt hem och dina behov. En perfekt plats för avkoppling.",
    image: altan // Uppdaterad bildimport
  },
  {
    title: "Balkong",
    description: "En ny balkong kan förändra hela din bostad. Vi designar och bygger hållbara och vackra balkonger.",
    image: balkong // Uppdaterad bildimport
  },
  {
    title: "Renovering",
    description: "Vi renoverar och uppgraderar både inomhus och utomhus. Ge ditt hem nytt liv med våra renoveringstjänster.",
    image: renovering // Uppdaterad bildimport
  },
  {
    title: "Tak",
    description: "Behöver du ett nytt tak eller reparation? Vi har lång erfarenhet av takläggning och takrenovering.",
    image: tak // Uppdaterad bildimport
  },
  {
    title: "Fasadrenovering",
    description: "Förbättra din byggnads fasad med våra hållbara och estetiska renoveringstjänster.",
    image: fasad // Uppdaterad bildimport
  },
  {
    title: "Kök",
    description: "Vi hjälper dig att skapa ditt dröm kök.",
    image: kök // Uppdaterad bildimport
  }
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.sectionTitle}>Våra Tjänster</h2>
      <p className={styles.sectionDescription}>
        Vi erbjuder ett brett utbud av professionella bygg- och renoveringstjänster, skräddarsydda för att möta dina behov.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
