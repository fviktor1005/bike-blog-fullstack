import axios from "axios";
import config from "Config";

const login = values =>
  axios.post(config.api + "/users/login", values, { withCredentials: true });

const updateProfile = values =>
  axios.post(config.api + "/users/profile", values, { withCredentials: true });

const registrate = values => axios.post(config.api + "/users", values);

const getProfile = () =>
  axios.get(config.api + "/users/profile", { withCredentials: true });

export default {
  login,
  registrate,
  getProfile,
  updateProfile
};
