import Axios from "axios";
import {
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
} from "../constants/DoctorConstants";

const listDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_LIST_REQUEST });

    const { data } = await Axios.get("/api/admin/doctors/");
    dispatch({ type: DOCTOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DOCTOR_LIST_FAIL, payload: error });
  }
};

export { listDoctors };
