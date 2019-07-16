import { ACTION_TYPES } from "./auth-actions";

const initialState = {
  login: undefined
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.login:
      return {
        login: action.payload
      };
    case ACTION_TYPES.logout:
      return { login: null };
    default:
      return state;
  }
};
