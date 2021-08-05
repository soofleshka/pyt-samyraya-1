import React from "react";
import styles from "./DialogMessage.module.css";

export const DialogMessage = ({ message }) => {
  return <div className={styles.dialog_message}>{message}</div>;
};
