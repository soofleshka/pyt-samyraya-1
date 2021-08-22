import React from "react";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import styles from "./ProfileInfo.module.css";
import profile_gag from "../../../../assets/images/profile_img_gag.jpeg";

export const ProfileInfo = ({
  profile,
  profileStatus,
  isMyProfile,
  changeProfileStatus,
}) => {
  return (
    <div className={styles.profileInfo}>
      <img src={profile_gag} alt="profile gag" />
      {isMyProfile && <h3>My profile</h3>}
      <img
        src={profile.photos.small}
        alt="users avatar"
        className={styles.profileAvatar}
      />{" "}
      {profile.fullName}
      <ProfileStatus
        profileStatus={profileStatus}
        isMyProfile={isMyProfile}
        changeProfileStatus={changeProfileStatus}
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
