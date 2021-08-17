import React from "react";
import styles from "./Header.module.css";
import AuthContainer from "./Auth/AuthContainer";

export const Header = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <span>RSN</span>
      </a>
      <AuthContainer />
    </header>
  );
};
