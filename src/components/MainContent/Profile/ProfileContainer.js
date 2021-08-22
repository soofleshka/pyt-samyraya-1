import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  getProfileWithStatus,
  updateProfileStatus,
} from "../../../redux/reducers/profile-reducer";
import Preloader from "../../Preloader/Preloader";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log("mount", window.store.getState().profilePage.isFetching);
    this.props.getProfileWithStatus(
      this.props.match.params.userId,
      this.props.myUserId
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getProfileWithStatus(
        this.props.match.params.userId,
        this.props.myUserId
      );
    }
  }

  isMyProfile = () => this.props.profile.userId === this.props.myUserId;

  render() {
    if (this.props.isFetching) return <Preloader />;
    if (!this.props.profile) return <p>Профиль не найден</p>;
    return <Profile {...this.props} isMyProfile={this.isMyProfile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    isFetching: state.profilePage.isFetching,
    myUserId: state.auth.userId,
  };
};
const actionCreators = {
  getProfileWithStatus,
  updateProfileStatus,
};

export default compose(
  connect(mapStateToProps, actionCreators),
  withAuthRedirect
)(ProfileContainer);
