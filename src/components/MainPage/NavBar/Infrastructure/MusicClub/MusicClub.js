import React from "react";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Infrastructure.css";
import image1 from "./Images/1.jpeg";
import image2 from "./Images/2.jpeg";
import image3 from "./Images/3.jpeg";
import image4 from "./Images/4.jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
];

function ImageGallery() {
  return (
    <div className="infra-image-gallery-container">
      <Carousel fade>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="infra-gallery-image" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

function MusicClub() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Music Club</h3>
      </div>
      <ImageGallery />

      <div className="infra-profile-details">
        <h5 className="infra-sub-heading">Objectives</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          ❖ Offer young people an opportunity for self-expression through a non-verbal creative and meaningful medium.<br />
          ❖ Help students cultivate their interest in music and develop self-discipline through regular practice.<br />
          ❖ Improve leadership skills by conducting activities or community outreach events.<br />
          ❖ Enhance self-confidence through musical performance in a positive, encouraging environment.<br />
          ❖ Represent the institution on a nationwide platform for music experts.
        </Typography>

        <h5 className="infra-sub-heading">Student Enrollment & Engagement Process</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          ❖ The club holds enrollment every semester through student coordinators.<br />
          ❖ Interested students undergo a brief assessment of their musical knowledge.<br />
          ❖ Students with prior experience can directly access instruments, while beginners receive guidance from experienced members.<br />
          ❖ Regular practice sessions and musical events are organized throughout the year.
        </Typography>

        <h5 className="infra-sub-heading">Co-ordinator</h5>
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h6" className="infra-accent-text">Dr. B. Nalini</Typography>
        </div>

        <h5 className="infra-sub-heading">Music Club Timings</h5>
        <Typography variant="body1">
          Every day: <span className="infra-accent-text">5:00 PM – 6:30 PM</span>
        </Typography>
      </div>
    </div>
  );
}

export default MusicClub;
