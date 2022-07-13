import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../../actions/DoctorAction";
import PageHeader from "../Layout/PageHeader";
import ScrollToTop from "../Layout/ScrollToTop";
import LoadingPage from "../Pages/LoadingPage";
import DoctorList from "./DoctorList";

const DoctorListPage = () => {
  const [allow, setAllow] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const doctorList = useSelector((state) => state.doctorList);
  const { doctors, loading } = doctorList;

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Doctors | A S K Hospitals";
    dispatch(listDoctors());
  }, [dispatch]);
  console.log("Docs", doctors);

  const doctorsListData = doctors.map((doctor, i) => {
    return <DoctorList key={i} docs={doctor} userInfo={userInfo} />;
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <div className="home-container container">
      <PageHeader
        data={doctors}
        fullTitle="List of Doctors available in our Hospital"
      />
      <div className="row mt-3">
        <div className="container ">
          <div className="row">{doctorsListData}</div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default DoctorListPage;
