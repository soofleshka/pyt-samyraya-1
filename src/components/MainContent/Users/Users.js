import React from "react";
import UserItem from "./UserItem/UserItem";
import Preloader from "../../Preloader/Preloader";
import styles from "./Users.module.css";

const Users = ({
  users,
  totalUsers,
  usersCount,
  currentPage,
  isFetching,
  pagesLinks,
  disabledFollowButtons,
  followButtonClickHandler,
  unfollowButtonClickHandler,
  showMoreButtonClickHandler,
  pagesLinkClickHandler,
}) => {
  return (
    <div className={styles.users}>
      {isFetching && <Preloader />}
      <h4>Total Users: {totalUsers}</h4>
      <p>Pages:</p>
      {pagesLinks.map((p, index) => {
        return (
          <span
            key={index}
            onClick={pagesLinkClickHandler.bind(this, p)}
            className={`${styles.pageLink} ${
              currentPage === p ? styles.activePage : undefined
            }`}
          >
            {p}
          </span>
        );
      })}
      {users.map((u) => (
        <UserItem
          key={u.id}
          user={u}
          disabledFollowButtons={disabledFollowButtons}
          followButtonClickHandler={followButtonClickHandler}
          unfollowButtonClickHandler={unfollowButtonClickHandler}
        />
      ))}
      {currentPage === 1 && usersCount <= 100 && (
        <button
          onClick={showMoreButtonClickHandler}
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
