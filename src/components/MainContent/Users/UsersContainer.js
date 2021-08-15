import React from "react";
import { connect } from "react-redux";
import axios from "axios";
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

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
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
          }
        });
    }
  }

  showMoreButtonClickHandler = () => {
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
        }
      });
  };
  pagesLinkClickHandler = (pageNumber) => {
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
        }
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUsers={this.props.totalUsers}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
