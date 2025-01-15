import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/wallpaper.webp";
import Img2 from "../assets/carouselimagetwo.jpg";
import Img3 from "../assets/carouselimagethree.jpg";
import "../Styles/firstsection.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const commonContent = {
    heading: "Welcome to Cravia HealthCare",
    description: "Your Journey to Better Health Starts Here.",
    buttonText: "Discover More",
  };

  return (
    <div className="carousel-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide" />
          <div className="carousel-content">
            <h3>{commonContent.heading}</h3>
            <p>{commonContent.description}</p>
            <div className="btn-wrapper">
              <a href="#learn-more" className="carousel-btn">
                {commonContent.buttonText}
              </a>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />
          <div className="carousel-content">
            <h3>{commonContent.heading}</h3>
            <p>{commonContent.description}</p>
            <div className="btn-wrapper">
              <a href="#learn-more" className="carousel-btn">
                {commonContent.buttonText}
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Img3} alt="Third slide" />
          <div className="carousel-content">
            <h3>{commonContent.heading}</h3>
            <p>{commonContent.description}</p>
            <div className="btn-wrapper">
              <a href="#learn-more" className="carousel-btn">
                {commonContent.buttonText}
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;