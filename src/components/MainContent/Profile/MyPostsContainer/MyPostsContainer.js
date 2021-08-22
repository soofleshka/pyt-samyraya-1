import { connect } from "react-redux";
import { MyPosts } from "./MyPosts/MyPosts";
import { addPost } from "../../../../redux/reducers/profile-reducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

export default connect(mapStateToProps, {
  addPost,
})(MyPosts);
