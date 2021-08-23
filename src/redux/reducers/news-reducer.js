const ADD_NEWS = "ADD_NEWS";

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
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      let newNews = {
        id: state.news.length + 1,
        title: action.newNewsTitle,
        body: action.newNewsBody,
      };
      return {
        ...state,
        news: [...state.news, newNews],
        newNews: { ...state.newNews, title: "", body: "" },
      };
    }
    default:
      return state;
  }
};

export const addNewsActionCreator = (payload) => {
  return {
    type: ADD_NEWS,
    newNewsTitle: payload.newNewsTitle,
    newNewsBody: payload.newNewsBody,
  };
};

export default newsReducer;
