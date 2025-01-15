import React, { useState } from "react";
import General from "../assets/general.jpeg";
import Cardiologist from "../assets/cardiologist.jpeg";
import Nephrologist from "../assets/nephrologist.jpeg";
import Gynocologist from "../assets/gynocologist.jpg";
import Pediatrician from "../assets/pediatrician.jpg";
import Dentist from "../assets/dentist.png";
import Gsurgeaon from "../assets/Gsurgeon.jpeg";
import Neurologist from "../assets/neurologist.jpeg";
import "../Styles/thirdsection.css";
import Modal from "react-bootstrap/Modal";

// Reusable Card Component
const Card = ({ image, title, text, link, setOpen }) => (
  <div className="  col-md-3 col-sm-6 col-12 mb-4">
    <div className="card card-equal">
      <img src={image} className="card-img-top" alt={`${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

        <button className="btn btn-primary m-2">
          <a href={link} className="text-decoration-none text-white">
            Appoint Now
          </a>
        </button>
        <button className="btn btn-primary" onClick={setOpen}>
          View More
        </button>
      </div>
    </div>
  </div>
);

export default function Thirdsection() {
  const [open, setOpen] = useState({ open: false, data: null });
  console.log(open, "datadata");
  const handleOnChange = (data) => {
    setOpen({ open: true, data: data });
  };

  const cardData = [
    {
      image: General,
      title: "General",
      text: "General medicine deals with primary care and internal medicine concerns.",
      link: "/appointment",
    },
    {
      image: Cardiologist,
      title: "Cardiologist",
      text: "Cardiology is a medical specialty concerned with disorders of the heart.",
      link: "/appointment",
    },
    {
      image: Nephrologist,
      title: "Nephrologist",
      text: "Nephrology focuses on kidney health and diseases.",
      link: "/appointment",
    },
    {
      image: Gynocologist,
      title: "Gynecologist",
      text: "Gynecology specializes in women's reproductive health.",
      link: "/appointment",
    },
    {
      image: Pediatrician,
      title: "Pediatrician",
      text: "Pediatrics specializes in child health and diseases.",
      link: "/appointment",
    },
    {
      image: Dentist,
      title: "Dentist",
      text: "Dentistry focuses on oral health and treatment of teeth.",
      link: "/appointment",
    },
    {
      image: Gsurgeaon,
      title: "Surgeon",
      text: "Specialists in surgical procedures for medical treatments.",
      link: "/appointment",
    },
    {
      image: Neurologist,
      title: "Neurologist",
      text: "Neurology focuses on brain and nervous system disorders.",
      link: "/appointment",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center mb-5" style={{ color: "rgb(14, 80, 74)" }}>
        Our Departments
      </h2>
      <div className="row">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            link={card.link}
            setOpen={() => handleOnChange(card)}
          />
        ))}
      </div>
      <div>
        <Modal size="md" show={open?.open} onHide={() => setOpen(false)}>
          <Modal.Body>
            <div className="d-flex flex-column justify-content-center ">
              <h1>{open?.data?.title}</h1>
              <img src={open?.data?.image} alt="error" />
              <p>{open?.data?.text}</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
