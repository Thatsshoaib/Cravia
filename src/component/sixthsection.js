import React, { useState } from "react";

const EnquirySection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "988e4550-7a73-405e-8484-2bff76945d9a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); 
      } else {
        console.error("Error:", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <h2 className="mb-4">Enquiry Form</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" 
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" 
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message" 
                className="form-control"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
            <span style={{height:"50px"}}>{result}</span>
          </form>
        </div>

        <div className="col-lg-6 col-md-12 text-center text-lg-end">
          <h2>Get in touch to book your First appointment</h2>
          <p>
            Cravia General Hospital <br /> 123 Wellness Avenue Springfield, <br /> XY
            98765
          </p>
          <p>
            <ul className="list-unstyled">
              <li>999-888-7770</li>
              <li>CraviaHealthCare00@gmail.com</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnquirySection;
