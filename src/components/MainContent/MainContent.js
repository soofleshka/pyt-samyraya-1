import React from "react";
import { Route } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { DialogsContainer } from "./Dialogs/DialogsContainer";
import { NewsContainer } from "./News/NewsContainer";
import { Music } from "./Music/Music";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <main>
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/news" render={() => <NewsContainer />} />
      <Route path="/music" component={Music} />
    </main>
  );
};
