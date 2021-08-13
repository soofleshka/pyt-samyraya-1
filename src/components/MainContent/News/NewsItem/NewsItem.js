import React from "react";
import styles from "./NewsItem.module.css";

export const NewsItem = ({ title, body }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
