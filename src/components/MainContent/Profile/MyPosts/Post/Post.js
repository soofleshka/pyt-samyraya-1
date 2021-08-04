import React from "react";
import styles from "./post.module.css"

export const Post = ()=>{
    console.log(styles,1);
    return (
        <div className={styles.post}> Post 1</div>
    )
}