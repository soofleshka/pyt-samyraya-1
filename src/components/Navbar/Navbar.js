import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarFriendsContainer } from "./NavbarFriendsContainer/NavbarFriendsContainer";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={styles.active}>
            Music
          </NavLink>
        </li>
      </ul>
      <h3 className={styles.friends__title}>Friends</h3>
      <NavbarFriendsContainer />
    </nav>
  );
};
