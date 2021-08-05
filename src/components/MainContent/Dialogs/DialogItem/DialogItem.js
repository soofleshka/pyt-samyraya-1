import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ id, name }) => {
  return (
    <div className={styles.dialog_item}>
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
};
