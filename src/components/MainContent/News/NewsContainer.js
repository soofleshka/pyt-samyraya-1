import { connect } from "react-redux";
import { News } from "./News";
import { addNewsActionCreator } from "../../../redux/reducers/news-reducer";

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    newNews: state.newsPage.newNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNews: (payload) => dispatch(addNewsActionCreator(payload)),
  };
};

export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
