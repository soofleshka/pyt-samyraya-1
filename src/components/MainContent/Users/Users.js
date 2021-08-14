import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import axios from "axios";

const Users = ({ users, follow, unfollow, setState }) => {
  if (users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?count=4", {
        headers: {
          "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
        },
      })
      .then((response) => {
        if (response.status === 200) setState(response.data.items);
      });
  }
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
