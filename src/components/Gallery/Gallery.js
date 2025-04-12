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

        // Duplicate to simulate continuous scroll
        const allImages = data.slice(0, 20).map(photo => ({
          image: photo.imagelink,
          description: photo.description,
        }));
        const duplicated = [...allImages, ...allImages];
        setImages(duplicated);
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
    <div
      key={index}
      className="gallery-image-wrapper"
      onClick={() => handleShowModal(image.image, image.description)}
    >
      <img
        src={image.image}
        alt={`JNTUGV ${image.description}`}
        className="gallery-image"
        loading="lazy"
      />
    </div>
  ))}
</div>
      </div>

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />

      <Link to="/gallery" className="show-all-link">
        Show All
      </Link>
    </div>
  );
}

export default Gallery;
