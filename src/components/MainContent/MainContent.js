import React from "react";
import styles from "./MainContent.module.css";
import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
import { News } from "./News/News";
import { Music } from "./Music/Music";
import { Route } from "react-router-dom";

export const MainContent = ({ data, methods }) => {
  return (
    <main>
      <Route
        path="/profile"
        render={() => <Profile posts={data.posts} methods={methods} />}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs dialogs={data.dialogs} messages={data.messages} />
        )}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
    </main>
  );
};
