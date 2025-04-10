import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css"; 

const NotFound = () => {
  return (
    <div className={styles.notfoundContainer}>
      <div className={styles.notfoundContent}>
        <h1>Oops! Sidan du söker finns inte! 😬</h1>
        <p>
          Den sidan verkar ha försvunnit. 
        </p>
        <p>
          Men oroa dig inte, vi har inte glömt bort dig. <br />
          Gå tillbaka till <Link to="/">startsidan</Link> och börja om.
        </p>
        <div className={styles.notfoundIcon}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2711/2711428.png"
            alt="404 Error Icon"
            width="100"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
