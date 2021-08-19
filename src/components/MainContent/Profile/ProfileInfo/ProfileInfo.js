import React from "react";
import { ProfileStatus } from "./ProfileStatus";
import styles from "./ProfileInfo.module.css";
import profile_img from "../../../../assets/images/profile_img_gag.jpeg";
import profile_default_avatar from "../../../../assets/images/default_profile_img.jpg";

export const ProfileInfo = (props) => {
  const { profile, profileStatus, isMyProfile } = props;

  return (
    <div className={styles.profileInfo}>
      <img
        src={profile_img}
        alt="profile img"
        className={styles.profileImage}
      />
      {isMyProfile() && <h3>My profile</h3>}
      <img
        src={profile.photos.small || profile_default_avatar}
        alt="users avatar"
        className={styles.profileAvatar}
      />{" "}
      {profile.fullName}
      <ProfileStatus
        updateProfileStatus={props.updateProfileStatus}
        profileStatus={profileStatus}
        isMyProfile={isMyProfile}
      />
      <p>{profile.aboutMe}</p>
      {profile.lookingForAJob && (
        <div>
          <p>Looking for a Job</p>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      )}
    </div>
  );
};
