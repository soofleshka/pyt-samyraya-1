import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { authMe } from "../redux/reducers/auth-reducer";

const useInitialization = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  const initializeApp = useCallback(() => {
    const authPromise = dispatch(authMe());
    Promise.all([authPromise]).then(() => setIsInitialized(true));
  }, [dispatch]);

  return { isInitialized, initializeApp };
};
export default useInitialization;
