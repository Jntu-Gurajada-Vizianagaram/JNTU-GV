import React from "react";
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function StaffQuarters() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Staff Quarters</h3>
      </div>
      
      <div className="infra-profile-details">
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Staff quarters are an integral part of the university's welfare initiatives, providing residential units for the accommodation of employees. 
          The primary goal is to enhance the quality of life for staff members and strategically attract and retain talent by offering a convenient living environment.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Equipped with essential facilities such as kitchens, living areas, and utilities, these quarters provide a comfortable and welcoming atmosphere. 
          The proximity of the quarters to the campus enhances accessibility and fosters a strong sense of community among the university's employees, 
          reinforcing a positive organizational culture.
        </Typography>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <img src={image1} alt="Staff Quarters View 1" className="infra-logo" />
          <img src={image2} alt="Staff Quarters View 2" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default StaffQuarters;
