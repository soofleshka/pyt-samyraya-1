import React from "react";
import styles from "./Header.module.css";
import { AuthPanel } from "./AuthPanel/AuthPanel";

export const Header = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <span>RSN</span>
      </a>
      <AuthPanel />
    </header>
  );
};
