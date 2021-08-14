import React from "react";
import { NavbarUrls } from "./NavbarUrls/NavbarUrls";
import { NavbarFriendsContainer } from "./NavbarFriendsContainer/NavbarFriendsContainer";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarUrls />
      <NavbarFriendsContainer />
    </div>
  );
};
