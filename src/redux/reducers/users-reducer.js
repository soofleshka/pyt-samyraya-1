const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: "",
      isFollowed: true,
      name: "Dmitriy",
      status: "Yo",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: "",
      isFollowed: false,
      name: "Sasha",
      status: "Yo 1",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 3,
      photoUrl: "",
      isFollowed: false,
      name: "Roma",
      status: "Yo 2",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 4,
      photoUrl: "",
      isFollowed: true,
      name: "Tanya",
      status: "Yo 3",
      location: { city: "Minsk", country: "Belarus" },
    },
  ],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, isFollowed: true };
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, isFollowed: false } : u
        ),
      };
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

export default usersReducer;
