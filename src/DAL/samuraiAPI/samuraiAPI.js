import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
  },
  withCredentials: true,
});

export const getUsersAPI = (usersCount, currentPage) => {
  return instance
    .get(`/users?count=${usersCount}&page=${currentPage}`)
    .then((response) => response.data);
};
export const followUserAPI = (userId) => {
  return instance
    .post(`/follow/${userId}`, {})
    .then((response) => response.data);
};
export const unfollowUserAPI = (userId) => {
  return instance.delete(`/follow/${userId}`).then((response) => response.data);
};

export const authMeAPI = () => {
  return instance.get("/auth/me").then((response) => response.data);
};

export const getProfileAPI = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => response.data);
};
