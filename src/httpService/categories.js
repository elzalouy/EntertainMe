import http from "./httpHandler";
import _try from "../utils/try";
const route = process.env.REACT_APP_API + "/api/";
export const getCategories = _try(async () => {
  const response = await http.get(route + "categories");
  if (response.status === 200) {
    return response.data;
  } else {
  }
});

export const getCategories = _try(async () => {
  const response = await http.get(route + "categories");
  if (response.status === 200) {
    return response.data;
  } else {
  }
});
export const getCategory = _try(async (id) => {
  const response = await http.get(route + "categories/" + id);
  if (response.status === 200) {
    return response.data;
  } else {
  }
});

export const getArtist =_try( async (id) => {
  const response = await http.get(route + "artists/" + id);
  if (response.status === 200) {
    return response.data;
  } else {
    console.log(response.response.data);
  }
});
