import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Layout/NavigationBar";
import HomePage from "./components/Pages/HomePage";
import AmbulanceService from "./components/Pages/AmbulanceService";
import ContactUs from "./components/Pages/ContactUs";
import AppointmentListPage from "./components/Appointments/AppointmentListPage";
import BranchListPage from "./components/Branches/BranchListPage";
import DoctorListPage from "./components/Doctors/DoctorListPage";
import PatientListPage from "./components/Patients/PatientListPage";
import WardsListPage from "./components/Wards/WardsListPage";
import LabRoomPage from "./components/LabRooms/LabRoomPage";
import StaffListPage from "./components/Staffs/StaffListPage";
import TopBar from "./components/Layout/TopBar";

const RoutesApp = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/staffs" component={StaffListPage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/ambulanceService" component={AmbulanceService} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/appointmentList" component={AppointmentListPage} />
          <Route path="/doctorsList" component={DoctorListPage} />
          <Route path="/patientList" component={PatientListPage} />
          <Route path="/wardsList" component={WardsListPage} />
          <Route path="/branchList" component={BranchListPage} />
          <Route path="/labRoomList" component={LabRoomPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesApp;
