import React from "react";
import { Dialogs } from "./Dialogs";
import {
  changeNewMessageActionCreator,
  sendMessageActionCreator,
} from "../../../redux/reducers/dialogs-reducer";

export const DialogsContainer = ({ store }) => {
  let state = store.getState();
  let { dialogs, messages, newMessageText } = state.dialogsPage;
  let sendMessage = () => {
    let action = sendMessageActionCreator();
    store.dispatch(action);
  };

  let changeNewMessage = (text) => {
    let action = changeNewMessageActionCreator(text);
    store.dispatch(action);
  };
  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageText={newMessageText}
      sendMessage={sendMessage}
      changeNewMessage={changeNewMessage}
    />
  );
};
