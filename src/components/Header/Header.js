import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <span>RSN</span>
      </a>
    </header>
  );
};
