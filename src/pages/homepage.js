import React, { useState } from 'react';
import styles from '../styles/homepage.module.css';
import video from '../assets/testvid.mp4';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('kontakt');

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted playsInline >
          <source src={video} type="video/mp4" />
          Din webbläsare stödjer inte videouppspelning.
        </video>

        <div className={styles.overlayContent}>
          <div className={styles.leftBox}>
          <h1>Din pålitliga hantverkspartner</h1>
<p>Vi förvandlar dina idéer till verklighet med kvalitet, vi löser dina byggnationer och fixer de ni är i behova av</p>

          </div>

          <div className={styles.rightBox}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'kontakt' ? styles.active : ''}`}
                onClick={() => setActiveTab('kontakt')}
              >
                Kontakt
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'offert' ? styles.active : ''}`}
                onClick={() => setActiveTab('offert')}
              >
                Offert
              </button>
            </div>
            <div className={styles.tabContent}>
              {activeTab === 'kontakt' && (
                <>
                  <p>Har du frågor eller funderingar? Vi finns här för att hjälpa dig – snabbt, enkelt och utan krångel.</p>
                  <a href="/kontakt" className={styles.button}>Gå till Kontakt</a>
                </>
              )}
              {activeTab === 'offert' && (
                <>
                  <p>Få en kostnadsfri offert anpassad efter ditt projekt – enkelt och smidigt.</p>
                  <a href="/offert" className={styles.button}>Gå till Offert</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Varför välja oss som hantverkare?</h2>
        <p>
          Vi är erfarna, pålitliga och arbetar alltid med kunden i fokus. Vi garanterar
          kvalitetsarbete och erbjuder skräddarsydda lösningar för varje projekt.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
