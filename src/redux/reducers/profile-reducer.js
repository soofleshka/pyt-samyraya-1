import { profileAPI } from "../../DAL/samuraiAPI/samuraiAPI";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_IS_FETCHING_PROFILE = "SET_IS_FETCHING_PROFILE";
const CHANGE_PROFILE_PHOTO_SUCCESS = "CHANGE_PROFILE_PHOTO_SUCCESS";

let initialState = {
  profile: null,
  profileStatus: "",
  posts: [
    { id: 1, post: "First post" },
    { id: 2, post: "Hi everyone!" },
    { id: 3, post: "Lorem ipsum dolor." },
    {
      id: 4,
      post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis!",
    },
    { id: 5, post: "Lorem ipsum dolor sit amet." },
  ],
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        post: action.newPostText,
      };
      return { ...state, posts: [...state.posts, newPost] };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case UPDATE_PROFILE:
      return { ...state, profile: { ...state.profile, ...action.profile } };
    case SET_PROFILE_STATUS:
      return { ...state, profileStatus: action.profileStatus };
    case SET_IS_FETCHING_PROFILE:
      return { ...state, isFetching: action.isFetching };
    case CHANGE_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  profile,
});
export const setProfileStatus = (profileStatus) => ({
  type: SET_PROFILE_STATUS,
  profileStatus,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING_PROFILE,
  isFetching,
});
export const changeProfilePhotoSuccess = (payload) => ({
  type: CHANGE_PROFILE_PHOTO_SUCCESS,
  payload,
});

const getProfile = (userId) => (dispatch) => {
  dispatch(setIsFetching(true));
  profileAPI
    .getProfile(userId)
    .then((data) => dispatch(setProfile(data)))
    .catch((e) => console.log(e.message))
    .finally(() => dispatch(setIsFetching(false)));
};
const getProfileStatus = (userId) => (dispatch) => {
  profileAPI
    .getProfileStatus(userId)
    .then((data) => dispatch(setProfileStatus(data)));
};
export const getProfileWithStatus = (userId, myUserId) => (dispatch) => {
  dispatch(setProfile(null));
  userId = userId || myUserId;
  if (!userId) return;
  dispatch(getProfile(userId));
  dispatch(getProfileStatus(userId));
};

export const changeProfileStatus = (status) => (dispatch) => {
  profileAPI.changeProfileStatus(status).then((data) => {
    if (data.resultCode === 0) dispatch(setProfileStatus(status));
  });
};

export const changeProfilePhoto = (file) => (dispatch) => {
  const formData = new FormData();
  formData.append("photoFile", file, file.name);
  profileAPI
    .sendProfilePhoto(formData)
    .then((data) => {
      if (data.resultCode === 0)
        dispatch(changeProfilePhotoSuccess(data.data.photos));
      else throw new Error(data.messages.join("\n"));
    })
    .catch((e) => console.log(e.message));
};

export const changeProfileAdditionInfo = (profile) => (dispatch) => {
  return profileAPI
    .updateProfileInfo(profile)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(updateProfile(profile));
      } else {
        return data.messages;
      }
    })
    .catch((e) => console.log(e.message));
};

export default profileReducer;
