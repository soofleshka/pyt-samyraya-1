import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
  },
  withCredentials: true,
});

export const authAPI = {
  authMe: () => {
    return instance.get("/auth/me").then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
  getProfileStatus: (userId) => {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },
  changeProfileStatus: (status) => {
    return instance
      .put(`/profile/status`, { status })
      .then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers: (usersCount, currentPage) => {
    return instance
      .get(`/users?count=${usersCount}&page=${currentPage}`)
      .then((response) => response.data);
  },
  followUser: (userId) => {
    return instance
      .post(`/follow/${userId}`, {})
      .then((response) => response.data);
  },
  unfollowUser: (userId) => {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};
