import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPostsContainer/MyPostsContainer";
import styles from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};
