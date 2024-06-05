import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Custom CSS file

const NavBar = () => {
  return (
    <Navbar className="navbar-custom px-2 d-flex justify-content-between sticky-top" expand="lg">
      <Navbar.Brand className="d-flex align-items-center" href="#">
        <img
          src="https://pbs.twimg.com/profile_images/1688442970587201536/dCewVE4I_400x400.jpg"
          alt="VNRVJIET Logo"
          height="40"
          className="px-2"
        />{' '}
        VNRVJIET
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
        <div className="navbar-left"> */}
          {/* Placeholder for left-aligned content */}
        {/* </div> */}
        <Nav className="navbar-right ">
          <Nav.Link href="#">Sign Out</Nav.Link>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default NavBar;
