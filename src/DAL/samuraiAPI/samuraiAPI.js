import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
  },
  withCredentials: true,
});

export const UsersAPI = {
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

export const AuthAPI = {
  authMe: () => {
    return instance.get("/auth/me").then((response) => response.data);
  },
  login: (email, password, rememberMe = false, captcha) => {
    return instance
      .post("/auth/login", { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout: () => {
    return instance.post("/auth/logout").then((response) => response.data);
  },
};

export const ProfileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getProfileStatus: (userId) => {
    return instance.get(`/profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateProfileStatus: (status) => {
    return instance
      .put(`/profile/status`, { status })
      .then((response) => response.data);
  },
};
