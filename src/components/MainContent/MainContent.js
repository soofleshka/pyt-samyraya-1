import React from "react";
import styles from "./MainContent.module.css";
import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
import { News } from "./News/News";
import { Music } from "./Music/Music";
import { Route } from "react-router-dom";

export const MainContent = ({ state, dispatch }) => {
  return (
    <main>
      <Route
        path="/profile"
        render={() => (
          <Profile
            posts={state.posts}
            newPostText={state.newPostText}
            dispatch={dispatch}
          />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            dispatch={dispatch}
          />
        )}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
    </main>
  );
};
