import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.authInfo}>
      {!props.isFetching ? (
        props.isAuth ? (
          <>
            <span className={styles.greetings}>Welcome {props.login}</span>
            <NavLink to="/logout">
              <button>Logout</button>
            </NavLink>
          </>
        ) : (
          <>
            <span className={styles.greetings}>Please login!</span>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </>
        )
      ) : undefined}
    </div>
  );
};

export default Auth;
