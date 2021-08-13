import React from "react";
import styles from "./NavbarFriends.module.css";
import { NavbarFriend } from "./NavbarFriend/NavbarFriend";

export const NavbarFriends = ({ friends }) => {
  return (
    <div className={styles.NavbarFriends}>
      {friends.map((f) => (
        <NavbarFriend friend={f} key={f.id} />
      ))}
    </div>
  );
};
