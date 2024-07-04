import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.jntugv.edu.in/api/webadmin/carousel-images"
        );
        const apiData = await response.json();
        console.log(apiData);
        setImages(apiData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, []);

  return (
   
    <div className="mainDivIG">
      <div className="leftDivGallery">
        <h2 className="welcome">Welcome to JNTU Gurajada, Vizianagaram</h2>
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
        <Carousel fade>
          {images.map((image, index) => (
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
      </div>
    </div>
  );
}

export default ImageGallery;
