import { useEffect } from "react";
import { useSelector } from "react-redux";

const Login = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) props.history.goBack();
  }, [isAuth]);
  return <h1>login</h1>;
};

export default Login;
