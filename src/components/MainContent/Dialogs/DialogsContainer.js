import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import {
  changeNewMessageActionCreator,
  sendMessageActionCreator,
} from "../../../redux/reducers/dialogs-reducer";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    changeNewMessage: (text) => dispatch(changeNewMessageActionCreator(text)),
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
