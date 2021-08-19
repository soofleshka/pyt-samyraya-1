import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.history);
    if (this.props.isAuth) this.props.history.goBack();
  }

  render() {
    return <h1>Login</h1>;
  }
}

export default connect((state) => ({ isAuth: state.auth.isAuth }))(Login);
