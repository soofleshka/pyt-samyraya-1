import { connect } from "react-redux";
import {
  addUsersAC,
  doubleUsersCountAC,
  followAC,
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
  unfollowAC,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsers: state.usersPage.totalUsers,
    usersCount: state.usersPage.usersCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    addUsers: (users) => dispatch(addUsersAC(users)),
    setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    doubleUsersCount: () => dispatch(doubleUsersCountAC()),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
