import React from "react";
import styles from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component {
  state = { profileStatus: this.props.profileStatus, statusEditMode: false };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.profileStatus !== prevProps.profileStatus) {
      this.setState({ profileStatus: this.props.profileStatus });
    }
  }

  profileStatusChangeHandler = (e) => {
    this.setState({ profileStatus: e.target.value });
  };
  profileStatusOnBlurHandler = (e) => {
    this.updateProfileStatus(e);
  };
  profileStatusKeyUpHandler = (e) => {
    e.keyCode === 13 && this.updateProfileStatus(e);
  };

  updateProfileStatus = (e) => {
    this.props.updateProfileStatus(e.target.value);
    this.toggleStatusEditMode();
  };
  toggleStatusEditMode = () => {
    this.setState((state) => ({ statusEditMode: !state.statusEditMode }));
  };

  render() {
    const { isMyProfile, profileStatus } = this.props;
    const { statusEditMode } = this.state;

    return (
      <div>
        {isMyProfile() ? (
          <div
            onDoubleClick={this.toggleStatusEditMode}
            className={styles.status}
          >
            {!statusEditMode ? (
              <div>{<p>{profileStatus || "Введите статус"}</p>}</div>
            ) : (
              <div>
                <p>
                  <input
                    type="text"
                    autoFocus={true}
                    onChange={this.profileStatusChangeHandler}
                    onBlur={this.profileStatusOnBlurHandler}
                    onKeyUp={this.profileStatusKeyUpHandler}
                    value={this.state.profileStatus}
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
  }
}
