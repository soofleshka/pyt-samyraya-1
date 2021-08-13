import React from "react";
import { News } from "./News";
import {
  addNewsActionCreator,
  changeNewNewsBodyActionCreator,
  changeNewNewsTitleActionCreator,
} from "../../../redux/reducers/news-reducer";

export const NewsContainer = ({ store }) => {
  let state = store.getState();
  let { news, newNews } = state.newsPage;
  let newsTitleChange = (text) => {
    let action = changeNewNewsTitleActionCreator(text);
    store.dispatch(action);
  };
  let newsBodyChange = (body) => {
    let action = changeNewNewsBodyActionCreator(body);
    store.dispatch(action);
  };
  let addNewsClick = () => {
    let action = addNewsActionCreator();
    store.dispatch(action);
  };
  return (
    <News
      news={news}
      newNews={newNews}
      newsTitleChange={newsTitleChange}
      newsBodyChange={newsBodyChange}
      addNewsClick={addNewsClick}
    />
  );
};
