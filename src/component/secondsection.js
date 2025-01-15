import React from "react";
import "../Styles/secondsection.css"
export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="section-title text-center mb-4">
              Dedicated to Providing the Best Treatment
            </h1>
            <p className="section-text">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
            <hr className="section-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
