import React from "react";
import UserItem from "./UserItem/UserItem";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./Users.module.css";

const Users = ({
  users,
  currentPage,
  totalUsers,
  follow,
  unfollow,
  loading,
  pageLinks,
  showMoreUsersButtonHandler,
  pageLinkClickHandler,
}) => {
  return (
    <div className={styles.users}>
      <Preloader loading={loading} />
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
        <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
      ))}
      {currentPage === 1 && (
        <button
          onClick={showMoreUsersButtonHandler}
          className={styles.showMore_Button}
          disabled={loading}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Users;
