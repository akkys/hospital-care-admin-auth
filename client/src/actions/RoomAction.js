import Axios from "axios";
import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
} from "../constants/RoomConstants";

const listRooms = () => async (dispatch) => {
  try {
    dispatch({ type: ROOM_LIST_REQUEST });

    const { data } = await Axios.get("/api/admin/rooms/");
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROOM_LIST_FAIL, payload: error });
  }
};

export { listRooms };
