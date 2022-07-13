import React from "react";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NonAuthOptions = () => {
  return (
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link as={Link} className="mr-3 " to="/home">
          Home
        </Nav.Link>

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
        </NavDropdown>
        <Nav.Link as={Link} to="/branchList" className="mr-3 ">
          Branches
        </Nav.Link>
        <Nav.Link as={Link} className="mr-3" to="/contactUs">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default NonAuthOptions;
