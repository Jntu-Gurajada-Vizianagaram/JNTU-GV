import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useCallback } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import "./ImageGallery.css";
import "./TypingEffect.css";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    let timerId;

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        timerId = setTimeout(type, speed);
      }
    };

    type();
    return () => clearTimeout(timerId);
  }, [text, speed]);

  return (
    <div className="typing-container">
      <h1>
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

      // Sort the images by date, newest first
      const sortedData = apiData.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Keep only the 5 most recent images for the carousel
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
    <Box className="mainDivIG">
      <Box className="leftDivGallery">
        <TypingEffect text="Welcome to JNTU Gurajada, Vizianagaram" speed={100} />
        <Typography variant="body1" className="gallery-description">
          At JNTU Gurajada, Vizianagaram, we are dedicated to sculpting minds through innovative teaching, cutting-edge research, and a vibrant community engagement. Our mission is to empower students with a thirst for knowledge that transcends borders.
        </Typography>
        <Typography variant="body2" className="gallery-subtext">
          Located across six districts, offering diverse programs in Engineering, Pharmacy, and Management. With a rich history JNTU-GV stands as a beacon of academic excellence and community synergy.
        </Typography>
        <Link to="/about-us/about-jntugv">
          <Button 
            variant="contained" 
            className="view-more-btn"
            endIcon={<ArrowForwardIcon />}
          >
            View More
          </Button>
        </Link>
      </Box>

      <Box className="mainImageGallery fixed-carousel-height">
        {loading ? (
          <Box className="spinner-placeholder">
            <Spinner animation="grow" variant="primary" role="status" />
          </Box>
        ) : (
          <Carousel fade interval={4000} className="image-carousel">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <Box className="carousel-item-wrapper">
                  <img
                    className="ig-image"
                    src={image.imglink}
                    alt={image.title !== "NA" ? image.title : image.description}
                    width="1200"
                    height="400"
                    {...(index === 0
                      ? { fetchpriority: "high" }
                      : { loading: "lazy" }
                    )}
                    style={{ objectFit: "cover" }}
                  />
                  <Box className="carousel-overlay"></Box>
                  {image.title !== "NA" && (
                    <Carousel.Caption className="carousel-caption-wrapper">
                      <Box className="carouselText">{image.title}</Box>
                    </Carousel.Caption>
                  )}
                </Box>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Box>
      
      {/* Link to full gallery
      <Link to="/gallery" className="gallery-link">
        <PhotoLibraryIcon className="gallery-link-icon" />
        <span>View Full Gallery</span>
        <ArrowForwardIcon className="arrow-icon" />
      </Link> */}
    </Box>
  );
}

export default ImageGallery;
