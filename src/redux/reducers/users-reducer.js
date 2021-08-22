import { usersAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING_USERS = "SET_IS_FETCHING_USERS";
const DOUBLE_USERS_COUNT = "DOUBLE_USERS_COUNT";
const TOGGLE_DISABLED_FOLLOW_BUTTON = "TOGGLE_DISABLED_FOLLOW_BUTTON";

const initialState = {
  users: [],
  currentPage: 1,
  totalUsers: 0,
  usersCount: 4,
  disabledFollowButtons: [],
  isFetching: false,
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
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case ADD_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case SET_TOTAL_USERS: {
      return { ...state, totalUsers: action.totalUsers };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_IS_FETCHING_USERS: {
      return { ...state, isFetching: action.isFetching };
    }
    case DOUBLE_USERS_COUNT: {
      return { ...state, usersCount: state.usersCount * 2 };
    }
    case TOGGLE_DISABLED_FOLLOW_BUTTON: {
      return {
        ...state,
        disabledFollowButtons: action.isFetching
          ? [...state.disabledFollowButtons, action.userId]
          : state.disabledFollowButtons.filter((dfb) => dfb !== action.userId),
      };
    }
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
export const addUsers = (users) => {
  return { type: ADD_USERS, users };
};
export const setTotalUsers = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING_USERS, isFetching };
};
export const doubleUsersCount = () => {
  return { type: DOUBLE_USERS_COUNT };
};
export const toggleFollowButton = (isFetching, userId) => {
  return { type: TOGGLE_DISABLED_FOLLOW_BUTTON, isFetching, userId };
};

export const getUsers = (usersCount, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));
  usersAPI
    .getUsers(usersCount <= 100 ? usersCount : usersCount / 2, currentPage)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(setUsers(data.items));
      dispatch(setTotalUsers(data.totalCount));
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => dispatch(setIsFetching(false)));
};
export const showMoreUsers = (usersCount, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));
  usersAPI
    .getUsers(usersCount, currentPage + 1)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(addUsers(data.items));
      dispatch(doubleUsersCount());
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(setIsFetching(false)));
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowButton(true, userId));
  usersAPI
    .followUser(userId)
    .then((data) => {
      if (data.resultCode === 0) dispatch(followSuccess(userId));
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(toggleFollowButton(false, userId)));
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowButton(true, userId));
  usersAPI
    .unfollowUser(userId)
    .then((data) => {
      if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => dispatch(toggleFollowButton(false, userId)));
};

export default usersReducer;
