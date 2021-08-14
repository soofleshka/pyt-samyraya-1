const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";

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
    case SET_STATE: {
      return { ...state, users: [...state.users, ...action.users] };
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
export const setStateAC = (users) => {
  return { type: SET_STATE, users };
};

export default usersReducer;
