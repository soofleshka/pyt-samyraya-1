import { UsersAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS_TO_STATE = "ADD_USERS_TO_STATE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const DOUBLE_USERS_COUNT = "DOUBLE_USERS_COUNT";
const SET_IS_FETCHING_USERS = "SET_IS_FETCHING_USERS";
const TOGGLE_DISABLED_FOLLOW_BUTTON = "TOGGLE_DISABLED_FOLLOW_BUTTON";

const initialState = {
  users: [],
  currentPage: 1,
  usersCount: 4,
  totalUsers: 0,
  isFetching: false,
  disabledFollowButtons: [],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };
    }
    case SET_USERS:
      return { ...state, users: action.users };
    case ADD_USERS_TO_STATE:
      return { ...state, users: [...state.users, ...action.users] };
    case DOUBLE_USERS_COUNT:
      return { ...state, usersCount: state.usersCount * 2 };
    case SET_TOTAL_USERS:
      return { ...state, totalUsers: action.totalUsers };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_IS_FETCHING_USERS:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_DISABLED_FOLLOW_BUTTON:
      return {
        ...state,
        disabledFollowButtons: action.isFetching
          ? [...state.disabledFollowButtons, action.userId]
          : [
              ...state.disabledFollowButtons.filter(
                (id) => id !== action.userId
              ),
            ],
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const addUsersToState = (users) => {
  return { type: ADD_USERS_TO_STATE, users };
};
export const setTotalUsers = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const doubleUsersCount = () => {
  return { type: DOUBLE_USERS_COUNT };
};
export const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING_USERS, isFetching };
};
export const toggleDisabledFollowButtons = (isFetching, userId) => {
  return { type: TOGGLE_DISABLED_FOLLOW_BUTTON, isFetching, userId };
};

export const getUsers = (usersCount, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));
  UsersAPI.getUsers(usersCount, currentPage)
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(setTotalUsers(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(data.items));
      }
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(setIsFetching(false)));
};
export const addUsers = (usersCount, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));
  UsersAPI.getUsers(usersCount, currentPage + 1)
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(doubleUsersCount());
        dispatch(addUsersToState(data.items));
      }
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(setIsFetching(false)));
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleDisabledFollowButtons(true, userId));
  UsersAPI.followUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(toggleDisabledFollowButtons(false, userId)));
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleDisabledFollowButtons(true, userId));
  UsersAPI.unfollowUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(toggleDisabledFollowButtons(false, userId)));
};

export default usersReducer;
