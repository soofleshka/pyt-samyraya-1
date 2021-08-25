import React from "react";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import profile_gag from "../../../../assets/images/profile_img_gag.jpeg";
import default_profile_avatar from "../../../../assets/images/default_profile_img.jpg";
import styles from "./ProfileInfo.module.css";
import { ProfileAdditionInfo } from "./ProfileAdditionInfo/ProfileAdditionInfo";

export const ProfileInfo = ({
  profile,
  profileStatus,
  isMyProfile,
  changeProfileStatus,
  changeProfilePhoto,
  changeProfileAdditionInfo,
}) => {
  const chooseFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      changeProfilePhoto(file);
    }
  };
  return (
    <>
      <img src={profile_gag} alt="profile gag" className={styles.profileGag} />
      <div className={styles.profileInfo}>
        <div className={styles.profileMainPart}>
          <img
            src={profile.photos.large || default_profile_avatar}
            alt="users avatar"
            className={styles.profileAvatar}
          />{" "}
          {isMyProfile && (
            <label className={styles.customFileUpload}>
              <input
                type="file"
                onChange={chooseFileHandler}
                accept=".png, .jpg, .jpeg"
              />
              Изменить фото
            </label>
          )}
          <span className={styles.profileFullname}>{profile.fullName}</span>
          <ProfileStatus
            profileStatus={profileStatus}
            isMyProfile={isMyProfile}
            changeProfileStatus={changeProfileStatus}
          />
        </div>
        <div>
          <ProfileAdditionInfo
            isMyProfile={isMyProfile}
            profile={profile}
            changeProfileAdditionInfo={changeProfileAdditionInfo}
          />
        </div>
      </div>
    </>
  );
};
