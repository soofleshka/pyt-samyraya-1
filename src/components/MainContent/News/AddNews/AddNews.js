import React from "react";
import styles from "./AddNews.module.css";

export const AddNews = ({
  newNews,
  newsTitleChange,
  newsBodyChange,
  addNewsClick,
}) => {
  let newsTitleChangeHandler = (e) => {
    newsTitleChange(e.target.value);
  };
  let newsBodyChangeHandler = (e) => {
    newsBodyChange(e.target.value);
  };
  let addNewsClickHandler = () => {
    addNewsClick();
  };
  return (
    <div className={styles.addNews}>
      <h3>Add new news</h3>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={newsTitleChangeHandler}
          value={newNews.title}
        />
      </div>
      <div>
        <label htmlFor="">Body</label>
        <textarea
          onChange={newsBodyChangeHandler}
          value={newNews.body}
        ></textarea>
      </div>
      <button onClick={addNewsClickHandler}>Add news</button>
    </div>
  );
};
