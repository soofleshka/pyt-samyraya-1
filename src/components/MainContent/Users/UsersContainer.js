import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  showMoreUsers,
  unfollow,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

const UsersContainer = (props) => {
  const [pageLinks, setPageLinks] = useState([]);
  const { users, totalUsers, currentPage, usersCount } = props;

  useEffect(() => {
    props.getUsers(
      usersCount <= 100 ? usersCount : usersCount / 2,
      currentPage
    );
  }, [currentPage]);

  useEffect(() => {
    if (users.length !== 0) {
      const PAGES_LENGTH = 11;
      const totalPagesCount = Math.ceil(totalUsers / usersCount);
      const pagesCount =
        totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
      const half = Math.floor(pagesCount / 2);
      let startPage = currentPage - half;
      if (startPage < 1) startPage = 1;
      if (startPage + pagesCount > totalPagesCount)
        startPage = totalPagesCount - pagesCount;

      const tempPageLinks = [];
      for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
        tempPageLinks.push(i);
      }

      setPageLinks(tempPageLinks);
    }
  }, [totalUsers, usersCount, currentPage]);

  const showMoreUsersButtonHandler = () => {
    props.showMoreUsers(usersCount, currentPage);
  };
  const pageLinkClickHandler = (p) => {
    props.setCurrentPage(p);
  };

  const followButtonClickHandler = (userId) => {
    props.follow(userId);
  };
  const unfollowButtonClickHandler = (userId) => {
    props.unfollow(userId);
  };

  return (
    <Users
      {...props}
      pageLinks={pageLinks}
      followButtonClickHandler={followButtonClickHandler}
      unfollowButtonClickHandler={unfollowButtonClickHandler}
      showMoreUsersButtonHandler={showMoreUsersButtonHandler}
      pageLinkClickHandler={pageLinkClickHandler}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsers: state.usersPage.totalUsers,
    usersCount: state.usersPage.usersCount,
    disabledFollowButtons: state.usersPage.disabledFollowButtons,
    isFetching: state.usersPage.isFetching,
  };
};

const actionCreators = {
  getUsers,
  follow,
  unfollow,
  setCurrentPage,
  showMoreUsers,
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, actionCreators)
)(UsersContainer);
