import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
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
    let { users, follow, unfollow, totalUsers, usersCount, currentPage } =
      this.props;
    let pagesLinksCount = Math.ceil(totalUsers / usersCount);
    let pagesLinks = [];
    for (let i = 1; i <= pagesLinksCount; i++) {
      pagesLinks.push(i);
    }
    return (
      <div className={styles.users}>
        <div>
          <h4>Totalusers: {totalUsers}</h4>
          <p>Pages:</p>
          {pagesLinks.map((p, index) => {
            return (
              <span
                key={index}
                onClick={this.pagesLinkClickHandler.bind(this, p)}
                className={currentPage === p ? styles.activePage : undefined}
              >
                {p}
              </span>
            );
          })}
        </div>
        {users.map((u, index) => (
          <UserItem
            key={u.id}
            user={u}
            follow={follow}
            unfollow={unfollow}
            index={index + 1}
          />
        ))}
        {this.props.currentPage === 1 && (
          <button
            onClick={this.showMoreButtonClickHandler}
            className={styles.showMore_Button}
          >
            Show more
          </button>
        )}
      </div>
    );
  }
}

export default Users;
