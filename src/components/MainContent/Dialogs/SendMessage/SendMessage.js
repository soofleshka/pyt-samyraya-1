import React from "react";
import styles from "./SendMessage.module.css";

export const SendMessage = ({
  newMessageText,
  sendMessage,
  changeNewMessage,
}) => {
  let sendMessageHandler = () => {
    sendMessage();
  };

  let changeNewMessageHandler = (e) => {
    changeNewMessage(e.target.value);
  };

  return (
    <div className={styles.sendMessage}>
      <textarea onChange={changeNewMessageHandler} value={newMessageText} />
      <button
        onClick={sendMessageHandler}
        className={styles.sendMessage__button}
      >
        Send Message
      </button>
    </div>
  );
};
