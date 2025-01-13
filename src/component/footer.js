
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Cravia Health Care */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h5 className="footer-heading">Cravia Health Care</h5>
            <ul className="list-unstyled footer-subpoints">
              <li>
                Book an <br /> Appointment
              </li>
              <li>
                Connect on <br /> WhatsApp
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h5 className="footer-heading">Services</h5>
            <ul className="list-unstyled footer-subpoints">
              <li><a href="/" className="text-white">Pathology</a></li>
              <li><a href="/" className="text-white">Ambulance</a></li>
              <li><a href="/" className="text-white">Radiology</a></li>
              <li><a href="/" className="text-white">Pharmacy</a></li>
            </ul>
          </div>

          {/* Column 3: Health Checkup */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h5 className="footer-heading">Health Checkup</h5>
            <ul className="list-unstyled footer-subpoints">
              <li><a href="/" className="text-white">Woman Health</a></li>
              <li><a href="/" className="text-white">Cancer Screening</a></li>
              <li><a href="/" className="text-white">Cardiac Health</a></li>
              <li><a href="/" className="text-white">MRI Checkup</a></li>
            </ul>
          </div>

          {/* Column 4: Departments */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h5 className="footer-heading">Departments</h5>
            <ul className="list-unstyled footer-subpoints">
              <li><a href="/" className="text-white">General</a></li>
              <li><a href="/" className="text-white">Dermatology</a></li>
              <li><a href="/" className="text-white">Cardiology</a></li>
              <li><a href="/" className="text-white">Cancer</a></li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-subpoints">
              <li><a href="/" className="text-white">License</a></li>
              <li><a href="/" className="text-white">Changelog</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-lg-2 col-md-12 text-center mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" className="text-white fs-4 me-3">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-white fs-4 me-3">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-white fs-4 me-3">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-white fs-4">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Cravia Health Care. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
