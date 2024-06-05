import React from "react";
import { BrowserRouter as Router, NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Router>
      <div className="sidebar-container">
        <Navbar expand="lg" className="flex-column">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column h-100">
              <NavLink className="nav-link" to="FacultyProfile">
                Faculty Profile
              </NavLink>
              <NavLink className="nav-link" to="Publications">
                Publications
              </NavLink>
              <NavLink className="nav-link" to="Patents">
                Patents
              </NavLink>
              <NavLink className="nav-link" to="BookChapter">
                Book Chapter
              </NavLink>
              <NavLink className="nav-link" to="Books">
                Books
              </NavLink>
              <NavLink className="nav-link" to="FundedProject">
                Funded Project
              </NavLink>
              <NavLink className="nav-link" to="Consultancy">
                Consultancy
              </NavLink>
              <NavLink className="nav-link" to="APIReports">
                API/Reports
              </NavLink>
              <NavLink className="nav-link" to="Collaboration">
                Collaboration
              </NavLink>
              <NavLink className="nav-link" to="Appraisal">
                Appraisal
              </NavLink>
              <NavLink className="nav-link" to="Notification">
                Notification
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </Router>
  );
}

export default Sidebar;
