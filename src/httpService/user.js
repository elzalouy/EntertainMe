import http from "./httpHandler";

const api = process.env.REACT_APP_API + "/api/";


/**
 * Login
 * 
 * 
 * @param {email} email The user's email is required
 * @param {pasword} password The password is required
 * @returns response data and error
 */
export const login = async (email, password) => {
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
      error: { key: "invalid", data: response.response.data.message },
    };
  }
};

export const contactUs = async (email, name, message) => {
  const response = await http.post(api + "send_brief", {
    email,
    name,
    message,
  });
  if(response.status===200){
    return {data:response.data,error:null}
  }else{
    console.log(response);
    return {error:response.data.message,data:null};
  }
};
