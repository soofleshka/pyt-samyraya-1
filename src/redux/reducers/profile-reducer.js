const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST = "CHANGE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profile: null,
  posts: [
    { id: 1, post: "First post" },
    { id: 2, post: "Hi everyone!" },
    { id: 3, post: "Lorem ipsum dolor." },
    {
      id: 4,
      post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis!",
    },
    { id: 5, post: "Lorem ipsum dolor sit amet." },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    case CHANGE_NEW_POST:
      return { ...state, newPostText: action.newPostTextValue };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const changeNewPost = (newPostTextValue) => ({
  type: CHANGE_NEW_POST,
  newPostTextValue: newPostTextValue,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
