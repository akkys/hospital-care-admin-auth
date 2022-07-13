import Axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../constants/UserConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/admin/signin", {
      email,
      password,
    });
    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
    Cookie.set("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_SIGNIN_FAIL,
      payload1: error.response.data.message,
      payload2: error.response.data.error,
    });
  }
};

const register =
  (firstName, lastName, role, email, password) => async (dispatch) => {
    dispatch({
      type: ADMIN_REGISTER_REQUEST,
      payload: { firstName, lastName, role, email, password },
    });
    try {
      const { data } = await Axios.post("/api/admin/signup", {
        firstName,
        lastName,
        role,
        email,
        password,
      });
      console.log("action", data);
      dispatch({
        type: ADMIN_REGISTER_SUCCESS,
        success: true,
        payload: { data },
      });
      Cookie.set("adminInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ADMIN_REGISTER_FAIL,
        payload1: error.response.data.message,
        payload2: error.response.data.error,
      });
    }
  };

const usersRegister =
  (firstName, lastName, role, email, password) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      // payload: { firstName, lastName, role, email, password },
    });
    try {
      const { data } = await Axios.post("/api/admin/userSignup", {
        firstName,
        lastName,
        role,
        email,
        password,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        success: true,
        payload: { data },
      });
      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload1: error.response.data.message,
        payload2: error.response.data.error,
      });
    }
  };

const usersSignin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/admin/userSignin", {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload1: error.response.data.message,
      payload2: error.response.data.error,
    });
  }
};

const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const {
      adminSignin: { adminInfo },
    } = getState();
    const { data } = await Axios.get("/api/admin/getUsers", {
      headers: {
        "x-auth-token": adminInfo.token,
      },
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};

const deleteUser = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST, payload: userId });
    const {
      adminSignin: { adminInfo },
    } = getState();
    const { data } = await Axios.delete("/api/admin/getUsers/" + userId, {
      headers: {
        "x-auth-token": adminInfo.token,
      },
    });
    dispatch({ type: USER_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
};

export { signin, register, listUsers, deleteUser, usersRegister, usersSignin };
