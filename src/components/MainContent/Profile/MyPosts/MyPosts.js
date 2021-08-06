import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { AddPost } from "./AddPost/AddPost";

export const MyPosts = ({ posts, newPostText, methods }) => {
  return (
    <div className={styles.myPosts}>
      <h3>My posts:</h3>
      <AddPost
        newPostText={newPostText}
        addPost={methods.addPost}
        changeNewPost={methods.changeNewPost}
      />
      {posts.map((p) => <Post message={p.post} key={p.id} />).reverse()}
    </div>
  );
};
