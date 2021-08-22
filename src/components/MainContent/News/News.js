import React from "react";
import styles from "./News.module.css";
import { NewsItem } from "./NewsItem/NewsItem";
import { AddNews } from "./AddNews/AddNews";

export const News = ({ news, addNewsClick }) => {
  return (
    <div className={styles.news}>
      <AddNews addNewsClick={addNewsClick} />
      <div>
        {news.map((n) => (
          <NewsItem key={n.id} title={n.title} body={n.body} />
        ))}
      </div>
    </div>
  );
};
