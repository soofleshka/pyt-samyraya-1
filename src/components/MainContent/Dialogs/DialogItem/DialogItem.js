import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ id, name }) => {
  return (
    <NavLink to={"/dialogs/" + id}>
      <div className={styles.dialogAva}>
        <div className={styles.dialogAva__image}></div>
        {name}
      </div>
    </NavLink>
  );
};
