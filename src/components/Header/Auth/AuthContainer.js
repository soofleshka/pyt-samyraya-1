import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { authMe } from "../../../redux/reducers/auth-reducer";

class AuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userId) {
      this.props.authMe();
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

export default connect(mapStateToProps, { authMe })(AuthContainer);
