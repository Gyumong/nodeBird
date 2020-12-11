import React from "react";
export const init = {
  isLoggingIn: false, // 로그인 시도중
  isLoggingOut: false, // 로그아웃 시도중
  isLoggedIn: false,
  me: null,
  singUpData: {},
  loginData: {},
};
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: "김구민구" },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
