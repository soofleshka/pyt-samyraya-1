import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Auth from "./Auth";
import {
  setAuthData,
  setIsFetching,
} from "../../../redux/reducers/auth-reducer";

class AuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userId) {
      this.props.setIsFetching(true);
      axios
        .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.resultCode === 0) {
            const { id, login, email } = response.data.data;
            this.props.setAuthData(id, login, email);
          }
          this.props.setIsFetching(false);
        });
    }
  }

  render() {
    return <Auth {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, { setAuthData, setIsFetching })(
  AuthContainer
);
