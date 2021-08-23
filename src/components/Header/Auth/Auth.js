import React from "react";
import styles from "./Auth.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  return (
    <span className={styles.auth}>
      {isAuth ? (
        <>
          <span className={styles.greatings}>Welcome {login}</span>
          <NavLink to="/logout" className={styles.logout}>
            <button>Logout</button>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
      )}
    </span>
  );
};
