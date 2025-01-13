import React from "react";
import "./Styles/contact.css"

export default function ContactSection() {
  return (
    <div
      style={{
        backgroundColor: "#6cc2d9",
        padding: "2px 0",
      }}
    >
      <div className="container" style={{ padding: "0" }}>
        <div className="row text-center text-md-start align-items-center">
          {/* Address Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <ul
              className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center list-unstyled gap-2"
              style={{ margin: 0 }}
            >
              <li className="contact-icon">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </li>
              <li className="contact-text">XYZ, City, State</li>
            </ul>
          </div>

          {/* Email Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <ul
              className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center list-unstyled gap-2"
              style={{ margin: 0 }}
            >
              <li className="contact-icon">
                <i
                  className="fa-solid fa-envelope"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </li>
              <li className="contact-text">CraviaHealthCare00@gmail.com</li>
            </ul>
          </div>

          {/* WhatsApp Section */}
          <div className="col-12 col-md-4">
            <ul
              className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center list-unstyled gap-2"
              style={{ margin: 0 }}
            >
              <li className="contact-icon">
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </li>
              <li className="contact-text">Connect to Whatsapp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
