import http from "./httpHandler";
import _try from "../utils/try";
import handleServerError from "./handleServerError";
const route = process.env.REACT_APP_API + "/api/";

export const requestOrder = _try(async (data) => {
  const response = await http.post(route + "order", data);
  console.log(response);
  const result = handleServerError(response);
  if (result) return { error: result, data: null };
  if (response.data) return { error: null, data: response.data };
  return { data: response.data, error: null };
});

export const getEventsByUser = async () => {
  const token = localStorage.getItem("x-auth-token");
  let response = await http.get(route + "order", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 200) return { data: response.data, error: null };
  else return { data: null, error: response.response.data };
};
