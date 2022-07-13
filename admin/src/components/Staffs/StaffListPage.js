import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers, usersRegister } from "../../actions/UserAction";
import ErrorAlert from "../../misc/ErrorAlert";
import ModalBtn from "../../misc/ModalBtn";
import ModalTitle from "../../misc/ModalTitle";
import ReUseComp from "../../misc/ReUseComp";
import PageHeader from "../Layout/PageHeader";
import LoadingPage from "../Pages/LoadingPage";
import StaffList from "./StaffList";

const StaffListPage = () => {
  const [modalVisible, setModalVisible] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles] = useState(["Admin", "User"]);
  const [role, setRole] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { error1, error2, success } = userRegister;
  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;
  console.log("users", users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setModalVisible(false);
    }
  }, [success]);
  useEffect(() => {
    document.title = "Staffs | A S K Hospitals";
    dispatch(listUsers());
  }, [dispatch]);

  const openModal = () => {
    setModalVisible(true);
    setFirstName("");
    setLastName("");
    setRole("");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const closeModal = () => {
    dispatch(listUsers());
    setModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error1 && error2) {
      setModalVisible(true);
    } else {
      dispatch(usersRegister(firstName, lastName, role, email, password));
    }
  };

  const deleteHandler = (user) => {
    dispatch(deleteUser(user._id));
    dispatch(listUsers());
  };

  const staffsList = users.map((user) => {
    return (
      <StaffList key={user._id} user={user} deleteHandler={deleteHandler} />
    );
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <div className="home-container container">
      <PageHeader data={users} title="Staffs" openModal={openModal} />
      <div className="row mt-3">
        <div className="container ">
          <div className="row">{staffsList}</div>
        </div>
      </div>
      {modalVisible && (
        <Modal
          show={modalVisible}
          onHide={() => setModalVisible(false)}
          size="md"
          className="modal-container">
          <Modal.Header closeButton>
            <ModalTitle title="Staff" />
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              {error1 && <ErrorAlert message={error1} />}
              {error2 && <ErrorAlert message={error2} />}

              <ReUseComp
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
              />
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
              <ModalBtn closeModal={closeModal} />
            </form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default StaffListPage;
