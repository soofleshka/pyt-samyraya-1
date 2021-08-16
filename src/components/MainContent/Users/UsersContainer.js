import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  addUsers,
  doubleUsersCount,
  follow,
  setCurrentPage,
  setTotalUsers,
  setUsers,
  unfollow,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";

const UsersContainer = ({
  users,
  currentPage,
  totalUsers,
  usersCount,
  follow,
  unfollow,
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
}) => {
  const [loading, setLoading] = useState(false);
  const [pageLinks, setPageLinks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${currentPage}`,
        {
          headers: {
            "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error) {
            console.log(response.data.error);
            return;
          }
          setLoading(false);
          setUsers(response.data.items);
          setTotalUsers(response.data.totalCount);
        }
      });
    return () => {
      setUsers([]);
      setTotalUsers(0);
    };
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
  }, [totalUsers, usersCount]);

  let showMoreUsersButtonHandler = () => {
    setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${
          currentPage + 1
        }`,
        {
          headers: {
            "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error) {
            console.log(response.data.error);
            return;
          }
          setLoading(false);
          addUsers(response.data.items);
          doubleUsersCount();
        }
      });
  };
  let pageLinkClickHandler = (p) => {
    setCurrentPage(p);
  };

  return (
    <Users
      users={users}
      currentPage={currentPage}
      totalUsers={totalUsers}
      follow={follow}
      unfollow={unfollow}
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
  };
};

const actionCreators = {
  follow,
  unfollow,
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
};

export default connect(mapStateToProps, actionCreators)(UsersContainer);
