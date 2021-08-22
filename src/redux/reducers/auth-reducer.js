import { AuthAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_IS_FETCHING_AUTH = "SET_IS_FETCHING_AUTH";

let initialState = {
  userid: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_IS_FETCHING_AUTH:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setAuthData = (userId, login, email, isAuth = true) => ({
  type: SET_AUTH_DATA,
  payload: { userId, login, email, isAuth },
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING_AUTH,
  isFetching,
});

export const authMe = () => (dispatch) => {
  dispatch(setIsFetching(true));
  return AuthAPI.authMe()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthData(id, login, email));
      }
    })
    .catch((e) => console.log(e.message))
    .finally(() => dispatch(setIsFetching(false)));
};

export const login = (payload) => async (dispatch) => {
  const { email, password, rememberMe, captcha } = payload;
  let errors = null;
  dispatch(setIsFetching(true));
  await AuthAPI.login(email, password, rememberMe, captcha)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(authMe());
        return;
      }
      if (data.resultCode === 10) {
        console.log("CAPTCHA)");
        //dispatch(CAPTCHA)
        return;
      }
      errors = data.messages;
      // throw new Error(data.messages.join("\n"));
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(setIsFetching(false)));
  return errors;
};

export const logout = () => (dispatch) => {
  dispatch(setIsFetching(true));
  AuthAPI.logout()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    })
    .catch((e) => console.log(e.message))
    .finally(() => dispatch(setIsFetching(false)));
};

export default authReducer;
