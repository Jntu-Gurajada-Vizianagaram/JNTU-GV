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
          if (uniqueEvents.length >= 5) break; // Optimized for a premium 5-item asymmetric block setup
        }

        setLatestEvents(uniqueEvents);
      } catch (error) {
        console.error("Failed to fetch media assets bundle:", error);
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

  // Split datasets cleanly into asymmetric showcase zones
  const spotlightEvent = latestEvents[0];
  const secondaryEvents = latestEvents.slice(1, 5);

  return (
    <section className="magazine-news-section">
      <div className="magazine-container">
        
        {/* Modern Asymmetric Left Header Stack */}
        <header className="magazine-header-block">
          <div className="accent-pill-indicator">Campus Hub</div>
          <h2 className="magazine-title">News &amp; Chronicles</h2>
          <p className="magazine-subtitle">Exploring the immediate horizons of academic discovery, community initiatives, and milestones at JNTUGV.</p>
          <div className="editorial-ruler"></div>
        </header>

        {loading ? (
          <div className="spinner-container-magazine">
            <div className="spinner-border text-dark custom-thick-spinner" role="status" />
          </div>
        ) : (
          <div className="magazine-grid-viewport">
            
            {/* Highlight Panel Zone: Spotlight Feature */}
            {spotlightEvent && (
              <div 
                className="spotlight-hero-card"
                onClick={() => handleShowModal(spotlightEvent.image, spotlightEvent.title, spotlightEvent.description)}
              >
                <div className="spotlight-image-container">
                  <img src={spotlightEvent.image} alt={spotlightEvent.title} />
                  <div className="spotlight-scrim-curtain"></div>
                  <span className="spotlight-floating-tag">Latest Update</span>
                </div>
                <div className="spotlight-content-panel">
                  <h3 className="spotlight-heading-title">{spotlightEvent.title}</h3>
                  <p className="spotlight-summary-snippet">{spotlightEvent.description}</p>
                  <div className="spotlight-action-footer">
                    <span className="editorial-link-btn">Read Spotlight Brief</span>
                  </div>
                </div>
              </div>
            )}

            {/* Asymmetric Secondary Feed Panel Zone */}
            <div className="magazine-feed-column">
              {secondaryEvents.map((item, index) => (
                <article 
                  key={index} 
                  className="magazine-feed-row-item"
                  onClick={() => handleShowModal(item.image, item.title, item.description)}
                >
                  <div className="feed-image-frame">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="feed-text-frame">
                    <span className="feed-meta-label">Event Bulletin</span>
                    <h4 className="feed-article-title">{item.title}</h4>
                    <p className="feed-article-snippet">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}
      </div>

      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={selectedImage}
        imageTitle={selectedTitle}
        imageDescription={selectedDescription}
      />
    </section>
  );
};

export default NewsAndEvents;