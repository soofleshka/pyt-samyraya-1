import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      My posts:
      <Post message={"Lorem ipsum dolor sit amet."} />
      <Post
        message={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis!"
        }
      />
      <Post message={"Lorem ipsum dolor."} />
      <Post message={"Hi everyone!"} />
      <Post message={"First post"} />
    </div>
  );
};
