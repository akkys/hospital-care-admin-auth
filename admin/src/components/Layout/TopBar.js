import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, signin } from "../../actions/UserAction";
import LoginModal from "../Auth/LoginModal";
import RegisterModal from "../Auth/RegisterModal";

const TopBar = (props) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [regModalVisible, setRegModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles] = useState(["Admin", "User"]);
  const [role, setRole] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo, error1, error2 } = adminSignin;

  const adminRegister = useSelector((state) => state.adminRegister);
  const { error1: errorReg1, error2: errorReg2, success } = adminRegister;
  console.log("reg", adminInfo);

  useEffect(() => {
    if (success) {
      setRegModalVisible(false);
    }
  }, [success]);

  useEffect(() => {
    if (adminInfo) {
      setLoginModalVisible(false);
    }
  }, [adminInfo, props.history]);

  const openLoginModal = () => {
    setLoginModalVisible(true);
    setEmail();
    setPassword();
  };

  const openRegModal = () => {
    setRegModalVisible(true);
    setFirstName("");
    setLastName("");
    setRole("");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    dispatch(register(firstName, lastName, role, email, password));
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

  const regData = {
    adminInfo,
    success,
    regModalVisible,
    setRegModalVisible,
    handleRegSubmit,
    errorReg1,
    errorReg2,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    password,
    setEmail,
    setPassword,
    role,
    setRole,
    roles,
    passwordShown,
    togglePasswordVisiblity,
  };

  return (
    <div className="home-container container ">
      {loginModalVisible && <LoginModal data={loginData} />}
      {regModalVisible && <RegisterModal data={regData} />}
      {!adminInfo && (
        <div className="btn-div">
          <button
            className="btn btn-primary btn-sm login-btn mr-3"
            onClick={() => openRegModal({})}>
            Register
          </button>
          <button
            className="btn btn-success btn-sm login-btn"
            onClick={() => openLoginModal({})}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
