import React, { useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import axios from "axios";

const Users = ({ users, follow, unfollow, setState }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (users.length === 0) {
      setLoading(true);
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users?count=4", {
          headers: {
            "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
          },
        })
        .then((response) => {
          let data = response.data;
          console.log(data);
          setState(data.items);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className={styles.users}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((u) => (
          <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
        ))
      )}
      <button className={styles.showMore_Button} disabled={loading}>
        Show more
      </button>
    </div>
  );
};

export default Users;
