import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  setIsFetching,
  setUserProfile,
} from "../../../redux/reducers/profile-reducer";
import { getProfileAPI } from "../../../DAL/samuraiAPI/samuraiAPI";
import Preloader from "../../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(null);
    let userId =
      this.props.match.params.userId || this.props.myUserId || undefined;
    if (!userId) return;

    this.props.setIsFetching(true);
    getProfileAPI(userId).then((data) => {
      this.props.setUserProfile(data);
      this.props.setIsFetching(false);
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.myUserId !== this.props.myUserId) {
      this.props.setUserProfile(null);
      let userId = this.props.match.params.userId || this.props.myUserId || 2;
      getProfileAPI(userId).then((data) => {
        this.props.setUserProfile(data);
      });
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
const actionCreators = { setUserProfile, setIsFetching };

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
