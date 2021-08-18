import React from "react";
import { connect } from "react-redux";
import {
  addUsers,
  follow,
  getUsers,
  unfollow,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersCount, this.props.currentPage);
  }

  showMoreButtonClickHandler = () => {
    this.props.addUsers(this.props.usersCount, this.props.currentPage);
  };
  pagesLinkClickHandler = (pageNumber) => {
    this.props.getUsers(this.props.usersCount, pageNumber);
  };

  followButtonClickHandler = (userId) => {
    this.props.follow(userId);
  };
  unfollowButtonClickHandler = (userId) => {
    this.props.unfollow(userId);
  };

  render() {
    const PAGES_LENGTH = 11;
    let totalPagesCount = Math.ceil(
      this.props.totalUsers / this.props.usersCount
    );
    const pagesCount =
      totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
    const half = Math.floor(pagesCount / 2);
    let startPage = this.props.currentPage - half;
    if (startPage < 1) startPage = 1;
    if (startPage + pagesCount > totalPagesCount)
      startPage = totalPagesCount - pagesCount;
    const pagesLinks = [];
    if (this.props.users.length !== 0) {
      for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
        pagesLinks.push(i);
      }
    }
    return (
      <Users
        {...this.props}
        pagesLinks={pagesLinks}
        followButtonClickHandler={this.followButtonClickHandler}
        unfollowButtonClickHandler={this.unfollowButtonClickHandler}
        showMoreButtonClickHandler={this.showMoreButtonClickHandler}
        pagesLinkClickHandler={this.pagesLinkClickHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    totalUsers: state.usersPage.totalUsers,
    isFetching: state.usersPage.isFetching,
    disabledFollowButtons: state.usersPage.disabledFollowButtons,
  };
};
const actionCreators = {
  follow,
  unfollow,
  addUsers,
  getUsers,
};

export default connect(mapStateToProps, actionCreators)(UsersContainer);
