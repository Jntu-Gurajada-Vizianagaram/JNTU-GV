import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import "./Gallery.css";
import CircularProgress from "@mui/material/CircularProgress";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [displayCount, setDisplayCount] = useState(12);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();
        
        setTotalCount(data.length);
        
        const allImages = data.map(photo => ({
          image: photo.imagelink,
          description: photo.description,
        }));
        
        setImages(allImages);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
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

  const handleViewMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  const visibleImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <PhotoLibraryIcon className="gallery-header-icon" />
        <h1 className="gallery-heading">Gallery</h1>
        {totalCount > 0 && (
          <span className="gallery-count">{totalCount} Photos</span>
        )}
      </div>

      {loading ? (
        <div className="spinner-wrapper">
          <CircularProgress style={{ color: "#340468" }} />
        </div>
      ) : (
        <>
          <div className="image-grid-wrapper">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="gallery-image-card"
                onClick={() => handleShowModal(image.image, image.description)}
              >
                <div className="image-overlay">
                  <PhotoLibraryIcon className="view-icon" />
                </div>
                <img
                  src={image.image}
                  alt={`JNTUGV ${image.description}`}
                  className="gallery-image"
                  loading="lazy"
                />
                {image.description && (
                  <div className="image-caption">{image.description}</div>
                )}
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="gallery-actions">
              <button 
                className="view-more-btn"
                onClick={handleViewMore}
              >
                View More (+{images.length - displayCount} remaining)
              </button>
            </div>
          )}
        </>
      )}

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageDescription={selectedDescription}
      />

      <Link to="/gallery" className="show-all-link">
        View Full Gallery
      </Link>
    </div>
  );
}

export default Gallery;
