import { connect } from "react-redux";
import { MyPosts } from "./MyPosts/MyPosts";
import {
  addPostActionCreator,
  changeNewPostActionCreator,
} from "../../../../redux/reducers/profile-reducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostActionCreator()),
  changeNewPostText: (text) => dispatch(changeNewPostActionCreator(text)),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
