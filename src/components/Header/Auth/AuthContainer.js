import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import {
  setAuthData,
  setIsFetching,
} from "../../../redux/reducers/auth-reducer";
import { authAPI } from "../../../DAL/samuraiAPI/samuraiAPI";

class AuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userId) {
      this.props.setIsFetching(true);
      authAPI().then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
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
