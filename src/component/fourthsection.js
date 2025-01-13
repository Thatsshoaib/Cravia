import React, { useState } from "react";
import DoctorWorld from "./assets/section-three-image.avif";
import "../component/Styles/fourthsection.css";
import { useNavigate } from "react-router-dom";

export default function FourthSection() {
  const navigate = useNavigate();

  const goToAppointmentPage = () => {
    navigate("/appointment");
  };

  const [hover, setHover] = useState(false);

  return (
    <div className="fourth-section">
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <h1 className="section-title">Wellness, Compassion, Quality</h1>
            <p className="section-description">
              They live in Bookmarks Grove right at the coast of the Semantics,
              a large language ocean. A small river named Duden flows by their
              place and supplies it.
            </p>
            <button
              type="button"
              className={`appointment-button ${hover ? "hover" : ""}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={goToAppointmentPage}
            >
              Take an Appointment
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={DoctorWorld}
              alt="Doctors"
              className="img-fluid section-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
