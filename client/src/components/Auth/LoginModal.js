import React from "react";
import { Modal } from "react-bootstrap";
import ErrorAlert from "../../misc/ErrorAlert";
import ReUseComp from "../../misc/ReUseComp";
import hospital from "../../img/hospital-staff.png";

const LoginModal = ({ data }) => {
  const {
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
  } = data;
  return (
    <>
      <Modal
        show={loginModalVisible}
        onHide={() => setLoginModalVisible(false)}
        size="lg"
        className="modal-container">
        <Modal.Body>
          <div className="row">
            <div className="col-md-5">
              <img src={hospital} className="card-img" alt="..." />
            </div>

            <div className="col-md-7">
              <h4 className="mt-5">Admin Sign-In</h4>

              <form onSubmit={handleLoginSubmit} className="mt-3">
                {error1 && <ErrorAlert message={error1} />}{" "}
                {error2 && <ErrorAlert message={error2} />}
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
                  className="btn btn-success btn-sm float-right mt-3">
                  Sign-In
                </button>
                <br />
                <div className="mt-5 text-center">
                  [
                  <small>
                    <strong>Note :</strong>
                    This website is authorised by
                    <strong> A S K Hospital Management</strong>.<br />
                    Non-authorised user cannot register thier account without
                    Admin access.
                  </small>
                  ]
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
