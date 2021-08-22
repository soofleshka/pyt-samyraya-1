import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";

class AuthContainer extends React.Component {
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

export default connect(mapStateToProps )(AuthContainer);
