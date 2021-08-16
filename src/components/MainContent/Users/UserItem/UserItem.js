import React from "react";
import profile_default_img from "../../../../assets/images/default_profile_img.jpg";
import styles from "./UserItem.module.css";
import { NavLink } from "react-router-dom";

const UserItem = ({ user, follow, unfollow }) => {
  return (
    <div className={styles.user}>
      <div className={styles.followBlock}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small ? user.photos.small : profile_default_img}
            alt="profile img"
            className={styles.profile_img}
          />
        </NavLink>
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
