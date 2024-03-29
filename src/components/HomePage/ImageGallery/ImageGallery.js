import React from "react";
import "./ImageGallery.css";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import image8 from "../../../assets/ImageGalleryPictures/image8.jpg";
import image1 from "../../../assets/ImageGalleryPictures/image1.jpg";

import image9 from "../../../assets/ImageGalleryPictures/image9.jpg";
import image10 from "../../../assets/ImageGalleryPictures/image10.jpg";
import image11 from "../../../assets/ImageGalleryPictures/image11.jpg";
import Rimage10 from "../../../assets/ImageGalleryPictures/Rimage10.jpg";
import Rimage11 from "../../../assets/ImageGalleryPictures/Rimage11.jpg";
import Rimage12 from "../../../assets/ImageGalleryPictures/Rimage12.jpg";
import Rimage13 from "../../../assets/ImageGalleryPictures/Rimage13.jpg";
import Rimage14 from "../../../assets/ImageGalleryPictures/Rimage14.jpg";

const images = [
  image11,
  image10,
  Rimage13,
  Rimage11,
  Rimage12,
  Rimage14,
  Rimage10,
  image9,
  image8,
  image1,
];

function ImageGallery() {
  return (
    <div className="mainDivIG">
      <div className="mainImageGallery">
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="ig-image"
                src={image}
                alt={`Slide ${index + 1}`}
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
