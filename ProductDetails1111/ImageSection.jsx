import React, { useState } from "react";
import image1 from "../assets/header5.webp";
import image2 from "../assets/header4.webp";
const ImagesSection = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="col-md-5">
      <div className="image-slider">
        <div className="main-img" onClick={handleNextClick}>
          <img
            src={images[currentIndex]}
            alt="Main"
            style={{ width: "100%", height: "360px" }}
          />
        </div>
      </div>
      <div className="row custom-container my-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-4  ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
