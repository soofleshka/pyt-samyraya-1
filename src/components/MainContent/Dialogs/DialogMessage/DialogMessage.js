import React from "react";
import styles from "./DialogMessage.module.css";

export const DialogMessage = ({ message }) => {
  return (
    <div
      className={
        styles.dialogMessage + " " + (message.isYours ? styles.isYours : "")
      }
    >
      {message.message}
    </div>
  );
};
