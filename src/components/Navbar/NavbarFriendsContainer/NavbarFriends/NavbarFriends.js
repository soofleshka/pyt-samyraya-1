import React from "react";
import { NavbarFriend } from "./NavbarFriend/NavbarFriend";
import styles from "./NavbarFriends.module.css";

export const NavbarFriends = ({ friends }) => {
  return (
    <div>
      <h3 className={styles.friends__title}>Friends</h3>
      <div className={styles.NavbarFriends}>
        {friends.map((f) => (
          <NavbarFriend friend={f} key={f.id} />
        ))}
      </div>
    </div>
  );
};
