import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBranches } from "../../actions/BranchAction";
import ErrorAlert from "../../misc/ErrorAlert";
import ModalBtn from "../../misc/ModalBtn";
import ModalTitle from "../../misc/ModalTitle";
import ReUseComp from "../../misc/ReUseComp";
import PageHeader from "../Layout/PageHeader";
import ScrollToTop from "../Layout/ScrollToTop";
import LoadingPage from "../Pages/LoadingPage";
import BranchList from "./BranchList";

const BranchListPage = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const branchList = useSelector((state) => state.branchList);
  const { loading, branches, error } = branchList;
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Branches | A S K Hospitals";
    dispatch(listBranches());
  }, [dispatch]);
  console.log(branches);

  const brachListData = branches.map((branch, i) => {
    return <BranchList key={i} branch={branch} userInfo={userInfo} />;
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <div className="home-container container">
      <PageHeader data={branches} title="Branches" />

      <div className="row">{brachListData}</div>
      <ScrollToTop />
    </div>
  );
};

export default BranchListPage;
