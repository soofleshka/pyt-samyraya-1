import React from "react";
import styles from "./NavbarFriend.module.css";
import { NavLink } from "react-router-dom";

export const NavbarFriend = ({ friend }) => {
  return (
    <div className={styles.navbarFriend}>
      <NavLink to={"/"}>
        <div className={styles.navbarFriend__image}></div>
        {friend.name}
      </NavLink>
    </div>
  );
};
