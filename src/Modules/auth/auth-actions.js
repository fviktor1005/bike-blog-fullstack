import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import AUTH_SERVICE from "./auth-service";

export const ACTION_TYPES = {
  login: "LOGIN",
  logout: "LOGOUT"
};

const tokenCookieName = "__session";

const login = values => async dispatch => {
  return AUTH_SERVICE.login(values).then((response) => {
    cookie.save(tokenCookieName, response.data);
    dispatch({ type: ACTION_TYPES.login, payload: values.login });
  });
};

const logout = () => async dispatch => {
  dispatch({ type: ACTION_TYPES.logout });
  cookie.remove(tokenCookieName);
};

const checkLogin = () => dispatch => {
  const token = cookie.load(tokenCookieName);
  const { login, exp } = token ? jwt_decode(token) : {};
  const currentTime = new Date().getTime() / 1000;
  if (login && exp > currentTime) {
    dispatch({ type: ACTION_TYPES.login, payload: login });
  } else {
    dispatch({ type: ACTION_TYPES.login, payload: null });
    cookie.remove(tokenCookieName);
  }
};

export const AUTH_ACTIONS = {
  login,
  logout,
  checkLogin
};
