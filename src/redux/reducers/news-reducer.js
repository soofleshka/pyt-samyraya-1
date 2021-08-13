const ADD_NEWS = "ADD_NEWS";
const CHANGE_NEW_NEWS_TITLE = "CHANGE_NEW_NEWS_TITLE";
const CHANGE_NEW_NEWS_BODY = "CHANGE_NEW_NEWS_BODY";

let initialState = {
  news: [
    {
      id: 1,
      title: "First news",
      body:
        "jadf asn;j fkasdjf asdjf asdkfas kdjasdj asldk,  asd jasdkg asd.sadas dasd jgasd" +
        "sadkgasdlg asds.ad asdk;g jasd/ asdkg ;a'dkg as;jdgwqpe / adfsd ,dsfasd fasd fa. fasd fasdf asjdkqwe",
    },
    {
      id: 2,
      title: "Second news",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    },
  ],
  newNews: { title: "", body: "" },
};

const newsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
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
