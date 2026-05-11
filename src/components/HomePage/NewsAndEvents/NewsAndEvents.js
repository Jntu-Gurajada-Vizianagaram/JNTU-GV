import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal";
import "./NewsandEvent.css";

const NewsAndEvents = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const [imageDimensions, setImageDimensions] = useState({});
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleEventImages = (eventIndex) => {
    setExpandedEvent((current) => (current === eventIndex ? null : eventIndex));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/gallery/all-gallery-images");
        const data = await response.json();

        const sortedData = data
          .filter((photo) => photo.imagelink)
          .sort((a, b) => b.id - a.id);

        setNewsItems(sortedData);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const groupedEvents = useMemo(() => {
    const groups = {};

    newsItems.forEach((photo) => {
      const fallbackTitle = (photo.description || "").split(/\r?\n/)[0] || "Untitled Event";
      const key = (photo.event_name || photo.title || fallbackTitle).trim();
      if (!key) return;

      const dims = imageDimensions[photo.imagelink];
      if (dims && dims.width <= dims.height) return; // Skip portrait images if dimensions known

      if (!groups[key]) {
        groups[key] = {
          title: key,
          description: photo.description || "",
          publishedDate: photo.uploaded_date || photo.date || '',
          images: [],
          latestId: photo.id || 0,
        };
      }

      groups[key].images.push(photo.imagelink);

      if (photo.uploaded_date) {
        const currentPublished = new Date(groups[key].publishedDate || 0);
        const candidate = new Date(photo.uploaded_date);
        if (candidate > currentPublished) {
          groups[key].publishedDate = photo.uploaded_date;
        }
      }

      if (photo.id && photo.id > groups[key].latestId) {
        groups[key].latestId = photo.id;
      }
    });

    return Object.values(groups).sort((a, b) => b.latestId - a.latestId);
  }, [newsItems, imageDimensions]);

  // Load dimensions only for images that will be displayed
  useEffect(() => {
    const loadDimensions = async () => {
      const allImages = groupedEvents.flatMap(event => event.images);
      const uniqueImages = [...new Set(allImages)];

      const dimensions = { ...imageDimensions };
      const promises = uniqueImages
        .filter(src => !dimensions[src])
        .map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              dimensions[src] = { width: img.width, height: img.height };
              resolve();
            };
            img.onerror = () => resolve();
            img.src = src;
            // Timeout after 5 seconds to avoid hanging
            setTimeout(resolve, 5000);
          });
        });

      await Promise.all(promises);
      setImageDimensions(dimensions);
    };

    if (groupedEvents.length > 0) {
      loadDimensions();
    }
  }, [groupedEvents, imageDimensions]);

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

  const showAll = location.pathname === "/news-and-events";
  const latestEvent = groupedEvents[0] || null;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const eventCards = showAll ? groupedEvents : latestEvent ? [latestEvent] : [];

  return (
    <div className="news-and-events">
      <h1 className="text-center mb-4 notifications-title">Latest News and Events</h1>

      {loading ? (
        <div className="spinner-container">
          <div className="spinner-grow text-primary" role="status" />
        </div>
      ) : (
        <div className="news-and-events-display">
          {eventCards.map((event, eventIndex) => {
            const hasSingleImage = event.images.length === 1;
            const singleImage = hasSingleImage ? event.images[0] : null;
            const leftImage = !hasSingleImage && event.images.length >= 2 ? event.images[0] : null;
            const middleImage = !hasSingleImage && event.images.length >= 3 ? event.images[1] : null;
            const rightImage = !hasSingleImage
              ? event.images.length === 2
                ? event.images[1]
                : event.images.length >= 3
                ? event.images[2]
                : null
              : null;
            const extraImages = !hasSingleImage ? event.images.slice(3) : [];
            const showExtra = expandedEvent === eventIndex;

            return (
              <div key={`event-${eventIndex}`} className="news-event-card">
                <div className="news-event-header">
                  <h2>{event.title}</h2>
                  {event.publishedDate && (
                    <span className="news-event-date">Published on {formatDate(event.publishedDate)}</span>
                  )}
                </div>

                <div className={`news-event-grid ${hasSingleImage ? 'news-event-grid-single' : ''}`}>
                  {hasSingleImage ? (
                    <>
                      <div className="news-event-grid-main">
                        <p className="news-event-description">{event.description}</p>
                      </div>
                      <div className="news-event-card-image news-event-card-image--single">
                        <img
                          src={singleImage}
                          alt={`${event.title} image`}
                          onClick={() => handleShowModal(singleImage, event.title, event.description)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {leftImage && (
                        <div className="news-event-side-image">
                          <div className="news-event-card-image">
                            <img
                              src={leftImage}
                              alt={`${event.title} left image`}
                              onClick={() => handleShowModal(leftImage, event.title, event.description)}
                            />
                          </div>
                        </div>
                      )}

                      <div className="news-event-grid-main">
                        <p className="news-event-description">{event.description}</p>
                        {middleImage && (
                          <div className="news-event-inline-image">
                            <img
                              src={middleImage}
                              alt={`${event.title} middle image`}
                              onClick={() => handleShowModal(middleImage, event.title, event.description)}
                            />
                          </div>
                        )}
                        {extraImages.length > 0 && (
                          <>
                            {showExtra && (
                              <div className="news-event-extra-images">
                                {extraImages.map((imageSrc, idx) => (
                                  <div key={`extra-${eventIndex}-${idx}`} className="news-event-extra-image-card">
                                    <img
                                      src={imageSrc}
                                      alt={`${event.title} extra image ${idx + 1}`}
                                      onClick={() => handleShowModal(imageSrc, event.title, event.description)}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="news-event-more-action">
                              <button
                                className="news-event-more-btn"
                                onClick={() => toggleEventImages(eventIndex)}
                              >
                                {showExtra
                                  ? 'Show Less Photos'
                                  : `Show ${extraImages.length} More Photo${extraImages.length > 1 ? 's' : ''}`}
                              </button>
                            </div>
                          </>
                        )}
                      </div>

                      {rightImage && (
                        <div className="news-event-side-image">
                          <div className="news-event-card-image">
                            <img
                              src={rightImage}
                              alt={`${event.title} right image`}
                              onClick={() => handleShowModal(rightImage, event.title, event.description)}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {!showAll && groupedEvents.length > 1 && (
            <div className="news-event-actions">
              <button className="view-more-btn" onClick={() => navigate('/news-and-events')}>
                View All Past News
              </button>
            </div>
          )}
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