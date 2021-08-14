import { connect } from "react-redux";
import {
  followAC,
  setStateAC,
  unfollowAC,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setState: (users) => dispatch(setStateAC(users)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
