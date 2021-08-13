import React from "react";
import styles from "./SendMessage.module.css";
import {
  changeNewMessageActionCreator,
  sendMessageActionCreator,
} from "../../../../redux/reducers/dialogs-reducer";

export const SendMessage = ({ newMessageText, dispatch }) => {
  let sendMessageHandler = () => {
    let action = sendMessageActionCreator();
    dispatch(action);
  };

  let changeNewMessageHandler = (e) => {
    let action = changeNewMessageActionCreator(e.target.value);
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
