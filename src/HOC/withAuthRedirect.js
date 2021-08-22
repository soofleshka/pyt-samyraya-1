import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const withAuthRedirect = (Component) => {
  return (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (!isAuth) return <Redirect push to={"/login"} />;
    return <Component {...props} />;
  };
};
