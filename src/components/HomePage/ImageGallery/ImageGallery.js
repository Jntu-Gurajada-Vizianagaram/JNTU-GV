import React, { useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageGallery.css";
import { Link } from "react-router-dom";
import './TypingEffect.css';

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Welcome to JNTU Gurajada, Vizianagaram';
  const typingSpeed = 100;

  useEffect(() => {
    let currentText = '';
    let charIndex = 0;

    const typeCharacter = () => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        setDisplayedText(currentText);
        charIndex++;
        setTimeout(typeCharacter, typingSpeed);
      }
    };

    typeCharacter();
  }, []);

  return (
    <div className="typing-container">
      <h1>{displayedText}<span className="caret"></span></h1>
    </div>
  );
};

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.jntugv.edu.in/api/webadmin/carousel-images"
        );
        const apiData = await response.json();
        setImages(apiData);
        setLoading(false); // Turn off loading after images are fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Even on error, turn off loading
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="mainDivIG">
      <div className="leftDivGallery">
        <TypingEffect />
        <p>
          At JNTU Gurajada, Vizianagaram, we are dedicated to sculpting minds through innovative teaching, cutting-edge research, and a vibrant community engagement. Our mission is to empower students with a thirst for knowledge that transcends borders.
          <br />
          Located across six districts, offering diverse programs in Engineering, Pharmacy, and Management. With a rich history JNTU-GV stands as a beacon of academic excellence and community synergy.
        </p>
        <Link to="/about-us/about-jntugv">
          <button type="button" className="btn view-more btn-info">View More</button>
        </Link>
      </div>

      <div className="mainImageGallery">
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="grow" variant="primary" />
            <p>Loading images...</p>
          </div>
        ) : (
          <Carousel fade>
            {Array.isArray(images) && images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="ig-image"
                  src={image.imglink}
                  alt={`Slide ${image.description}`}
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
