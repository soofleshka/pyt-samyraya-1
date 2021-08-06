import React from "react";
import styles from "./SendMessage.module.css";

export const SendMessage = () => {
  let messageTextareaElementRef = React.createRef();
  let sendMessageHandler = () => {
    let messageText = messageTextareaElementRef.current.value;
    alert(messageText);
  };

  return (
    <div className={styles.sendMessage}>
      <textarea ref={messageTextareaElementRef}></textarea>
      <button
        onClick={sendMessageHandler}
        className={styles.sendMessage__button}
      >
        Send Message
      </button>
    </div>
  );
};
