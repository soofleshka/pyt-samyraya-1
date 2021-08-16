import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  addUsers,
  doubleUsersCount,
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsers,
  setUsers,
  unfollow,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`,
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
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
            this.props.setIsFetching(false);
          }
        });
    }
  }

  showMoreButtonClickHandler = () => {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${
          this.props.usersCount
        }&page=${this.props.currentPage + 1}`,
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
          this.props.addUsers(response.data.items);
          this.props.doubleUsersCount();
          this.props.setIsFetching(false);
        }
      });
  };
  pagesLinkClickHandler = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${pageNumber}`,
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
          this.props.setUsers(response.data.items);
          this.props.setIsFetching(false);
        }
      });
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
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUsers={this.props.totalUsers}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        pagesLinks={pagesLinks}
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
  setIsFetching,
};

export default connect(mapStateToProps, actionCreators)(UsersContainer);
