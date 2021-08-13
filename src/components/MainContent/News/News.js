import React from "react";
import styles from "./News.module.css";
import { NewsItem } from "./NewsItem/NewsItem";
import { AddNews } from "./AddNews/AddNews";

export const News = ({
  news,
  newNews,
  newsTitleChange,
  newsBodyChange,
  addNewsClick,
}) => {
  return (
    <div className={styles.news}>
      <AddNews
        newNews={newNews}
        newsTitleChange={newsTitleChange}
        newsBodyChange={newsBodyChange}
        addNewsClick={addNewsClick}
      />
      <div></div>
      {news.map((n) => (
        <NewsItem key={n.id} title={n.title} body={n.body} />
      ))}
    </div>
  );
};
