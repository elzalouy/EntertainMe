import http from "./httpHandler";
import _try from "../utils/try";
import handleServerError from "./handleServerError";
const route = process.env.REACT_APP_API + "/api/";

export const getFeaturedArtists = _try(async () => {
  const response = await http.get(route + "featured");
  if (response.status === 200) {
    return response.data.artists;
  } else {
  }
});
export const getArtists = _try(async (artists_ids) => {
  const response = await http.post(route + "artists/ids", { artists_ids });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data.artists, error: null };
});

export const search = _try(async (query) => {
  const response = await http.get(route + "search?query=" + query);
  if (response.status === 200) {
    return response.data;
  } else return null;
});

export const getArtist = _try(async (id) => {
  const response = await http.get(route + "artists/" + id);
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
});
