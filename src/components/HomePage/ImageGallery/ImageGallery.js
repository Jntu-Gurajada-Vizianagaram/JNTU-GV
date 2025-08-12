import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useCallback } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ImageGallery.css";
import "./TypingEffect.css";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset on text change
    let index = 0;
    let timerId;

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Use slice instead of appending
        index++;
        timerId = setTimeout(type, speed);
      }
    };

    type();
    return () => clearTimeout(timerId); // Cleanup
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
      setImages(apiData);
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
    <div className="mainDivIG">
      <div className="leftDivGallery">
        <TypingEffect text="Welcome to JNTU Gurajada, Vizianagaram" speed={100} />
        <p>
          At JNTU Gurajada, Vizianagaram, we are dedicated to sculpting minds through innovative teaching, cutting-edge research, and a vibrant community engagement. Our mission is to empower students with a thirst for knowledge that transcends borders.
          <br />
          Located across six districts, offering diverse programs in Engineering, Pharmacy, and Management. With a rich history JNTU-GV stands as a beacon of academic excellence and community synergy.
        </p>
        <Link to="/about-us/about-jntugv">
          <button type="button" className="btn view-more btn-info">View More</button>
        </Link>
      </div>

      <div className="mainImageGallery fixed-carousel-height">
        {loading ? (
          <div className="spinner-placeholder">
            <Spinner animation="grow" variant="primary" role="status" />
          </div>
        ) : (
         <Carousel fade interval={4000}>
  {images.map((image, index) => (
    <Carousel.Item key={index}>
      <img
        className="ig-image"
        src={image.imglink}
        alt={image.description !== "NA" ? image.description : `Slide ${index + 1}`}
        width="1200"
        height="400"
        {...(index === 0
          ? { fetchpriority: "high" } // First image: high priority
          : { loading: "lazy" }       // Other images: lazy load
        )}
        style={{ objectFit: "cover" }}
      />
      {image.description !== "NA" && (
        <Carousel.Caption>
          <div className="carouselText">{image.description}</div>
        </Carousel.Caption>
      )}
    </Carousel.Item>
  ))}
</Carousel>

        )}
      </div>
    </div>
  );
}

export default ImageGallery;
