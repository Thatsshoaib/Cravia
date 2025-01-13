import React from "react";
import logo from "./assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToAppointmentPage = () => {
    navigate("/appointment");
  };

  return (
    <div>
      {/* Upper Nav */}
      <div
        className="upper-nav d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: "#6CC2D9",
          height: "60px",
          position: "sticky",
          top: 0, // Sticks it to the top of the viewport
          zIndex: 1030, // Ensures it stays above other elements
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow for separation
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", width: "120px" }}
          className="mx-2 rounded"
        />
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={goToLoginPage}
        >
          Login
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand fw-bold" href="/">
            Cravia
          </a>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Options
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Doctors
                      <hr />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Departments
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Right Navigation Links */}
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <i className="fa-solid fa-phone mx-2"></i>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  999-888-7777
                </a>
              </li>
            </ul>

            {/* Appointment Button */}
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-success mx-2"
                onClick={goToAppointmentPage}
              >
                Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
