import React from "react";
import image1 from "./Images/1.png";
import image2 from "./Images/2.png";
import image3 from "./Images/3.png";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function Studentactivityclub() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Student Activity Club</h3>
      </div>
      
      <div className="infra-profile-details">
        {/* Vykya Club */}
        <h5 className="infra-sub-heading">Vykya Club</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Vykya is a student club run by ECE students. Its main objective is to improve communication skills and knowledge sharing among students. 
          Members gather monthly to discuss the latest trends and thrust areas in technology.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <img src={image1} alt="Vykya Club Logo" className="infra-logo" />
        </div>

        {/* Constelle Club */}
        <h5 className="infra-sub-heading">Constelle Club</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Constelle is a student club run by CSE students. Its objective is to conduct highly engaging activities like "Drop Everything and Code" (DEC), 
          paper and poster presentations, weekend talks, and the preparation of academic magazines.
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '32px' }}>
          <img src={image2} alt="Constelle Activity 1" className="infra-logo" />
          <img src={image3} alt="Constelle Activity 2" className="infra-logo" />
        </div>

        {/* Yoga Club */}
        <h5 className="infra-sub-heading">Yoga Club</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Focusing on students' mental and physical health, the Yoga Club was initiated in 2017. 
          Daily yoga classes are conducted from 6:30 AM to 7:30 AM for all hostel inmates and staff, 
          promoting a healthy lifestyle on campus.
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <img src={image4} alt="Yoga Session 1" className="infra-logo" />
          <img src={image5} alt="Yoga Session 2" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default Studentactivityclub;
