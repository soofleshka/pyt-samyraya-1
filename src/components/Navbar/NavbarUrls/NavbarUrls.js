import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarUrls.module.css";

export const NavbarUrls = () => {
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
        <br />
        <li>
          <NavLink to="/users" activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
