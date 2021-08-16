import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import preloader from "../../../assets/images/preloader.gif";

const Users = ({
  users,
  follow,
  unfollow,
  totalUsers,
  usersCount,
  currentPage,
  isFetching,
  showMoreButtonClickHandler,
  pagesLinkClickHandler,
}) => {
  const PAGES_LENGTH = 11;
  let totalPagesCount = Math.ceil(totalUsers / usersCount);
  const pagesCount =
    totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
  const half = Math.floor(pagesCount / 2);
  let startPage = currentPage - half;
  if (startPage < 1) startPage = 1;
  if (startPage + pagesCount > totalPagesCount)
    startPage = totalPagesCount - pagesCount;
  const pagesLinks = [];
  if (users.length != 0) {
    for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
      pagesLinks.push(i);
    }
  }

  return (
    <div className={styles.users}>
      {isFetching && (
        <p>
          Loading <img src={preloader} alt="preloader gif" />
        </p>
      )}
      <div>
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
      </div>
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
