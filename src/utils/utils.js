export const convertToShortUrl = (url) => {
  return url.match(/^(?:https?:\/\/)?(?:www\.)?(.+)/)[1];
};
export const convertToFullUrl = (url) => {
  return url.startsWith("http") ? url : "http://" + url;
};
