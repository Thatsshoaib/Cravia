import React from 'react';
import Thumbsup from "../assets/thumpsupdr.png";
import "../Styles/fifthsection.css";

export default function FourthSection() {
  return (
    <div style={{ marginTop: "50px", backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <div className="container my-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h2 style={{ color: "rgb(14, 80, 74)" }}>
              Why Choose Us!
            </h2>
            <div className="row">
              {[
                "Safety First Quality Must",
                "Patient-Centric Approach",
                "Focused Leadership",
                "Cutting-Edge Technology",
                "Transparent Pricing",
                "Coordinated Care",
              ].map((point, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="feature-card p-3">
                    <i className="fa-solid fa-check-circle feature-icon"></i>
                    <p className="mb-0">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="col-md-6 text-center">
            <img src={Thumbsup} alt="Thumbs Up Doctor" className="img-fluid section-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
