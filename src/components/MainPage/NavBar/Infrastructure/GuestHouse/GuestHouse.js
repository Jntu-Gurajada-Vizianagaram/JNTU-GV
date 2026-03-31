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
          The university guest house is an essential facility that provides comfortable temporary accommodation for visiting professors, 
          researchers, parents, and attendees of academic events. Designed to offer a welcoming environment, it serves as a "home away from home" 
          for various university guests.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Its close proximity to academic and administrative buildings ensures high convenience for guests. The guest house plays a 
          crucial role in fostering academic collaboration and facilitating interactions between scholars, reflecting the institution's 
          commitment to hospitality and a supportive environment for all academic pursuits.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image1} alt="University Guest House" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default GuestHouse;
