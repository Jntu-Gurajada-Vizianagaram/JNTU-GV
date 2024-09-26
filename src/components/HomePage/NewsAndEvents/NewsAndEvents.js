import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./NewsandEvent.css";

const NewsAndEvents = () => {
  const [evenImages, setEvenImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();
        
        // Extract images from all events
        const evenImages = data
        .filter(photo => photo.id % 2 === 0)
        .map(photo => ({
          image: photo.imagelink,
          description: photo.description,
        }))
        .reverse();
      
        setEvenImages(evenImages.slice(-6));
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
    <div className="news-and-events">
      <h1> Latest News and Events</h1>
      <div className="news-and-events-display">
        {evenImages.map((image,index) => (
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
