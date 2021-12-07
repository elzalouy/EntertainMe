// should be installed
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  // if it's not app error
  if (!expectedError) {
    alert(error);
    Promise.reject(error);
    console.log(error.message);
  }
  return error;
});
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
export default http;
