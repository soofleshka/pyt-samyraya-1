import React from "react";
import { Route } from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import { NewsContainer } from "./News/NewsContainer";
import { Music } from "./Music/Music";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";

export const MainContent = () => {
  return (
    <main>
      <Route path="/profile/:userId?" component={ProfileContainer} />
      <Route path="/dialogs" component={DialogsContainer} />
      <Route path="/news" component={NewsContainer} />
      <Route path="/music" component={Music} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </main>
  );
};
