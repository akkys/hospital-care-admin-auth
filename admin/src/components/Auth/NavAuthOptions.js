import React from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../Pages/LoadingPage";
import Cookie from "js-cookie";
import AuthOptions from "./AuthOptions";
import NonAuthOptions from "./NonAuthOptions";

const NavAuthOption = () => {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading, adminInfo } = adminSignin;

  const adminlogOut = (e) => {
    e.preventDefault();
    Cookie.remove("adminInfo");
    window.location.href = "/home";
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      {adminInfo ? (
        <AuthOptions adminInfo={adminInfo} adminlogOut={adminlogOut} />
      ) : (
        <NonAuthOptions />
      )}
    </>
  );
};

export default NavAuthOption;
