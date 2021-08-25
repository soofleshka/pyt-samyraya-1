import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import {
  changeProfileAdditionInfo,
  changeProfilePhoto,
  changeProfileStatus,
  getProfileWithStatus,
} from "../../../redux/reducers/profile-reducer";
import { Profile } from "./Profile";
import Preloader from "../../common/Preloader/Preloader";

const ProfileContainer = (props) => {
  const { profile, profileStatus, isFetching, myUserId, isAuth } = props;
  useEffect(() => {
    console.log("profile effect");
    props.getProfileWithStatus(props.match.params.userId, myUserId);
  }, [props.match.params.userId, myUserId]);

  if (isFetching) return <Preloader />;
  if (!profile) return <h3>Профиль не найден</h3>;

  const isMyProfile = profile.userId === myUserId;
  return (
    <Profile
      profile={profile}
      isAuth={isAuth}
      myUserId={myUserId}
      profileStatus={profileStatus}
      isMyProfile={isMyProfile}
      changeProfileStatus={props.changeProfileStatus}
      changeProfilePhoto={props.changeProfilePhoto}
      changeProfileAdditionInfo={props.changeProfileAdditionInfo}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    isFetching: state.profilePage.isFetching,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getProfileWithStatus,
    changeProfileStatus,
    changeProfilePhoto,
    changeProfileAdditionInfo,
  })
)(ProfileContainer);
