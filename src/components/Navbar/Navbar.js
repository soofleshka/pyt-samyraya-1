import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { NavbarFriends } from "./NavbarFriends/NavbarFriends";

export const Navbar = ({ friends }) => {
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
      <NavbarFriends friends={friends} />
    </nav>
  );
};
