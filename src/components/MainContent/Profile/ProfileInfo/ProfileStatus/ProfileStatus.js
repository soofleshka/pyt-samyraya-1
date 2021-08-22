import React, { useEffect, useState } from "react";
import styles from "../ProfileInfo.module.css";

export const ProfileStatus = (props) => {
  const [profileStatus, setProfileStatus] = useState("");
  const [statusEditMode, setstatusEditMode] = useState(false);
  useEffect(() => {
    setProfileStatus(props.profileStatus);
  }, [props.profileStatus]);

  const toggleEditStatus = () => {
    setstatusEditMode(!statusEditMode);
  };

  const profileStatusBlurHandler = () => {
    props.changeProfileStatus(profileStatus);
    toggleEditStatus();
  };
  const profileStatusChangeHandler = (e) => {
    setProfileStatus(e.target.value);
  };
  const editStatusToggleHandler = () => {
    toggleEditStatus();
  };

  return (
    <div>
      {props.isMyProfile ? (
        <div className={styles.status}>
          {!statusEditMode ? (
            <div onDoubleClick={editStatusToggleHandler}>
              {<p>{profileStatus || "Введите статус"}</p>}
            </div>
          ) : (
            <div>
              <p>
                <input
                  autoFocus={true}
                  onBlur={profileStatusBlurHandler}
                  onChange={profileStatusChangeHandler}
                  value={profileStatus}
                />
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>{profileStatus && <p>{profileStatus}</p>}</div>
      )}
    </div>
  );
};
