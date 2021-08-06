import React from "react";
import styles from "./AddPost.module.css";

export const AddPost = ({ newPostText, addPost, changeNewPost }) => {
  let addPostHandler = () => {
    addPost();
  };

  let changeNewPostTextHandler = (e) => {
    changeNewPost(e.target.value);
  };

  return (
    <div className={styles.addPost}>
      <textarea onChange={changeNewPostTextHandler} value={newPostText} />
      <button onClick={addPostHandler} className={styles.addPost__button}>
        Add post
      </button>
    </div>
  );
};
