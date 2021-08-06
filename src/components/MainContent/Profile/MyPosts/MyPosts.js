import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ posts }) => {
  return (
    <div className={styles.myPosts}>
      My posts:
      {posts.reverse().map((p) => (
        <Post message={p.post} />
      ))}
    </div>
  );
};
