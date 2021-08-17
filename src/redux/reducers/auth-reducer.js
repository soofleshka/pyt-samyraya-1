const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return { ...state, ...action.data, isAuth: true };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setAuthData = (userId, login, email) => ({
  type: SET_AUTH_DATA,
  data: { userId, login, email },
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export default authReducer;
