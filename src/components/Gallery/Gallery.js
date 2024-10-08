import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();
        console.log(data);

        // Extract images from all events and limit to first 10
        const allImages = data.slice(0, 15).map(photo => ({
            image: photo.imagelink,
            description: photo.description,
          }));
        
        setImages(allImages);  // Set the images state with the first 10 images
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
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="image-gallery">
        <div className="image-scroll">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`JNTUGV ${image.description}`}
              onClick={() => handleShowModal(image.image, image.description)}
              className="gallery-image"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />

      {/* Hyperlink at the bottom right corner */}
      <Link
        to="/gallery" // Replace with your desired link
        rel="noopener noreferrer"
        style={{
          color: "#ffffff", // White text color
        }}
      >
        Show All
      </Link>
    </div>
  );
}

export default Gallery;
