const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
        isYours: true,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case CHANGE_NEW_MESSAGE:
      state.newMessageText = action.newMessageTextValue;
      return state;
  }
  return state;
};

export const sendMessageActionCreator = () => ({ type: "SEND_MESSAGE" });
export const changeNewMessageActionCreator = (newMessageTextValue) => ({
  type: "CHANGE_NEW_MESSAGE",
  newMessageTextValue: newMessageTextValue,
});

export default dialogsReducer;
