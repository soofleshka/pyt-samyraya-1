import { connect } from "react-redux";
import { MyPosts } from "./MyPosts/MyPosts";
import { addPost } from "../../../../redux/reducers/profile-reducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

export const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
