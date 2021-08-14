import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPostsContainer/MyPostsContainer";
import styles from "./Profile.module.css";
import profile_gag from "../../../assets/images/profile_img_gag.jpeg";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={profile_gag} alt="profile image" />
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
