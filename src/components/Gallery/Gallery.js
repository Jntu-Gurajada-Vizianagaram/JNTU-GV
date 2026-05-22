import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageModal from "../HomePage/NewsAndEvents/ImageModal";
import "./Gallery.css";
import CircularProgress from "@mui/material/CircularProgress";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [displayCount] = useState(12);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();
        
        const allImages = data.map(photo => {
          const rawDescription = photo.description || "";
          const fallbackTitle = rawDescription.split(/\r?\n/)[0] || "";
          return {
            image: photo.imagelink,
            title: photo.event_name || photo.title || fallbackTitle || "Gallery Image",
            description: rawDescription,
          };
        });

        const seenTitles = new Set();
        const uniqueImages = allImages.filter((item) => {
          const titleKey = (item.title || "").trim().toLowerCase();
          if (seenTitles.has(titleKey)) return false;
          seenTitles.add(titleKey);
          return true;
        });

        setTotalCount(uniqueImages.length);
        setImages(uniqueImages);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleShowModal = (image, title, description) => {
    setSelectedImage(image);
    setSelectedTitle(title || '');
    setSelectedDescription(description || '');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedDescription('');
  };


  const visibleImages = images.slice(0, displayCount);

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
                onClick={() => handleShowModal(image.image, image.title, image.description)}
              >
                <div className="image-overlay">
                  <PhotoLibraryIcon className="view-icon" />
                </div>
                <img
                  src={image.image}
                  alt={`JNTUGV - ${image.title}`}
                  className="gallery-image"
                  loading="lazy"
                />
                {image.title && (
                  <div className="image-caption">{image.title}</div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageTitle={selectedTitle}
        imageDescription={selectedDescription}
      />

      <div className="gallery-actions">
              <button 
                className="view-more-btn"
                onClick ={() => navigate("/gallery")}
              >
               View Complete Gallery
              </button>
            </div>
    </div>
  );
}

export default Gallery;
