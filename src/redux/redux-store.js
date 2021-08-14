import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import newsReducer from "./reducers/news-reducer";
import navbarFriendsReducer from "./reducers/navbar-friends-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  newsPage: newsReducer,
  navbarPage: navbarFriendsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
