import { authMeAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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
        ...action.authData,
        isAuth: true,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setAuthData = (userId, login, email) => ({
  type: SET_AUTH_DATA,
  authData: { userId, login, email },
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const authMe = () => (dispatch) => {
  dispatch(setIsFetching(true));
  authMeAPI()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthData(id, login, email));
      }
    })
    .catch((e) => console.log(e.message))
    .finally(() => dispatch(setIsFetching(false)));
};

export default authReducer;
