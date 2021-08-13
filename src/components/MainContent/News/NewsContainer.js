import { connect } from "react-redux";
import { News } from "./News";
import {
  addNewsActionCreator,
  changeNewNewsBodyActionCreator,
  changeNewNewsTitleActionCreator,
} from "../../../redux/reducers/news-reducer";

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    newNews: state.newsPage.newNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newsTitleChange: (text) => dispatch(changeNewNewsTitleActionCreator(text)),
    newsBodyChange: (body) => dispatch(changeNewNewsBodyActionCreator(body)),
    addNewsClick: () => dispatch(addNewsActionCreator()),
  };
};

export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
