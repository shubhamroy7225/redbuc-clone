import axios from "axios";
export const register = (newUser) => {
  return axios
    .post("users/register", {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    })
};
export const login = (user) => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
}

export const getProfile = (user) => {
  return axios
    .get("users/profile", {
    })
    .then((response) => {
      return response.data;
    })    
};




