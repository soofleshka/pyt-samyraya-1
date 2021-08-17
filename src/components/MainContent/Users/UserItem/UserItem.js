import React from "react";
import profile_default_img from "../../../../assets/images/default_profile_img.jpg";
import styles from "./UserItem.module.css";
import { NavLink } from "react-router-dom";

const UserItem = ({
  user,
  disabledFollowButtons,
  followButtonClickHandler,
  unfollowButtonClickHandler,
}) => {
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
            onClick={unfollowButtonClickHandler.bind(this, user.id)}
            disabled={disabledFollowButtons.some((id) => id === user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={styles.follow_button}
            onClick={followButtonClickHandler.bind(this, user.id)}
            disabled={disabledFollowButtons.some((id) => id === user.id)}
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
