import Axios from "axios";
import {
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_ADD_REQUEST,
  DOCTOR_ADD_SUCCESS,
  DOCTOR_ADD_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAIL,
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

const addDoctor = (doctor) => async (dispatch, getState) => {
  try {
    dispatch({ type: DOCTOR_ADD_REQUEST });
    const {
      adminSignin: { adminInfo },
    } = getState();
    if (!doctor._id) {
      const { data } = await Axios.post("/api/admin/doctors/add", doctor, {
        headers: {
          "x-auth-token": adminInfo.token,
        },
      });
      dispatch({ type: DOCTOR_ADD_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.post(
        "/api/admin/doctors/update/" + doctor._id,
        doctor,
        {
          headers: {
            "x-auth-token": adminInfo.token,
          },
        }
      );
      dispatch({ type: DOCTOR_ADD_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: DOCTOR_ADD_FAIL, payload: error.response.data.msg });
  }
};

const deleteDoctor = (doctorId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DOCTOR_DELETE_REQUEST, payload: doctorId });
    const {
      adminSignin: { adminInfo },
    } = getState();
    const { data } = await Axios.delete("/api/admin/doctors/" + doctorId, {
      headers: {
        "x-auth-token": adminInfo.token,
      },
    });
    dispatch({ type: DOCTOR_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: DOCTOR_DELETE_FAIL, payload: error.message });
  }
};

export { listDoctors, addDoctor, deleteDoctor };
