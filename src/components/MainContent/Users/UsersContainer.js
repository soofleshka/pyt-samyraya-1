import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  addUsers,
  doubleUsersCount,
  followUser,
  setCurrentPage,
  setTotalUsers,
  setUsers,
  toggleFollowButton,
  unfollowUser,
} from "../../../redux/reducers/users-reducer";
import {
  followUserAPI,
  getUsersAPI,
  unfollowUserAPI,
} from "../../../DAL/samuraiAPI/samuraiAPI";
import Users from "./Users";

const UsersContainer = ({
  users,
  currentPage,
  totalUsers,
  usersCount,
  follow,
  unfollow,
  disabledFollowButtons,
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
  toggleFollowButton,
}) => {
  const [loading, setLoading] = useState(false);
  const [pageLinks, setPageLinks] = useState([]);

  useEffect(() => {
    setLoading(true);

    getUsersAPI(usersCount <= 100 ? usersCount : usersCount / 2, currentPage)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setUsers(data.items);
          setTotalUsers(data.totalCount);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
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
    setLoading(true);
    getUsersAPI(usersCount, currentPage + 1)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          addUsers(data.items);
          doubleUsersCount();
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  };
  const pageLinkClickHandler = (p) => {
    setCurrentPage(p);
  };

  const followButtonClickHandler = (userId) => {
    toggleFollowButton(true, userId);
    followUserAPI(userId)
      .then((data) => {
        if (data.resultCode === 0) follow(userId);
        toggleFollowButton(false, userId);
      })
      .catch((e) => {
        console.log(e.message);
        toggleFollowButton(false, userId);
      });
  };
  const unfollowButtonClickHandler = (userId) => {
    toggleFollowButton(true, userId);
    unfollowUserAPI(userId)
      .then((data) => {
        if (data.resultCode === 0) unfollow(userId);
        toggleFollowButton(false, userId);
      })
      .catch((e) => {
        console.log(e.message);
        toggleFollowButton(false, userId);
      });
  };

  return (
    <Users
      users={users}
      currentPage={currentPage}
      totalUsers={totalUsers}
      usersCount={usersCount}
      followButtonClickHandler={followButtonClickHandler}
      unfollowButtonClickHandler={unfollowButtonClickHandler}
      disabledFollowButtons={disabledFollowButtons}
      loading={loading}
      pageLinks={pageLinks}
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
  };
};

const actionCreators = {
  follow: followUser,
  unfollow: unfollowUser,
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
  toggleFollowButton,
};

export default connect(mapStateToProps, actionCreators)(UsersContainer);
