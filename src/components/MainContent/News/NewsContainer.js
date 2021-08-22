import { connect } from "react-redux";
import { News } from "./News";
import { addNewsActionCreator } from "../../../redux/reducers/news-reducer";

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewsClick: (payLoad) => dispatch(addNewsActionCreator(payLoad)),
  };
};

export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
