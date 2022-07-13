import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userSigninReducer } from "./reducers/UserReducer";
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
import { roomListReducer } from "./reducers/RoomReducer";
import {
  addWardReducer,
  deleteWardReducer,
  wardListReducer,
} from "./reducers/WardReducer";
import { branchListReducer } from "./reducers/BranchReducer";
import { doctorListReducer } from "./reducers/DoctorReducer";

const userInfo = Cookie.getJSON("userInfo") || null;

const reducer = combineReducers({
  userSignin: userSigninReducer,
  appointmentList: appointmentListReducer,
  appointmentAdd: addAppointmentReducer,
  appointmentDelete: deleteAppointmentReducer,
  patientList: patientListReducer,
  patientAdd: addPatientReducer,
  patientDelete: deletePatientReducer,
  doctorList: doctorListReducer,
  roomList: roomListReducer,
  wardList: wardListReducer,
  wardAdd: addWardReducer,
  wardDelete: deleteWardReducer,
  branchList: branchListReducer,
});

const initialState = {
  userSignin: { userInfo },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
