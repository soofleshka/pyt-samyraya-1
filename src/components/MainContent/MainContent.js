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
        render={() => (
          <Profile
            posts={data.posts}
            newPostText={data.newPostText}
            methods={methods.profileMethods}
          />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogs={data.dialogs}
            messages={data.messages}
            newMessageText={data.newMessageText}
            methods={methods.dialogsMethods}
          />
        )}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
    </main>
  );
};
