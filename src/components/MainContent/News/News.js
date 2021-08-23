import React from "react";
import { NewsItem } from "./NewsItem/NewsItem";
import AddNews from "./AddNews/AddNews";
import styles from "./News.module.css";

export const News = ({ news, ...props }) => {
  return (
    <div className={styles.news}>
      <AddNews {...props} />
      <div>
        {news.map((n) => (
          <NewsItem key={n.id} title={n.title} body={n.body} />
        ))}
      </div>
    </div>
  );
};
