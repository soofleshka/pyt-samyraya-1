import React from "react";
import styles from "./AddNews.module.css";
import {
  addNewsActionCreator,
  changeNewNewsBodyActionCreator,
  changeNewNewsTitleActionCreator,
} from "../../../../redux/reducers/news-reducer";

export const AddNews = ({ newNews, dispatch }) => {
  let newsTitleChangeHandler = (e) => {
    let action = changeNewNewsTitleActionCreator(e.target.value);
    dispatch(action);
  };
  let newsBodyChangeHandler = (e) => {
    let action = changeNewNewsBodyActionCreator(e.target.value);
    dispatch(action);
  };
  let addNewsClickHandler = () => {
    let action = addNewsActionCreator();
    dispatch(action);
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
