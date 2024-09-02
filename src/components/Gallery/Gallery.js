import React, { useState,useEffect } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";

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


  const recentImages = images.slice(-15); // Get the last 15 images from CG.js



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
          {recentImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`JNTUGV ${image.description}`}
              onClick={() => handleShowModal(image.image, image.description)}
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
