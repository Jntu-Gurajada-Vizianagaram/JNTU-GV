import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageGallery.css";
import TeachersDay from "../../assets/ImageGalleryPictures/TeachersDay.jpg";
import IndependenceDay1 from "../../assets/ImageGalleryPictures/IndependenceDay1.JPG";
import IndependenceDay2 from "../../assets/ImageGalleryPictures/IndependenceDay2.JPG";
import IndependenceDay3 from "../../assets/ImageGalleryPictures/independenceDay3.JPG";
import Expo from "../../assets/ImageGalleryPictures/Expo.JPG";
import imagegallery from "../../assets/ImageGalleryPictures/imageGallery6.jpg";
import image7 from "../../assets/ImageGalleryPictures/Image7.jpg";
import image1 from "../../assets/ImageGalleryPictures/image1.jpg";
import gal27 from "../../assets/ImageGalleryPictures/gal27.jpeg";
import image8 from "../../assets/ImageGalleryPictures/image8.jpg";
import banner from "../../assets/ImageGalleryPictures/banner.png";

const images = [
  banner,
  gal27,
  image8,
  image1,
  TeachersDay,
  image7,
  IndependenceDay1,
  IndependenceDay2,
  IndependenceDay3,
  Expo,
  imagegallery,
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
