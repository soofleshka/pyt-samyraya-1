import React from "react";
import styles from "./profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = ()=>{
    return (
        <div className={styles.profile}>
            <MyPosts/>
        </div>
    )
}