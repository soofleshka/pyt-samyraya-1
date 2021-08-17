import React from "react";
import styles from "./ProfileInfo.module.css";
import profile_img from "../../../../assets/images/profile_img_gag.jpeg";

export const ProfileInfo = ({ profile, myUserId }) => {
  return (
    <div className={styles.profileInfo}>
      <img src={profile_img} alt="profile img" />
      {profile.userId === myUserId && <h3>My profile</h3>}
      <div>
        <img src={profile.photos.small} alt="users avatar" /> {profile.fullName}
        <p>{profile.aboutMe}</p>
      </div>
      {profile.lookingForAJob && (
        <div>
          <p>Looking for a Job</p>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      )}
    </div>
  );
};
