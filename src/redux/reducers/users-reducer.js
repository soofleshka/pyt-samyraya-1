const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const DOUBLE_USERS_COUNT = "DOUBLE_USERS_COUNT";

const initialState = {
  users: [],
  currentPage: 1,
  totalUsers: 0,
  usersCount: 2,
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
    case DOUBLE_USERS_COUNT: {
      return { ...state, usersCount: state.usersCount * 2 };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export const addUsersAC = (users) => {
  return { type: ADD_USERS, users };
};
export const setTotalUsersAC = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};
export const setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const doubleUsersCountAC = () => {
  return { type: DOUBLE_USERS_COUNT };
};

export default usersReducer;
