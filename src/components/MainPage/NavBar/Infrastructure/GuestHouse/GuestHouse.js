import React from "react";
import image1 from "./Images/1.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function GuestHouse() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Guest House</h3>
      </div>
      
      <div className="infra-profile-details">
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The JNTU-GV Guest House stands as a testament to the university's commitment to academic hospitality. Designed to be a professional yet comfortable haven, it provides high-quality temporary accommodation for visiting professors, distinguished scholars, administrative officials, and participants of national and international conferences.
        </Typography>

        <h5 className="infra-sub-heading">Features and Amenities</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The facility offers well-appointed rooms, including <strong>AC and non-AC suites</strong>, meticulously maintained to provide a quiet and productive environment. Its strategic location near the Central Administrative Building and Academic Blocks ensures seamless convenience for guests engaged in official interactions and academic collaborations.
        </Typography>

        <h5 className="infra-sub-heading">A Hub for Academic Collaboration</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Serving as a "home away from home," the Guest House plays a crucial role in fostering scholarship and networking. With dedicated meeting spaces and a commitment to hospitality, it reflects the university's dedication to supporting all academic pursuits in a prestigious setting.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image1} alt="JNTU-GV Guest House" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default GuestHouse;
