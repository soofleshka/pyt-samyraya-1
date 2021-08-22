import { authMe } from "./auth-reducer";

const SET_TO_INITIALIZED = "SET_TO_INITIALIZED";

let initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export const setToInitialized = () => ({
  type: SET_TO_INITIALIZED,
});

export const initializeApp = () => (dispatch) => {
  const authPromise = dispatch(authMe());
  Promise.all([authPromise]).then(() => dispatch(setToInitialized()));
};

export default appReducer;
