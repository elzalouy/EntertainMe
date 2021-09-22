const initialState = {
  login: {
    email: "",
    password: "",
    error: "",
  },
  contactUs: {
    email: "",
    name: "",
    message: "",
    error:""
  },
  register: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    type: "user",
    error:''
  },
};
export default initialState;
