import React from "react";
import image from "./BankImages/1.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function Banks() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Bank</h3>
      </div>
      
      <div className="infra-profile-details">
        <h5 className="infra-sub-heading">State Bank of India</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          A branch of the State Bank of India is available on campus to serve both staff and students. 
          Students can conveniently pay their College, Hostel, and Examination fees through this facility.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image} alt="Bank Logo" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default Banks;
