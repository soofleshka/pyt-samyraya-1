import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";
import { login } from "../../../redux/reducers/auth-reducer";
import {
  composeValidators,
  requiredWithMessage,
} from "../../../utils/validators";
import { CustomFormElement } from "../../../common/CustomFormsElements/CustomFormElement";
import { Redirect } from "react-router-dom";

const LoginForm = ({ login }) => {
  return (
    <Form onSubmit={login}>
      {({ handleSubmit, submitErrors }) => {
        return (
          <form
            onSubmit={async (event) => {
              submitErrors = await handleSubmit(event);
            }}
          >
            {submitErrors && (
              <div style={{ color: "white" }}>
                {submitErrors.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
            )}
            <div>
              <Field
                name="email"
                type="email"
                component={CustomFormElement}
                Element="input"
                placeholder="login"
                validate={composeValidators(
                  requiredWithMessage("Please enter your Email")
                )}
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                component={CustomFormElement}
                Element="input"
                placeholder="password"
                validate={composeValidators(
                  requiredWithMessage("Enter your password")
                )}
              />
            </div>
            <div>
              <label>Remember me</label>
              <Field
                name="rememberMe"
                type="checkbox"
                component="input"
                initialValue={false}
              />
            </div>
            <button>Login</button>
          </form>
        );
      }}
    </Form>
  );
};

class Login extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isAuth) this.props.history.goBack();
  }

  render() {
    if (this.props.isAuth) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <LoginForm login={this.props.login} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login })(Login);
