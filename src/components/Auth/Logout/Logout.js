import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../../redux/reducers/auth-reducer";

class Logout extends React.Component {
  logginOut = () => {
    this.props.logout();
  };

  componentDidMount() {
    this.logginOut();
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default connect(null, { logout })(Logout);
