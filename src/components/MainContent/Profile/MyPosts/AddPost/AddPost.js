import React from "react";
import styles from "./AddPost.module.css";

export const AddPost = () => {
  let postTextAreaElement = React.createRef();
  let addPostHandler = () => {
    let postText = postTextAreaElement.current.value;
    alert(postText);
  };

  return (
    <div className={styles.addPost}>
      <textarea ref={postTextAreaElement}></textarea>
      <button onClick={addPostHandler} className={styles.addPost__button}>
        Add post
      </button>
    </div>
  );
};
