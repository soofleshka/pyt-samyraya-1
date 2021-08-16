import { connect } from "react-redux";
import { MyPosts } from "./MyPosts/MyPosts";
import {
  addPost,
  changeNewPost,
} from "../../../../redux/reducers/profile-reducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPost()),
  changeNewPostText: (text) => dispatch(changeNewPost(text)),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
