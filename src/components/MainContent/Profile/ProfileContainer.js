import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  getProfile,
  setUserProfile,
} from "../../../redux/reducers/profile-reducer";
import Preloader from "../../Preloader/Preloader";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.getProfile();
    }
  }

  getProfile = () => {
    this.props.setUserProfile(null);
    let userId =
      this.props.match.params.userId || this.props.myUserId || undefined;
    if (!userId) return;
    this.props.getProfile(userId);
  };

  render() {
    if (this.props.isFetching) return <Preloader />;
    if (!this.props.profile) return <p>Профиль не найден</p>;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myUserId: state.auth.userId,
  };
};
const actionCreators = { setUserProfile, getProfile };

export default compose(
  connect(mapStateToProps, actionCreators),
  withAuthRedirect
)(ProfileContainer);
