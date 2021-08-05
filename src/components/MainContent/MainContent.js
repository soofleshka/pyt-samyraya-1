import React from "react";
import styles from "./MainContent.module.css";
import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
import { News } from "./News/News";
import { Music } from "./Music/Music";
import { BrowserRouter, Route } from "react-router-dom";

export const MainContent = () => {
  return (
    <main className={styles.main_content}>
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
    </main>
  );
};
