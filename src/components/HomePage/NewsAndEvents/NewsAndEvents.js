import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./NewsandEvent.css";

const NewsAndEvents = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true); // ⬅️ loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();

        const sortedData = data.sort((a, b) => b.id - a.id);

        const seenDescriptions = new Set();
        const uniqueEvents = [];

        for (const photo of sortedData) {
          if (photo.id % 2 === 0 && !seenDescriptions.has(photo.description)) {
            seenDescriptions.add(photo.description);
            uniqueEvents.push({
              image: photo.imagelink,
              description: photo.description,
            });
          }
          if (uniqueEvents.length >= 6) break;
        }

        setLatestEvents(uniqueEvents);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false); // ✅ End loading
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
      <h1>Latest News and Events</h1>

      {loading ? (
        <div className="spinner-container">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      
      ) : (
        <div className="news-and-events-display">
          {latestEvents.map((item, index) => (
            <div key={index} className="news-and-events-container">
              <img
                src={item.image}
                alt={`JNTUGV ${item.description}`}
                onClick={() => handleShowModal(item.image, item.description)}
                style={{ cursor: 'pointer' }}
              />
              <div className="desc-cont">
                <div className="desc-container">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}

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
