import http from "./httpHandler";
import _try from '../utils/try'
const api = process.env.REACT_APP_API + "/api/";

/**
 * Login
 *
 * Login Function is reponsible for giving users a lisence to access their accounts and features that need a permission.
 * @param {email} email The user's email is required
 * @param {pasword} password The password is required
 * @returns response data and error
 */
export const login =_try( async (email, password) => {
  const response = await http.post(api + "login", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    localStorage.setItem("x-auth-token", response.data.success.token);
    return { data: response.data, error: null };
  } else {
    return {
      data: null,
      error: { key: "invalid", message: response.response.data.message },
    };
  }
});

/**
 *
 * @param {email} email The email of the user that will be used to communicate with (required)
 * @param {name} name The user name is required
 * @param {message} message Message the user need to send the support team for help
 * @returns {data} data  if the Response is ok (status code 200)
 * @returns {error} error if the response is a bad request (status code 400)
 */
export const contactUs =_try( async (email, name, message) => {
  const response = await http.post(api + "send_brief", {
    email,
    name,
    message,
  });
  if (response.status) {
    return { data: response.data, error: null };
  } else {
    return { error: response.response.data.message, data: null };
  }
});

/**
 * Register
 * Call API endpoint named 'register' to http reuest to the API server and handle registeration
 * @param {data} data Data reuired to register a new user {email,password,password_confirmation,first_name,last_name}
 */
export const register =_try( async (data) => {
  const response = await http.post(api + "register", data);
  if (response.status === 200) {
    console.log(response);
    await localStorage.setItem("x-auth-token", response.data.success.token);
    return { data: response.data.user, error: null };
  } else {
    console.log(response.response);
    return {
      data: null,
      error: {
        key: "error",
        message:
          response.response.data.data[
            Object.keys(response.response.data.data)[0]
          ][0],
      },
    };
  }
});
