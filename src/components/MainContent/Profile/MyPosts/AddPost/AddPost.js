import React from "react";
import styles from "./AddPost.module.css";
import {
  addPostActionCreator,
  changeNewPostActionCreator,
} from "../../../../../redux/reducers/profile-reducer";

export const AddPost = ({ newPostText, dispatch }) => {
  let addPostHandler = () => {
    let action = addPostActionCreator();
    dispatch(action);
  };

  let changeNewPostTextHandler = (e) => {
    let action = changeNewPostActionCreator(e.target.value);
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
