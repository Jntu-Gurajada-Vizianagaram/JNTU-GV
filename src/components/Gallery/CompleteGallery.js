import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import "./CompleteGallery.css";

function CompleteGallery() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');

  // Fetch images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();
        
        // Extract images from all events
        const allImages = data.map(photo => ({
            image: photo.imagelink,
            description: photo.description,
          }))
       
        
        // Reverse the images array to match previous behavior
        setImages(allImages);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

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
        <Link to="/events/republic-day" className="event-day">
          Republic Day Images
        </Link>
      </div>

      <div className="image-grid">
        {images.map((imageObj, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={imageObj.image}
              alt={`JNTUGV ${images.length - index}`}
              loading="lazy"
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
