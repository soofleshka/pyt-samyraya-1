import React from "react";
import styles from "./Post.module.css";

export const Post = ({ message }) => {
  return <div className={styles.post}>{message}</div>;
};
