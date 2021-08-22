import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import AddPost from "./AddPost/AddPost";

export const MyPosts = ({ posts, addPost, isMyProfile }) => {
  return (
    <div className={styles.myPosts}>
      <h3>Posts:</h3>
      {isMyProfile() && <AddPost addPost={addPost} />}
      {posts.map((p) => <Post message={p.post} key={p.id} />).reverse()}
    </div>
  );
};
