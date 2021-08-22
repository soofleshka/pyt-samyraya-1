const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Slava" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Leha" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Roma" },
  ],
  messages: [
    { id: 1, message: "Hello", isYours: true },
    { id: 2, message: "How are you?", isYours: true },
    { id: 3, message: "I am fine", isYours: false },
    { id: 4, message: "I am fine too", isYours: true },
    { id: 5, message: "Okey", isYours: false },
    { id: 6, message: "Okey", isYours: true },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: action.newMessageText,
        isYours: true,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = (payload) => ({
  type: SEND_MESSAGE,
  newMessageText: payload.newMessageText,
});

export default dialogsReducer;
