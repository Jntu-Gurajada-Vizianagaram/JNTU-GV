import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./NewsandEvent.css";

const NewsAndEvents = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();

        const sortedData = data.sort((a, b) => b.id - a.id);

        const seenDescriptions = new Set();
        const uniqueEvents = [];

        for (const photo of sortedData) {
          if (
            photo.id % 2 === 0 &&
            !seenDescriptions.has(photo.description) &&
            photo.imagelink &&
            photo.event_name &&
            photo.description
          ) {
            seenDescriptions.add(photo.description);
            uniqueEvents.push({
              image: photo.imagelink,
              title: photo.event_name,
              description: photo.description,
            });
          }
          if (uniqueEvents.length >= 6) break;
        }

        setLatestEvents(uniqueEvents);
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
    setSelectedTitle(title);
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedDescription('');
  };

  return (
    <div className="news-and-events">
      <h1 className="text-center my-4">Latest News and Events</h1>

      {loading ? (
        <div className="spinner-container d-flex justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="news-and-events-display d-flex flex-wrap justify-content-center">
          {latestEvents.map((item, index) => (
            <div key={index} className="news-and-events-container m-3 text-center">
              <img
                src={item.image}
                alt={item.title}
                onClick={() => handleShowModal(item.image, item.title, item.description)}
                className="img-fluid"
                style={{ maxHeight: '200px', cursor: 'pointer' }}
              />
              <div className="desc-cont mt-2">
                <div className="desc-container fw-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageTitle={selectedTitle}
        imageDescription={selectedDescription}
      />
    </div>
  );
};

export default NewsAndEvents;