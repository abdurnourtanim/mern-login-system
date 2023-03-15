import axios from "axios";

const baseURL = "http://localhost:4000/api";
// signup request
const signup = (newUser) => {
  return axios
    .post(`${baseURL}/signup`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login request
const login = (userInfo) => {
  return axios
    .post(`${baseURL}/login`, userInfo)
    .then((response) => {
      const token = response.data.token;
      if (token) {
        localStorage.setItem("x-access-token", token);
      }

      return Promise.resolve(response.data);
    })
    .catch((error) => Promise.reject(error.response.data));
};

export { signup, login };
