import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import CommonFormElement from "../../common/CommonFormElement/CommonFormElement";
import { login } from "../../redux/reducers/auth-reducer";
import { loginValidationScheme } from "../../common/formsValidations/formsValidations";
import styles from "./Login.module.css";

const Login = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) props.history.goBack();
  }, [isAuth]);

  if (isAuth) return <></>;

  const handleSubmit = (values, { setErrors }) => {
    dispatch(login(values)).then((errors) => {
      if (errors) setErrors({ serverErrors: errors });
    });
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: true,
        }}
        initialErrors={{ serverErrors: null }}
        validationSchema={loginValidationScheme}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div>
                {props.errors.serverErrors &&
                  props.errors.serverErrors.map((error, i) => (
                    <p className="error" key={i}>
                      {error}
                    </p>
                  ))}
              </div>
              <div>
                <CommonFormElement
                  Element="input"
                  name="email"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div>
                <CommonFormElement
                  Element="input"
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div>
                <label>Remember me</label>
                <Field name="rememberMe" type="checkbox" />
              </div>
              <button>Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
