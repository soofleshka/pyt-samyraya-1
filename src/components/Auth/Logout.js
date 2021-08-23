import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  return <Redirect to="/" />;
};

export default Logout;
