import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./CompleteGallery.css";
import { CG } from "./CG";
import { MdOutlineArrowBackIos } from "react-icons/md";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";

function CompleteGallery() {
  const images = CG ? [...CG].reverse() : [];
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
   
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
    <div className="complete-gallery-container">
      <h1>Gallery of JNTUGV</h1>

      <Link to="/" className="back-to-home">
        <MdOutlineArrowBackIos />
        Back to Homepage
      </Link>

      <div className="gallery-links">

        <Link to="/events/ityuktha-2k24" className="event-day">
          Ityuktha 2K24
        </Link>
        <Link to="/events/eclectique-2k24" className="event-day">
          Eclectique 2K24
        </Link>
        <Link to="/events/womens-day" className="event-day">
          Women's Day
        </Link>
        <Link to="/events/eisen-2k24" className="event-day">
          Eisen 2K24
        </Link>
        <Link to="/events/cresense-2k24" className="event-day">
          Cresense 2K24
        </Link>
        {/*  <Link to="/events/inauguration-event" className="event-day">
          Inauguration Event
          </Link>*/}
        <Link to="/events/republic-day" className="event-day">
          Republic Day Images
        </Link>
      </div>

      {/* Link to the homepage */}
      <div className="image-grid">
        {images.map((imageObj, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={imageObj.image}
              alt={`JNTUGV ${images.length - index}`}
              className="grid-image"
              onClick={() =>
                handleShowModal(imageObj.image, imageObj.description)
              }
            />
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
}

export default CompleteGallery;
