import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogMessage } from "./DialogMessage/DialogMessage";

export const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Slava" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Leha" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Roma" },
  ];
  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am fine too" },
    { id: 4, message: "Okey" },
    { id: 5, message: "Okey" },
  ];
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog_items}>
        {dialogs.map((d) => (
          <DialogItem id={d.id} name={d.name} />
        ))}
      </div>
      <div className={styles.dialog_messages}>
        {messages.map((m) => (
          <DialogMessage message={m.message} />
        ))}
      </div>
    </div>
  );
};
