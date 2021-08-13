import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import {
  addPostActionCreator,
  changeNewPostActionCreator,
} from "../../../../redux/reducers/profile-reducer";

export const MyPostsContainer = ({ store }) => {
  let state = store.getState();
  let { posts, newPostText } = state.profilePage;
  let addPost = () => {
    let action = addPostActionCreator();
    store.dispatch(action);
  };
  let changeNewPostText = (text) => {
    let action = changeNewPostActionCreator(text);
    store.dispatch(action);
  };
  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPost}
      changeNewPostText={changeNewPostText}
    />
  );
};
