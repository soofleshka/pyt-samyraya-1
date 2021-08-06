import React from "react";
import styles from "./AddPost.module.css";

export const AddPost = ({ addPost }) => {
  console.log(addPost);
  let postTextAreaElement = React.createRef();
  let addPostHandler = () => {
    debugger;
    let postText = postTextAreaElement.current.value;
    addPost(postText);
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
