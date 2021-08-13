import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPostsContainer/MyPostsContainer";
import styles from "./Profile.module.css";

export const Profile = ({ store }) => {
  return (
    <div className={styles.profile}>
      <img
        src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
