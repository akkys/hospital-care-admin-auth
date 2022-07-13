import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  adminRegisterReducer,
  adminSigninReducer,
  deleteUserReducer,
  userRegisterReducer,
  userSigninReducer,
  usersListReducer,
} from "./reducers/UserReducer";
import {
  addAppointmentReducer,
  appointmentListReducer,
  deleteAppointmentReducer,
} from "./reducers/AppointmentReducer";
import {
  addPatientReducer,
  deletePatientReducer,
  patientListReducer,
} from "./reducers/PatientReducer";
import {
  addRoomReducer,
  deleteRoomReducer,
  roomListReducer,
} from "./reducers/RoomReducer";
import {
  addWardReducer,
  deleteWardReducer,
  wardListReducer,
} from "./reducers/WardReducer";
import {
  addBranchReducer,
  branchListReducer,
  deleteBranchReducer,
} from "./reducers/BranchReducer";
import {
  addDoctorReducer,
  deleteDoctorReducer,
  doctorListReducer,
} from "./reducers/DoctorReducer";

const userInfo = Cookie.getJSON("userInfo") || null;
const adminInfo = Cookie.getJSON("adminInfo") || null;

const reducer = combineReducers({
  adminSignin: adminSigninReducer,
  adminRegister: adminRegisterReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userList: usersListReducer,
  userDelete: deleteUserReducer,
  appointmentList: appointmentListReducer,
  appointmentAdd: addAppointmentReducer,
  appointmentDelete: deleteAppointmentReducer,
  patientList: patientListReducer,
  patientAdd: addPatientReducer,
  patientDelete: deletePatientReducer,
  doctorList: doctorListReducer,
  doctorAdd: addDoctorReducer,
  doctorDelete: deleteDoctorReducer,
  roomList: roomListReducer,
  roomAdd: addRoomReducer,
  roomDelete: deleteRoomReducer,
  wardList: wardListReducer,
  wardAdd: addWardReducer,
  wardDelete: deleteWardReducer,
  branchList: branchListReducer,
  branchAdd: addBranchReducer,
  branchDelete: deleteBranchReducer,
});

const initialState = {
  userSignin: { userInfo },
  adminSignin: { adminInfo },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
