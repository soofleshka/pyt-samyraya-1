const ADD_NEWS = "ADD_NEWS";
const CHANGE_NEW_NEWS_TITLE = "CHANGE_NEW_NEWS_TITLE";
const CHANGE_NEW_NEWS_BODY = "CHANGE_NEW_NEWS_BODY";

const newsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      let newNews = {
        id: state.news.length + 1,
        title: state.newNews.title,
        body: state.newNews.body,
      };
      state.news.push(newNews);
      state.newNews.title = "";
      state.newNews.body = "";
      return state;
    }
    case CHANGE_NEW_NEWS_TITLE: {
      state.newNews.title = action.newNewsTitleText;
      return state;
    }
    case CHANGE_NEW_NEWS_BODY: {
      state.newNews.body = action.newNewsBodyText;
      return state;
    }
  }
  return state;
};

export const addNewsActionCreator = () => {
  return { type: ADD_NEWS };
};
export const changeNewNewsTitleActionCreator = (newNewsTitleText) => {
  return { type: CHANGE_NEW_NEWS_TITLE, newNewsTitleText };
};
export const changeNewNewsBodyActionCreator = (newNewsBodyText) => {
  return { type: CHANGE_NEW_NEWS_BODY, newNewsBodyText };
};

export default newsReducer;
