import Axios from "axios";
import {
  BRANCH_LIST_REQUEST,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_FAIL,
  BRANCH_ADD_REQUEST,
  BRANCH_ADD_SUCCESS,
  BRANCH_ADD_FAIL,
  BRANCH_DELETE_REQUEST,
  BRANCH_DELETE_SUCCESS,
  BRANCH_DELETE_FAIL,
} from "../constants/BranchConstants";

const listBranches = () => async (dispatch) => {
  try {
    dispatch({ type: BRANCH_LIST_REQUEST });

    const { data } = await Axios.get("/api/admin/branches/");
    dispatch({ type: BRANCH_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BRANCH_LIST_FAIL, payload: error });
  }
};

const addBranch = (branch) => async (dispatch, getState) => {
  try {
    dispatch({ type: BRANCH_ADD_REQUEST });
    const {
      adminSignin: { adminInfo },
    } = getState();
    if (!branch._id) {
      const { data } = await Axios.post("/api/admin/branches/add", branch, {
        headers: {
          "x-auth-token": adminInfo.token,
        },
      });
      dispatch({ type: BRANCH_ADD_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.post(
        "/api/admin/branches/update/" + branch._id,
        branch,
        {
          headers: {
            "x-auth-token": adminInfo.token,
          },
        }
      );
      dispatch({ type: BRANCH_ADD_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: BRANCH_ADD_FAIL, payload: error.response.data.msg });
  }
};

const deleteBranch = (branchId) => async (dispatch, getState) => {
  try {
    dispatch({ type: BRANCH_DELETE_REQUEST, payload: branchId });
    const {
      adminSignin: { adminInfo },
    } = getState();
    const { data } = await Axios.delete("/api/admin/branches/" + branchId, {
      headers: {
        "x-auth-token": adminInfo.token,
      },
    });
    dispatch({ type: BRANCH_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: BRANCH_DELETE_FAIL, payload: error.message });
  }
};

export { listBranches, addBranch, deleteBranch };
