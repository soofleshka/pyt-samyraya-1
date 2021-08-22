import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Auth } from "./Auth";
import { auth } from "../../../redux/reducers/auth-reducer";

const AuthContainer = (props) => {
  useEffect(() => {
    props.auth();
  }, []);
  return <Auth {...props} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { auth })(AuthContainer);
