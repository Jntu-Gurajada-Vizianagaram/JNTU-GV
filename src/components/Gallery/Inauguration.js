import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./RepublicDay.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const importAll = (r) => r.keys().map(r);
const imageContext = require.context(
  "../../assets/Gallery/Inauguration Event/",
  false,
  /\.(jpeg)$/
);
const images = importAll(imageContext);

const Inauguration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="republic-day-main">
      <Link to="/gallery" className="back-to-home">
        <MdOutlineArrowBackIos />
        Back to Gallery
      </Link>

      <div className="rp-scroll-container">
        <div className="rp-imagescroll">
          {images.map((image, index) => (
            <div
              key={index}
              className={`rp-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`Republic Day ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <div className="rp-icons">
          <IconButton onClick={handlePrevClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className="rp-imageDisplay">
          <img
            src={images[currentIndex]}
            alt={`Republic Day ${currentIndex + 1}`}
            // width={1000}
            height={500}
          />
        </div>
        <div className="rp-icons">
          <IconButton onClick={handleNextClick}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Inauguration;
