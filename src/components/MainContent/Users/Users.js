import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";

const Users = ({ users, follow, unfollow }) => {
  return (
    <div className={styles.users}>
      {users.map((u) => (
        <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
      ))}
      <button className={styles.showMore_Button}>Show more</button>
    </div>
  );
};

export default Users;
