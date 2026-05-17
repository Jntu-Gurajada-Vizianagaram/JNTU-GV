import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useCallback, useRef } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import "./ImageGallery.css";

const TypingEffect = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setDisplayedText("");
    indexRef.current = 0;
    
    if (timerRef.current) clearTimeout(timerRef.current);

    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
        timerRef.current = setTimeout(type, speed);
      }
    };

    type();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, speed]);

  return (
    <div className="typing-container">
      <h1 className="typing-text">
        {displayedText}
        <span className="caret"></span>
      </h1>
    </div>
  );
};

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.jntugv.edu.in/api/webadmin/carousel-images"
      );
      const apiData = await response.json();

      // Sort the images by date safely
      const sortedData = apiData.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Keep only the 5 most recent images
      const recentImages = sortedData.slice(0, 5);
      setImages(recentImages);
    } catch (err) {
      console.error("Image fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <Box className="premium-gallery-section">
      <div className="gallery-grid-container">
        
        {/* Left Information Panel */}
        <Box className="gallery-info-panel">
          <TypingEffect text="Welcome to JNTU Gurajada, Vizianagaram" speed={100} />
          
          <Typography variant="body1" className="gallery-main-description">
            At JNTU Gurajada, Vizianagaram, we are dedicated to sculpting minds through innovative teaching, cutting-edge research, and vibrant community engagement. Our mission is to empower students with a thirst for knowledge that transcends borders.
          </Typography>
          
          <Typography variant="body2" className="gallery-secondary-subtext">
            Located across six districts, offering diverse programs in Engineering, Pharmacy, and Management. With a rich history, JNTU-GV stands as a beacon of academic excellence and community synergy.
          </Typography>
          
          <Link to="/about-us/about-jntugv" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              className="gallery-action-btn"
              endIcon={<ArrowForwardIcon />}
            >
              Discover More
            </Button>
          </Link>
        </Box>

        {/* Right Carousel Showcase Panel */}
        <Box className="gallery-showcase-panel">
          {loading ? (
            <Box className="gallery-loading-skeleton">
              <Spinner animation="border" variant="primary" role="status" className="custom-spinner" />
              <span className="visually-hidden">Loading Gallery Assets...</span>
            </Box>
          ) : (
            <div className="carousel-frame-wrapper">
              <Carousel 
                fade 
                indicators={true}
                interval={5000} 
                className="premium-image-carousel"
              >
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-media-aspect">
                      <img
                        className="carousel-img-fluid"
                        src={image.imglink}
                        alt={image.title !== "NA" ? image.title : image.description}
                        fetchpriority={index === 0 ? "high" : "low"}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="carousel-ambient-gradient"></div>
                      
                      {image.title !== "NA" && (
                        <Carousel.Caption className="custom-caption-placement">
                          <div className="caption-blur-box">
                            <h3 className="caption-main-title">{image.title}</h3>
                          </div>
                        </Carousel.Caption>
                      )}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              
              {/* Floating Full Gallery Trigger */}
              <Link to="/gallery" className="floating-gallery-link">
                <PhotoLibraryIcon className="trigger-icon" />
                <span>Explore Full Gallery</span>
                <ArrowForwardIcon className="arrow-pulse" />
              </Link>
            </div>
          )}
        </Box>

      </div>
    </Box>
  );
}

export default ImageGallery;