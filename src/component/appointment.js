import React from "react";
import "./Styles/appointment.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "988e4550-7a73-405e-8484-2bff76945d9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>    
    <Navbar/>
    <div className="contact-container">
      <form onSubmit={onSubmit} className="contact-form">
        <h2>Schedule an Appointment</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Preferred Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Preferred Time</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Type</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="consultation">Initial Consultation</option>
            <option value="followup">Follow-up Visit</option>
            <option value="regular">Regular Appointment</option>
            <option value="emergency">Urgent Care</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Notes</label>
          <textarea
            id="message"
            name="message"
            placeholder="Any special requirements or concerns?"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Schedule Appointment
        </button>
      </form>

      {result && <div className="submission-status">{result}</div>}
    </div>
    <Footer/>
    </>

  );
}
