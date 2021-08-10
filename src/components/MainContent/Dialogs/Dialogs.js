import React from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogMessage } from "./DialogMessage/DialogMessage";
import { SendMessage } from "./SendMessage/SendMessage";

export const Dialogs = ({ dialogs, messages, newMessageText, dispatch }) => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          {dialogs.map((d) => (
            <DialogItem id={d.id} name={d.name} key={d.id} />
          ))}
        </div>
        <div className={styles.dialogMessages}>
          {messages.map((m) => (
            <DialogMessage message={m} key={m.id} />
          ))}
        </div>
      </div>

      <SendMessage newMessageText={newMessageText} dispatch={dispatch} />
    </div>
  );
};
