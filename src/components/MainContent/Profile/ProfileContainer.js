import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  getProfile,
  setUserProfile,
} from "../../../redux/reducers/profile-reducer";
import Preloader from "../../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(null);
    let userId =
      this.props.match.params.userId || this.props.myUserId || undefined;
    if (!userId) return;

    this.props.getProfile(userId);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.myUserId !== this.props.myUserId) {
      this.props.setUserProfile(null);
      let userId = this.props.match.params.userId || this.props.myUserId || 2;

      this.props.getProfile(userId);
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.profile)
      return <h3>Вы не авторизаваны</h3>;
    if (this.props.isFetching || !this.props.profile) return <Preloader />;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
const actionCreators = { setUserProfile, getProfile };

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
