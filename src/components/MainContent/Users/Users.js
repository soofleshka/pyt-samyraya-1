import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";

const Users = ({
  users,
  follow,
  unfollow,
  totalUsers,
  usersCount,
  currentPage,
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
  for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
    pagesLinks.push(i);
  }

  return (
    <div className={styles.users}>
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
      </div>
      {users.map((u) => (
        <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
      ))}
      {currentPage === 1 && usersCount <= 100 && (
        <button
          onClick={showMoreButtonClickHandler}
          className={styles.showMore_Button}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Users;
