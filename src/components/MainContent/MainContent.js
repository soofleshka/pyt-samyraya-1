import React from "react";
import styles from "./mainContent.module.css"
import {Profile} from "./Profile/Profile";

export const MainContent = ()=>{
    return (
        <main className={styles.main_content}>
            <img src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
            <Profile/>
        </main>
    )
}