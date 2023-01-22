import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>
        <Link to={"/"}>Contact App</Link>
      </h1>

      <div className={styles.menu}>
        <Link to={"/contactlist"}>
          <button className={styles.button}> List of Contact</button>
        </Link>
        <Link to={"/messagelist"}>
          <button className={styles.button}> List of messages sent</button>
        </Link>
      </div>
    </div>
  );
};
