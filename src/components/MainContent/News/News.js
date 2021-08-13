import React from "react";
import styles from "./News.module.css";
import { NewsItem } from "./NewsItem/NewsItem";
import { AddNews } from "./AddNews/AddNews";

export const News = ({ state, dispatch }) => {
  return (
    <div className={styles.news}>
      <AddNews newNews={state.newNews} dispatch={dispatch} />
      <div></div>
      {state.news.map((n) => (
        <NewsItem key={n.id} title={n.title} body={n.body} />
      ))}
    </div>
  );
};
