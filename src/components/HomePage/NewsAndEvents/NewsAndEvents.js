import React, { useState } from "react";
import "./NewsandEvent.css";
import { CG } from "../../Gallery/CG.js";
import ImageModal from "./ImageModal";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsAndEvents = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');

  const recentImages = CG.slice(-6); // Get the last 6 images from CG.js

  const handleShowModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedDescription('');
  };

  return (
    <div className="news-and-events">
      <h1> Latest News and Events</h1>
      <div className="news-and-events-display">
        {recentImages.map((image, index) => (
          <div key={index} className="news-and-events-container">
            <img
              src={image.image}
              alt={`JNTUGV ${image.description}`}
              height="250px"
              width="300px"
              onClick={() => handleShowModal(image.image, image.description)}
              style={{ cursor: 'pointer' }}
            />
            <div className="desc-cont">
              <div className="desc-container">{image.description}</div>
              {/* <div className="date-box">
                <h4>Jun</h4>
                <h5>20</h5>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />
    </div>
  );
};

export default NewsAndEvents;
