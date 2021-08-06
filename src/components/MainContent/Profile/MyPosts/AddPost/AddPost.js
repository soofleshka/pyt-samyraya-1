import React from "react";
import styles from "./AddPost.module.css";

export const AddPost = ({ newPostText, addPost, changeNewPost }) => {
  let postTextAreaElement = React.createRef();
  let addPostHandler = () => {
    let postText = postTextAreaElement.current.value;
    addPost(postText);
    changeNewPost("");
  };

  let changeNewPostTextHandler = (e) => {
    changeNewPost(e.target.value);
  };

  return (
    <div className={styles.addPost}>
      <textarea
        ref={postTextAreaElement}
        onChange={changeNewPostTextHandler}
        value={newPostText.value}
      ></textarea>
      <button onClick={addPostHandler} className={styles.addPost__button}>
        Add post
      </button>
    </div>
  );
};
