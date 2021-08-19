import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const withAuthRedirect = (Component) => {
  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect push to="/login" />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
