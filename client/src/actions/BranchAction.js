import Axios from "axios";
import {
  BRANCH_LIST_REQUEST,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_FAIL,
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

export { listBranches };
