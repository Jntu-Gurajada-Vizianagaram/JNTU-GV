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
            !seenDescriptions.has(photo.description) &&
            photo.imagelink &&
            photo.event_name &&
            !
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
      <h1 className="text-center mb-4">Latest News and Events</h1>

      {loading ? (
        <div className="spinner-container">
          <div className="spinner-grow text-primary" role="status" />
        </div>
      ) : (
  <div className="news-and-events-display">
  {latestEvents.slice(0, 4).map((item, index) => (
    <div key={index} className="news-and-events-container">
      <img
        src={item.image}
        alt={item.title}
        onClick={() => handleShowModal(item.image, item.title, item.description)}
      />
      <div className="desc-cont">
        <div className="desc-container fw-bold">{item.title}</div>
      </div>
    </div>
  ))}

  {/* Second row with 2 cards centered */}
  <div className="news-and-events-second-row">
    {latestEvents.slice(4, 6).map((item, index) => (
      <div key={index} className="news-and-events-container">
        <img
          src={item.image}
          alt={item.title}
          onClick={() => handleShowModal(item.image, item.title, item.description)}
        />
        <div className="desc-cont">
          <div className="desc-container fw-bold">{item.title}</div>
        </div>
      </div>
    ))}
  </div>
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
