import React, { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showSmallNav, setShowSmallNav] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.menuList}>
        <div
          className={styles.menuIcon}
          onClick={() => setShowSmallNav(!showSmallNav)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/809/809564.png"
            alt="menu"
            width={"40px"}
          />
        </div>

        <h1 className={styles.logo}>
          <Link to={"/"}>Contact App</Link>
        </h1>
      </div>

      <div className={styles.menu}>
        <Link to={"/contactlist"}>
          <button className={styles.button}> List of Contact</button>
        </Link>
        <Link to={"/messagelist"}>
          <button className={styles.button}> List of messages sent</button>
        </Link>
      </div>

      {/* --------------------------------------------small Nav */}

      {showSmallNav && (
        <div className={styles.backdropContainer}>
          {" "}
          <div className={styles.smallMenu}>
            <div className={styles.heading}>
              <h2>
                <Link to={"/"}>Contact App</Link>
              </h2>
            </div>

            <button
              className={styles.backbtn}
              onClick={() => setShowSmallNav(!showSmallNav)}
            >
              <p>&#11184;</p>
            </button>

            <div className={styles.link}>
              <Link to={"/contactlist"}>
                <button className={styles.button}> List of Contact</button>
              </Link>
              <Link to={"/messagelist"}>
                <button className={styles.button}>
                  {" "}
                  List of messages sent
                </button>
              </Link>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};
