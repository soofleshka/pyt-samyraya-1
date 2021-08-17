import React from "react";
import styles from "./UserItem.module.css";
import profile_img from "../../../../assets/images/default_profile_img.jpg";
import { NavLink } from "react-router-dom";

const UserItem = ({
  user,
  followButtonClickHandler,
  unfollowButtonClickHandler,
  disabledFollowButtons,
}) => {
  return (
    <div className={styles.user}>
      <div className={styles.followBlock}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small ? user.photos.small : profile_img}
            alt="profile img"
            className={styles.profile_img}
          />
        </NavLink>
        <button
          className={styles.follow_button}
          onClick={
            user.followed === true
              ? unfollowButtonClickHandler.bind(this, user.id)
              : followButtonClickHandler.bind(this, user.id)
          }
          disabled={disabledFollowButtons.some((id) => id === user.id)}
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
