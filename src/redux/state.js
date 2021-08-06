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

let data = {
  mainContentPage: { dialogs, messages, posts },
  navbarPage: { friends },
};

export default data;
