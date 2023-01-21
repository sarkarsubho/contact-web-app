import React from "react";
import styles from "./nav.module.css"

export const Navbar = () => {
  return <div className={styles.main}>
    <h1>Contact App</h1>

    <div className={styles.menu}>
        <button className={styles.button}> List of Contact</button>
        <button className={styles.button}> List of messages sent</button>
    </div>
  </div>;
};
