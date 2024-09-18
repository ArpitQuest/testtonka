import { createSlice } from "@reduxjs/toolkit";

const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated");
const admindata = localStorage.getItem("admindata");
const admintoken = localStorage.getItem("admintoken");
const level_name = localStorage.getItem("level_name");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAdminAuthenticated: !!isAdminAuthenticated ? true : false,
    admin: !!admindata && admindata !== "undefind" ? JSON.parse(admindata) : {},
    admintoken: !!admintoken ? JSON.parse(admintoken) : {},
    level_name: !!level_name ? JSON.parse(level_name) : "",
  },

  reducers: {
    loginSaga: (state, action) => {
      return { ...state };
    },

    adminLoginSaga: (state, action) => {
      return { ...state };
    },

    adminLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    setAdminprofileData: (state, action) => {
      localStorage.setItem("admindata", JSON.stringify(action.payload));
      return {
        ...state,
        admin: action.payload,
      };
    },

    adminloginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAdminAuthenticated: true,
        admin: action.payload,
        authToken: action.payload.token,
      };
    },

    isLogin: (state, action) => {
      localStorage.setItem(
        "isAdminAuthenticated",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        isAdminAuthenticated: true,
        admin: action.payload,
      };
    },
    adminLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAdminAuthenticated: false,
        admin: {},
        errorMsg: action.payload,
      };
    },

    levelName: (state, action) => {
      localStorage.setItem("level_name", JSON.stringify(action.payload));
      return {
        ...state,
        level_name: action.payload,
      };
    },

    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isAdminAuthenticated: false,
        isAuthenticated: false,
        admin: {},
        errorMsg: "",
      };
    },
  },
});

export const {
  logout,
  setAdminprofileData,
  adminLoginSaga,
  adminLoginStart,
  adminloginSuccess,
  adminLoginFail,
  isLogin,
  levelName,
} = authSlice.actions;

export default authSlice.reducer;
