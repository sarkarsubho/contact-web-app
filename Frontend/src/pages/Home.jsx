import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
export const Home = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1> Welcome to Contact App</h1>

        <div>
          <Link to={"/contactlist"}>
            <button className={styles.button}> List of Contact</button>
          </Link>
          <Link to={"/messagelist"}>
            <button className={styles.button}> List of messages sent</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
