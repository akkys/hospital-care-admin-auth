import React from "react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthOptions = ({ userInfo, logOut }) => {
  return (
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link as={Link} className="mr-3 " to="/home">
          Home
        </Nav.Link>
        <NavDropdown title="Team" id="basic-nav-dropdown" className="mr-3">
          <NavDropdown.Item
            as={Link}
            to="/doctorsList"
            style={{ fontWeight: "500" }}>
            Doctors
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Facilities"
          id="basic-nav-dropdown"
          className="mr-3">
          <NavDropdown.Item
            as={Link}
            to="/ambulanceService"
            style={{ fontWeight: "500" }}>
            Ambulance Services
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/wardsList"
            style={{ fontWeight: "500" }}>
            Wards
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} className="mr-3" to="/contactUs">
          Contact Us
        </Nav.Link>
        <Nav.Link as={Link} to="/branchList" className="mr-3 ">
          Branches
        </Nav.Link>
      </Nav>
      <Dropdown className="mr-5">
        <Dropdown.Toggle variant="default" id="dropdown-basic">
          <span
            className="mr-1"
            style={{ fontWeight: "520", fontSize: "14px" }}>
            <i className="fa fa-user fa-lg mr-2" />
            {userInfo.user.fullName}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/appointmentList">
            Appointments
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/patientList">
            Patients
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/labRoomList">
            Laboratory
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <span className="text-danger" onClick={logOut}>
              Logout
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.Collapse>
  );
};

export default AuthOptions;
