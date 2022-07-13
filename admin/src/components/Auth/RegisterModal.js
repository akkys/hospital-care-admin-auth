import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import ErrorAlert from "../../misc/ErrorAlert";
import ReUseComp from "../../misc/ReUseComp";
import hospital from "../../img/hospital-staff.png";

const RegisterModal = ({ data }) => {
  const {
    adminInfo,
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
  } = data;

  useEffect(() => {
    if (adminInfo) {
      setRegModalVisible(false);
    }
    return () => {
      // cleanup
    };
  }, [adminInfo, setRegModalVisible]);

  return (
    <>
      <Modal
        show={regModalVisible}
        onHide={() => setRegModalVisible(false)}
        size="lg"
        className="modal-container">
        <Modal.Body>
          <div className="row">
            <div className="col-md-5">
              <img src={hospital} className="card-img" alt="..." />
            </div>
            <div className="col-md-7">
              <h4 className="mt-4">Register an Account</h4>
              <form onSubmit={handleRegSubmit} className="mt-3">
                {errorReg1 && <ErrorAlert message={errorReg1} />}{" "}
                {errorReg2 && <ErrorAlert message={errorReg2} />}
                <div className="row">
                  <div className="col-md-6">
                    <ReUseComp
                      avatar="fa fa-user fa-lg"
                      inputType="text"
                      type="text"
                      name={firstName}
                      value={firstName}
                      setValue={setFirstName}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <ReUseComp
                      avatar="fa fa-user fa-lg"
                      inputType="text"
                      type="text"
                      name={lastName}
                      value={lastName}
                      setValue={setLastName}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* <ReUseComp
                  avatar="fa fa-user fa-lg"
                  inputType="text"
                  type="text"
                  name={firstName}
                  value={firstName}
                  setValue={setFirstName}
                  placeholder="First Name"
                />
                <ReUseComp
                  avatar="fa fa-user fa-lg"
                  inputType="text"
                  type="text"
                  name={lastName}
                  value={lastName}
                  setValue={setLastName}
                  placeholder="Last Name"
                /> */}
                <ReUseComp
                  avatar="fa fa-list"
                  inputType="select"
                  data={roles}
                  name="role"
                  value={role}
                  setValue={setRole}
                />
                <ReUseComp
                  avatar="fa fa-envelope"
                  inputType="text"
                  type="email"
                  name={email}
                  value={email}
                  setValue={setEmail}
                  placeholder="Email Address"
                />
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-lock fa-lg " />
                    </span>
                  </div>
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control form-control-sm"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      {!passwordShown ? (
                        <i
                          className="fa fa-eye-slash"
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <i
                          className="fa fa-eye"
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm float-right mt-3">
                  Register
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
