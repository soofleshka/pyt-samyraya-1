import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import CommonFormElement from "../../common/CommonFormElement/CommonFormElement";
import { login, reloadCaptcha } from "../../redux/reducers/auth-reducer";
import { loginValidationScheme } from "../../common/formsValidations/formsValidations";
import styles from "./Login.module.css";

const Login = (props) => {
  const [captchaUrl, setCaptchaUrl] = useState(null);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) props.history.goBack();
  }, [isAuth, props.history]);

  const reloadButtonClickHandler = (setFieldValue, e) => {
    dispatch(reloadCaptcha()).then((url) => {
      setCaptchaUrl(url);
      setFieldValue("captcha", "");
    });
    e.preventDefault();
  };

  const handleSubmit = (
    values,
    { setStatus, setFieldValue, setSubmitting }
  ) => {
    dispatch(login(values)).then((data) => {
      setSubmitting(false);
      if (!data) return;
      if (data.resultCode === 10) setCaptchaUrl(data.captchaUrl);
      if (data.errors) {
        setFieldValue("captcha", "");
        setStatus({ serverErrors: data.errors });
      }
    });
  };

  if (isAuth) return <></>;
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: true,
          captcha: "",
        }}
        validationSchema={loginValidationScheme}
        onSubmit={handleSubmit}
      >
        {({ dirty, isSubmitting, isValid, status, setFieldValue }) => {
          return (
            <Form>
              <div>
                {status &&
                  status.serverErrors.map((error, i) => (
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
              {captchaUrl && (
                <div>
                  <img src={captchaUrl} alt="captcha" />
                  <a
                    href="/"
                    onClick={reloadButtonClickHandler.bind(this, setFieldValue)}
                  >
                    Reload
                  </a>
                  <div>
                    <Field name="captcha" />
                  </div>
                </div>
              )}
              <button
                disabled={!(isValid && dirty) || isSubmitting}
                type="submit"
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
