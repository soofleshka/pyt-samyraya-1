import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import AddPost from "./AddPost/AddPost";

export const MyPosts = ({ posts, ...props }) => {
  return (
    <div className={styles.myPosts}>
      <h3>My posts:</h3>
      <AddPost {...props} />
      {posts.map((p) => <Post message={p.post} key={p.id} />).reverse()}
    </div>
  );
};
