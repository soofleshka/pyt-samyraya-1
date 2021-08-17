import React from "react";
import styles from "./Auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.authInfo}>
      {!props.isFetching ? (
        props.isAuth ? (
          <span>Welcome {props.login}</span>
        ) : (
          <span>Please login!</span>
        )
      ) : undefined}
    </div>
  );
};

export default Auth;
