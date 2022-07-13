import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
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

const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error1: action.payload1,
        error2: action.payload2,
      };
    default:
      return state;
  }
};

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: action.success,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error1: action.payload1,
        error2: action.payload2,
      };
    default:
      return state;
  }
};

const adminSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return {
        loading: false,
        adminInfo: action.payload,
      };
    case ADMIN_SIGNIN_FAIL:
      return {
        loading: false,
        error1: action.payload1,
        error2: action.payload2,
      };
    default:
      return state;
  }
};

const adminRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return {
        loading: false,
        success: action.success,
        adminInfo: action.payload,
      };
    case ADMIN_REGISTER_FAIL:
      return {
        loading: false,
        error1: action.payload1,
        error2: action.payload2,
      };
    default:
      return state;
  }
};

const usersListReducer = (
  state = {
    users: [],
  },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const deleteUserReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  userSigninReducer,
  userRegisterReducer,
  usersListReducer,
  adminRegisterReducer,
  adminSigninReducer,
  deleteUserReducer,
};
