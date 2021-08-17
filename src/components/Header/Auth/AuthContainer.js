import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthData } from "../../../redux/reducers/auth-reducer";
import { Auth } from "./Auth";
import { authAPI } from "../../../DAL/samuraiAPI/samuraiAPI";

const AuthContainer = (props) => {
  useEffect(() => {
    if (!props.isAuth) {
      authAPI().then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          props.setAuthData(id, login, email);
        }
      });
    }
  }, []);
  return <Auth {...props} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, { setAuthData })(AuthContainer);
