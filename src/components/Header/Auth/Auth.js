import React from "react";
import styles from "./Auth.module.css";
import { NavLink } from "react-router-dom";

export const Auth = ({ isAuth, login }) => {
  return (
    <span className={styles.auth}>
      {isAuth ? (
        <>
          <span className={styles.greatings}>Hello {login}</span>
          <NavLink to="/logout" className={styles.logout}>
            Logout
          </NavLink>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </span>
  );
};
