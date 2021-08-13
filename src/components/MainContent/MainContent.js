import React from "react";
import { Route } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { DialogsContainer } from "./Dialogs/DialogsContainer";
import { NewsContainer } from "./News/NewsContainer";
import { Music } from "./Music/Music";
import styles from "./MainContent.module.css";

export const MainContent = ({ store }) => {
  return (
    <main>
      <Route path="/profile" render={() => <Profile store={store} />} />
      <Route
        path="/dialogs"
        render={() => <DialogsContainer store={store} />}
      />
      <Route path="/news" render={() => <NewsContainer store={store} />} />
      <Route path="/music" component={Music} />
    </main>
  );
};
