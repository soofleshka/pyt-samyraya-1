import React from "react";
import styles from "./myPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = ()=>{
    console.log(styles,1);
    return (
        <div>
            My posts:
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}