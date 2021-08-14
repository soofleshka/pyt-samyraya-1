import React from "react";
import styles from "./UserItem.module.css";

const UserItem = ({ user, follow, unfollow }) => {
  return (
    <div className={styles.user}>
      <div className={styles.followBlock}>
        <img
          src="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118822316.jpg"
          alt="profile img"
          className={styles.profile_img}
        />
        <button
          className={styles.follow_button}
          onClick={
            user.isFollowed === true
              ? unfollow.bind(this, user.id)
              : follow.bind(this, user.id)
          }
        >
          {user.isFollowed === true ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={styles.infoBlock}>
        <div>
          <h4>{user.name}</h4>
          <p>{user.status}</p>
        </div>
        <div>
          <p>{user.location.country}</p>
          <p>{user.location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
