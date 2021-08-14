import React from "react";
import styles from "./UserItem.module.css";
import profile_img from "../../../../assets/images/default_profile_img.jpg";

const UserItem = ({ user, follow, unfollow }) => {
  return (
    <div className={styles.user}>
      <div className={styles.followBlock}>
        <img
          src={user.photos.small ? user.photos.small : profile_img}
          alt="profile img"
          className={styles.profile_img}
        />
        <button
          className={styles.follow_button}
          onClick={
            user.followed === true
              ? unfollow.bind(this, user.id)
              : follow.bind(this, user.id)
          }
        >
          {user.followed === true ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={styles.infoBlock}>
        <div>
          <h4>{user.name}</h4>
          <p>{user.status}</p>
        </div>
        <div>
          <p>user.location.country</p>
          <p>user.location.city</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
