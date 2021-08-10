import React from "react";
import styles from "./AddPost.module.css";
import {
  ActionCreatorAddPost,
  ActionCreatorChangeNewPost,
} from "../../../../../redux/state";

export const AddPost = ({ newPostText, dispatch }) => {
  let addPostHandler = () => {
    let action = ActionCreatorAddPost();
    dispatch(action);
  };

  let changeNewPostTextHandler = (e) => {
    let action = ActionCreatorChangeNewPost(e.target.value);
    dispatch(action);
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
