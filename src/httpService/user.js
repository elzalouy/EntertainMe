import http from "./httpHandler";

const api = process.env.REACT_APP_API + "/api/";

export const login = async (email, password) => {
  const response = await http.post(api + "login", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    return { data: response.data, error: null };
  } else {
    return {
      data: null,
      error: { key: "invalid", data: response.response.data.message },
    };
  }
};
