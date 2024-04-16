import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageGallery.css";

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
      <div className="mainImageGallery">
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="ig-image"
                src={image.imglink}
                alt={`Slide ${image.description}`}
              />
              <Carousel.Caption>
                <div className="carouselText"></div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageGallery;
