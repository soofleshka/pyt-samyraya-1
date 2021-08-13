import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navbarFriendsReducer from "./reducers/navbar-friends-reducer";
import newsReducer from "./reducers/news-reducer";

let store = {
  _state: {
    mainContentPage: {
      dialogsPage: {
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
        newMessageText: "",
      },
      profilePage: {
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
      },
      newsPage: {
        news: [
          {
            id: 1,
            title: "First news",
            body:
              "jadf asn;j fkasdjf asdjf asdkfas kdjasdj asldk,  asd jasdkg asd.sadas dasd jgasd" +
              "sadkgasdlg asds.ad asdk;g jasd/ asdkg ;a'dkg as;jdgwqpe / adfsd ,dsfasd fasd fa. fasd fasdf asjdkqwe",
          },
          {
            id: 2,
            title: "Second news",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          },
        ],
        newNews: { title: "", body: "" },
      },
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
  _callSubscriber() {
    console.log("Do subscriber");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.mainContentPage.profilePage = profileReducer(
      this._state.mainContentPage.profilePage,
      action
    );
    this._state.mainContentPage.dialogsPage = dialogsReducer(
      this._state.mainContentPage.dialogsPage,
      action
    );
    this._state.navbarPage = navbarFriendsReducer(
      this._state.navbarPage,
      action
    );
    this._state.mainContentPage.newsPage = newsReducer(
      this._state.mainContentPage.newsPage,
      action
    );

    this._callSubscriber(this._state);
  },
};

export default store;
