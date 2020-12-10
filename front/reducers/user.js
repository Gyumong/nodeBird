import React from "react";
export const init = {
  isLoggedIn: false,
  me: null,
  singUpData: {},
  loginData: {},
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
