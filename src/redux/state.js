import rerenderReact from "../rerender";

let dialogs = [
  { id: 1, name: "Slava" },
  { id: 2, name: "Tanya" },
  { id: 3, name: "Leha" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Roma" },
];
let messages = [
  { id: 1, message: "Hello", isYours: true },
  { id: 2, message: "How are you?", isYours: true },
  { id: 3, message: "I am fine", isYours: false },
  { id: 4, message: "I am fine too", isYours: true },
  { id: 5, message: "Okey", isYours: false },
  { id: 6, message: "Okey", isYours: true },
];

let posts = [
  { id: 1, post: "First post" },
  { id: 2, post: "Hi everyone!" },
  { id: 3, post: "Lorem ipsum dolor." },
  {
    id: 4,
    post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis!",
  },
  { id: 5, post: "Lorem ipsum dolor sit amet." },
];

let friends = [
  { id: 1, name: "Slava" },
  { id: 2, name: "Tanya" },
  { id: 3, name: "Leha" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Roma" },
];

let newPostText = "";

let newMessageText = "";

let data = {
  mainContentPage: { dialogs, messages, newMessageText, posts, newPostText },
  navbarPage: { friends },
};

let addPost = () => {
  let newPost = {
    id: data.mainContentPage.posts.length + 1,
    post: data.mainContentPage.newPostText,
  };
  data.mainContentPage.posts.push(newPost);
  data.mainContentPage.newPostText = "";
  rerenderReact(data, methods);
};

let changeNewPost = (newPostTextValue) => {
  data.mainContentPage.newPostText = newPostTextValue;
  rerenderReact(data, methods);
};

let sendMessage = () => {
  let newMessage = {
    id: data.mainContentPage.messages.length + 1,
    message: data.mainContentPage.newMessageText,
    isYours: true,
  };
  data.mainContentPage.messages.push(newMessage);
  data.mainContentPage.newMessageText = "";
  rerenderReact(data, methods);
};

let changeNewMessage = (newMessageTextValue) => {
  data.mainContentPage.newMessageText = newMessageTextValue;
  rerenderReact(data, methods);
};

export let methods = {
  mainContentPage: {
    profileMethods: { addPost, changeNewPost },
    dialogsMethods: { sendMessage, changeNewMessage },
  },
};

export default data;
