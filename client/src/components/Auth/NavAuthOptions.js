import React from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../Pages/LoadingPage";
import Cookie from "js-cookie";
import AuthOptions from "./AuthOptions";
import NonAuthOptions from "./NonAuthOptions";

const NavAuthOption = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo } = userSignin;

  const logOut = (e) => {
    e.preventDefault();
    Cookie.remove("userInfo");
    window.location.href = "/home";
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      {userInfo ? (
        <AuthOptions logOut={logOut} userInfo={userInfo} />
      ) : (
        <NonAuthOptions />
      )}
    </>
  );
};

export default NavAuthOption;
