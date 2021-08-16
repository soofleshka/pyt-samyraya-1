import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Profile } from "./Profile";
import { setUserProfile } from "../../../redux/reducers/profile-reducer";
import Preloader from "../../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(null);
    let userId = this.props.match.params.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        headers: {
          "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
        },
      })
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    if (!this.props.profile) return <Preloader />;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};
const actionCreators = { setUserProfile };

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
