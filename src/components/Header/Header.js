import React from "react";
import styles from "./Header.module.css";
import { Auth } from "./Auth/Auth";

export const Header = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <span>RSN</span>
      </a>
      <Auth />
    </header>
  );
};
