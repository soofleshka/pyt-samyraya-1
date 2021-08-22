import React from "react";
import UserItem from "./UserItem/UserItem";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./Users.module.css";

const Users = ({
  users,
  currentPage,
  totalUsers,
  usersCount,
  followButtonClickHandler,
  unfollowButtonClickHandler,
  disabledFollowButtons,
  isFetching,
  pageLinks,
  showMoreUsersButtonHandler,
  pageLinkClickHandler,
}) => {
  return (
    <div className={styles.users}>
      {isFetching && <Preloader />}
      <h4>TotalUsers: {totalUsers}</h4>
      <p>links:</p>
      {pageLinks.map((p, index) => {
        return (
          <span
            key={index}
            className={currentPage === p ? styles.activePage : undefined}
            onClick={pageLinkClickHandler.bind(this, p)}
          >
            {p}
          </span>
        );
      })}
      {users.map((u) => (
        <UserItem
          key={u.id}
          user={u}
          followButtonClickHandler={followButtonClickHandler}
          unfollowButtonClickHandler={unfollowButtonClickHandler}
          disabledFollowButtons={disabledFollowButtons}
        />
      ))}
      {currentPage === 1 && usersCount <= 100 && (
        <button
          onClick={showMoreUsersButtonHandler}
          className={styles.showMore_Button}
          disabled={isFetching}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Users;
