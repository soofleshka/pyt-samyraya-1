import { authAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const setAuthData = (userId, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  data: { userId, login, email, isAuth },
});

export const authMe = () => (dispatch) => {
  return authAPI
    .authMe()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthData(id, login, email, true));
      }
    })
    .catch((e) => console.log(e.message));
};

export const login = (payload) => (dispatch) => {
  const { email, password, rememberMe, captcha } = payload;
  return authAPI.login(email, password, rememberMe, captcha).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
      return;
    }
    if (data.resultCode === 10) {
      //CAPTCHA
      return;
    }
    return data.messages;
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) dispatch(setAuthData(null, null, null, false));
  });
};

export default authReducer;
