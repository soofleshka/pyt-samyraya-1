import React from "react";
import styles from "./SendMessage.module.css";
import {
  ActionCreatorChangeNewMessage,
  ActionCreatorSendMessage,
} from "../../../../redux/state";

export const SendMessage = ({ newMessageText, dispatch }) => {
  let sendMessageHandler = () => {
    let action = ActionCreatorSendMessage();
    dispatch(action);
  };

  let changeNewMessageHandler = (e) => {
    let action = ActionCreatorChangeNewMessage(e.target.value);
    dispatch(action);
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
