const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST = "CHANGE_NEW_POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case CHANGE_NEW_POST:
      state.newPostText = action.newPostTextValue;
      return state;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: "ADD_POST" });
export const changeNewPostActionCreator = (newPostTextValue) => ({
  type: "CHANGE_NEW_POST",
  newPostTextValue: newPostTextValue,
});

export default profileReducer;
