import React from 'react';
import styles from '../styles/quote.module.css';

const Quote = () => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Få en kostnadsfri offert</h2>
          <p className={styles.subtitle}>Fyll i formuläret nedan så återkommer vi inom 24 timmar.</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Namn" required />
            <input type="email" placeholder="E-post" required />
          </div>
          <input type="tel" placeholder="Telefonnummer" required />
          <textarea placeholder="Berätta vad du behöver hjälp med..." rows="5" required></textarea>
          <button type="submit" className={styles.button}>Begär offert</button>
        </form>

        <div className={styles.features}>
        <div>
  <h4><i className="fas fa-check-circle" style={{ color: '#778da9;' }}></i> Inga dolda avgifter</h4>
  <p>Du får en tydlig och ärlig offert – inga överraskningar.</p>
</div>
<div>
  <h4><i className="fas fa-rocket" style={{ color: '#778da9;' }}></i> Snabb återkoppling</h4>
  <p>Vi svarar oftast inom 24h. Ibland snabbare.</p>
</div>
<div>
  <h4><i className="fas fa-map-marker-alt" style={{ color: '#778da9;' }}></i> Anpassat för dig</h4>
  <p>Vi anpassar lösningen efter ditt behov och budget.</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Quote;
