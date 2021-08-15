import React from "react";
import styles from "./UserItem.module.css";
import profile_default_img from "../../../../assets/images/default_profile_img.jpg";

const UserItem = ({ user, follow, unfollow, index }) => {
  return (
    <div className={styles.user}>
      {index}.
      <div className={styles.followBlock}>
        <img
          src={user.photos.small ? user.photos.small : profile_default_img}
          alt="profile img"
          className={styles.profile_img}
        />
        {user.followed === true ? (
          <button
            className={styles.follow_button}
            onClick={unfollow.bind(this, user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={styles.follow_button}
            onClick={follow.bind(this, user.id)}
          >
            Follow
          </button>
        )}
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
