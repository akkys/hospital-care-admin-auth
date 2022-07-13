import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/UserAction";
import LoginModal from "../Auth/LoginModal";

const TopBar = (props) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error1, error2 } = userSignin;
  console.log("user", userInfo);

  useEffect(() => {
    if (userInfo) {
      setLoginModalVisible(false);
    }
  }, [userInfo, props.history]);

  const openLoginModal = () => {
    setLoginModalVisible(true);
    setEmail();
    setPassword();
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const loginData = {
    loginModalVisible,
    setLoginModalVisible,
    handleLoginSubmit,
    error1,
    error2,
    email,
    password,
    setEmail,
    setPassword,
    passwordShown,
    togglePasswordVisiblity,
  };
  return (
    <div className="home-container container">
      {loginModalVisible && <LoginModal data={loginData} />}
      {!userInfo && (
        <div className="btn-div">
          <button
            className="btn btn-success btn-sm login-btn"
            onClick={() => openLoginModal({})}>
            Sign-In
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
