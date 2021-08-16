import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import Preloader from "../../Preloader/Preloader";

const Users = ({
  users,
  follow,
  unfollow,
  totalUsers,
  usersCount,
  currentPage,
  isFetching,
  pagesLinks,
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
            className={currentPage === p ? styles.activePage : undefined}
          >
            {p}
          </span>
        );
      })}
      {users.map((u) => (
        <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
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
