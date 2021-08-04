import React from "react";
import styles from "./navbar.module.css"

export const Navbar = ()=>{
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Messages</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Music</a></li>
            </ul>
        </nav>
    )
}