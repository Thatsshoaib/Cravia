import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Home";
import LoginPage from "./component/login";
import AppointmentPage from "./component/appointment";
import "bootstrap/dist/css/bootstrap.min.css";

// Not Found Component
function NotFound() {
  return React.createElement(
    "div",
    { className: "d-flex flex-column align-items-center mt-5" },
    React.createElement("h1", null, "404 - Page Not Found"),
    React.createElement("p", null, "The page you are looking for does not exist.")
  );
}

// App Component
function App() {
  return React.createElement(
    Router, 
    { basename: "/Cravia" }, // Add basename here
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
      React.createElement(Route, { path: "/login", element: React.createElement(LoginPage) }),
      React.createElement(Route, { path: "/appointment", element: React.createElement(AppointmentPage) }),
      React.createElement(Route, { path: "*", element: React.createElement(NotFound) })
    )
  );
}

export default App;