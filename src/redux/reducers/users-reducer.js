const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const DOUBLE_USERS_COUNT = "DOUBLE_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  // users: [
  //   {
  //     id: 1,
  //     photoUrl: "",
  //     isFollowed: true,
  //     name: "Dmitriy",
  //     status: "Yo",
  //     location: { city: "Minsk", country: "Belarus" },
  //   },
  //   {
  //     id: 2,
  //     photoUrl: "",
  //     isFollowed: false,
  //     name: "Sasha",
  //     status: "Yo 1",
  //     location: { city: "Minsk", country: "Belarus" },
  //   },
  //   {
  //     id: 3,
  //     photoUrl: "",
  //     isFollowed: false,
  //     name: "Roma",
  //     status: "Yo 2",
  //     location: { city: "Minsk", country: "Belarus" },
  //   },
  //   {
  //     id: 4,
  //     photoUrl: "",
  //     isFollowed: true,
  //     name: "Tanya",
  //     status: "Yo 3",
  //     location: { city: "Minsk", country: "Belarus" },
  //   },
  // ],
  users: [],
  currentPage: 1,
  usersCount: 4,
  totalUsers: 0,
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
    case SET_USERS:
      return { ...state, users: action.users };
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case DOUBLE_USERS_COUNT:
      return { ...state, usersCount: state.usersCount * 2 };
    case SET_TOTAL_USERS:
      return { ...state, totalUsers: action.totalUsers };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
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
export const doubleUsersCount = () => {
  return { type: DOUBLE_USERS_COUNT };
};
export const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, isFetching };
};

export default usersReducer;
