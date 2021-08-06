import React from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogMessage } from "./DialogMessage/DialogMessage";

export const Dialogs = ({ dialogs, messages }) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogs.map((d) => (
          <DialogItem id={d.id} name={d.name} />
        ))}
      </div>
      <div className={styles.dialogMessages}>
        {messages.map((m) => (
          <DialogMessage message={m} />
        ))}
      </div>
    </div>
  );
};
