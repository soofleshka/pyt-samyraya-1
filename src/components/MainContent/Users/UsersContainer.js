import React from "react";
import { connect } from "react-redux";
import {
  addUsers,
  doubleUsersCount,
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsers,
  setUsers,
  toggleDisabledFollowButtons,
  unfollow,
} from "../../../redux/reducers/users-reducer";
import Users from "./Users";
import {
  followUserAPI,
  getUsersAPI,
  unfollowUserAPI,
} from "../../../DAL/samuraiAPI/samuraiAPI";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setIsFetching(true);
      getUsersAPI(this.props.usersCount, this.props.currentPage)
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
          }
          this.props.setIsFetching(false);
        })
        .catch((e) => {
          console.log(e.message);
          this.props.setIsFetching(false);
        });
    }
  }

  showMoreButtonClickHandler = () => {
    this.props.setIsFetching(true);
    getUsersAPI(this.props.usersCount, this.props.currentPage + 1)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.props.addUsers(data.items);
          this.props.doubleUsersCount();
        }
        this.props.setIsFetching(false);
      })
      .catch((e) => {
        console.log(e.message);
        this.props.setIsFetching(false);
      });
  };
  pagesLinkClickHandler = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    getUsersAPI(this.props.usersCount, pageNumber)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.props.setUsers(data.items);
        }
        this.props.setIsFetching(false);
      })
      .catch((e) => {
        console.log(e.message);
        this.props.setIsFetching(false);
      });
  };

  followButtonClickHandler = (userId) => {
    this.props.toggleDisabledFollowButtons(true, userId);
    followUserAPI(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          this.props.follow(userId);
        }
        this.props.toggleDisabledFollowButtons(false, userId);
      })
      .catch((e) => {
        console.log(e.message);
        this.props.toggleDisabledFollowButtons(false, userId);
      });
  };
  unfollowButtonClickHandler = (userId) => {
    this.props.toggleDisabledFollowButtons(true, userId);
    unfollowUserAPI(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          this.props.unfollow(userId);
        }
        this.props.toggleDisabledFollowButtons(false, userId);
      })
      .catch((e) => {
        console.log(e.message);
        this.props.toggleDisabledFollowButtons(false, userId);
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
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
  setIsFetching,
  toggleDisabledFollowButtons,
};

export default connect(mapStateToProps, actionCreators)(UsersContainer);
