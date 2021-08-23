import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { sendMessageActionCreator } from "../../../redux/reducers/dialogs-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) =>
      dispatch(sendMessageActionCreator(newMessageText)),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
