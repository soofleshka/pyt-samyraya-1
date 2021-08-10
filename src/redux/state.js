const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST = "CHANGE_NEW_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE";

let store = {
  _state: {
    mainContentPage: {
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
      posts: [
        { id: 1, post: "First post" },
        { id: 2, post: "Hi everyone!" },
        { id: 3, post: "Lorem ipsum dolor." },
        {
          id: 4,
          post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis!",
        },
        { id: 5, post: "Lorem ipsum dolor sit amet." },
      ],
      newPostText: "",
      newMessageText: "",
    },
    navbarPage: {
      friends: [
        { id: 1, name: "Slava" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Leha" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Roma" },
      ],
    },
  },
  _observer() {
    console.log("observe");
  },

  getState() {
    return this._state;
  },
  subscribe(callback) {
    this._observer = callback;
  },

  addPost() {
    let newPost = {
      id: this._state.mainContentPage.posts.length + 1,
      post: this._state.mainContentPage.newPostText,
    };
    this._state.mainContentPage.posts.push(newPost);
    this._state.mainContentPage.newPostText = "";
    this._observer(this._state);
  },
  changeNewPost(newPostTextValue) {
    this._state.mainContentPage.newPostText = newPostTextValue;
    this._observer(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: this._state.mainContentPage.messages.length + 1,
      message: this._state.mainContentPage.newMessageText,
      isYours: true,
    };
    this._state.mainContentPage.messages.push(newMessage);
    this._state.mainContentPage.newMessageText = "";
    this._observer(this._state);
  },
  changeNewMessage(newMessageTextValue) {
    this._state.mainContentPage.newMessageText = newMessageTextValue;
    this._observer(this._state);
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost();
        break;
      case CHANGE_NEW_POST:
        this.changeNewPost(action.newPostTextValue);
        break;
      case SEND_MESSAGE:
        this.sendMessage();
        break;
      case CHANGE_NEW_MESSAGE:
        this.changeNewMessage(action.newMessageTextValue);
        break;
    }
  },
};

export const ActionCreatorAddPost = () => ({ type: "ADD_POST" });
export const ActionCreatorChangeNewPost = (newPostTextValue) => ({
  type: "CHANGE_NEW_POST",
  newPostTextValue: newPostTextValue,
});
export const ActionCreatorSendMessage = () => ({ type: "SEND_MESSAGE" });
export const ActionCreatorChangeNewMessage = (newMessageTextValue) => ({
  type: "CHANGE_NEW_MESSAGE",
  newMessageTextValue: newMessageTextValue,
});

export default store;
