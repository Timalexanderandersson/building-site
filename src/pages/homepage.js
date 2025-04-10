import React, { useState } from 'react';
import styles from '../styles/homepage.module.css';
import video from '../assets/testvid.mp4';
import Slider from 'react-slick';
import newpic from '../assets/newpic.jpg';
import nextnew from '../assets/nextnew.jpg';
import tryagain from '../assets/tryagain.jpg';
import { Link } from 'react-router-dom';



const Homepage = () => {

  

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '60px',
    swipeToSlide: true,
    arrows: false,
  };

  const [activeTab, setActiveTab] = useState('kontakt');

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Din webbläsare stödjer inte videouppspelning.
        </video>

        <div className={styles.overlayContent}>
          <div className={styles.leftBox}>
            <h1>Din pålitliga hantverkspartner</h1>
            <p>
              Vi förvandlar dina idéer till verklighet med kvalitet, vi löser dina byggnationer och fixer de ni är i behova av
            </p>
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
                  <Link to="/kontakt" className={styles.button}>Gå till Kontakt</Link>
                </>
              )}
              {activeTab === 'offert' && (
                <>
                  <p>Få en kostnadsfri offert anpassad efter ditt projekt – enkelt och smidigt.</p>
                  <Link to="offert" className={styles.button}>Gå till Offert</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whyChooseUs}>
      <div className={styles.whyChooseUsinner}>
  <h2>Varför välja oss som hantverkare?</h2>
  <p>
    Att välja rätt hantverkare kan vara avgörande för resultatet av ditt projekt – och vi är här för att göra det valet enkelt för dig.
  </p>
  <div className={styles.checklist}>
    <div className={styles.checkItem}>
      <span className={styles.checkmark}>✔</span>
      <div>
        <h3>Kompetens & Erfarenhet</h3>
        <p>Vi har mångårig erfarenhet inom branschen och levererar alltid med högsta kvalitet.</p>
      </div>
    </div>
    <div className={styles.checkItem}>
      <span className={styles.checkmark}>✔</span>
      <div>
        <h3>Helhetslösning</h3>
        <p>Från planering till färdigt resultat – vi tar hand om hela projektet åt dig.</p>
      </div>
    </div>
    <div className={styles.checkItem}>
      <span className={styles.checkmark}>✔</span>
      <div>
        <h3>Professionalism</h3>
        <p>Vi jobbar strukturerat, är pålitliga och sätter alltid kundens behov först.</p>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Ny sektion */}
      <div className={styles.finalCall}>
        <div className={styles.finalCallinner}>
        <h2>Vi hjälper dig med dina projekt!</h2>
        <p>
          Oavsett om det är en liten renovering eller ett större byggprojekt – vi finns här för att förverkliga dina idéer med kvalitet och engagemang.
        </p>
      </div>
      <div className={styles.servicesPreview}>
      <p>
    Kika igenom <strong><Link className={styles.buttontj} to="/tjänster">våra tjänster</Link></strong> för mer information om vad vi jobbar med.
  </p>
  <Slider {...carouselSettings}>
    <div><img src={newpic} alt="Tjänst 1" className={styles.carouselImage} /></div>
    <div><img src={nextnew} alt="Tjänst 2" className={styles.carouselImage} /></div>
    <div><img src={tryagain} alt="Tjänst 3" className={styles.carouselImage} /></div>
  </Slider>
</div>

        </div>
        <div className={styles.openingHoursContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.openingHoursText}>
          <h2>Öppettider</h2>
          <ul>
            <li>Måndag - Fredag: 08:00 - 18:00</li>
            <li>Lördag: 10:00 - 15:00</li>
            <li>Söndag: Stängt</li>
          </ul>
        </div>
        <div className={styles.googleMap}>
          <h2>Hitta till oss</h2>
          <p>adress 12344, skellefteå</p>
          <iframe
          className={styles.googleMapreal}
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=...your-google-map-url..."
          
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
       
    </div>
  );
};

export default Homepage;
