import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Profile } from "./Profile";
import {
  setIsFetching,
  setUserProfile,
} from "../../../redux/reducers/profile-reducer";
import Preloader from "../../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(null);
    let userId =
      this.props.match.params.userId || this.props.myUserId || undefined;
    if (!userId) return;

    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
        this.props.setIsFetching(false);
      });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.myUserId !== this.props.myUserId) {
      this.props.setUserProfile(null);
      let userId = this.props.match.params.userId || this.props.myUserId || 2;
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          this.props.setUserProfile(response.data);
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
