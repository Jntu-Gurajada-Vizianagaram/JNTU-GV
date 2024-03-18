import React from "react";
import image1 from "./Images/1.png";
import image2 from "./Images/2.png";
import image3 from "./Images/3.png";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";

import { Typography } from "@mui/material";

function Studentactivityclub() {
  return (
    
    <div>
      <div className="allRightContentHeading">Student Activity Club</div><hr />
      
        <h5 className="BI">Vykya Club</h5>
        <Typography>Vykya is a student club run by ECE students. Its main 
            objective is to improve the communication skills among the students.
             Students are supposed to speak on latest thrust areas. Students gather 
             once in a month to discuss various topics on latest trends.</Typography><br />
              <div className="image-container">
        <img src={image1} alt="Staff Quarters Exterior View" className="sac-logo" />
       </div><br/>
      <h5 className="BI">Constelle</h5>
        <Typography>Constelle is a student club run by CSE students. Its objective 
            is to conduct various activities like Drop everything and code (DEC), 
            paper presentation, poster presentation, weekend talks, and magazine preparation.</Typography><br />
              <div className="image-container">
        <img src={image2} alt="Staff Quarters Interior View" className="sac-logo" />
        <img src={image3} alt="Staff Quarters Exterior View" className="sac-logo" />
      </div><br/>
      <h5 className="BI">Yoga Club</h5>
        <Typography>Keep in view of student’s mental and physical health, yoga club was 
            initiated by Prof. V. Sreenivasulu, JNTUK UCEV, Vizianagaram in the year 2017. 
             Mr. RDDV Siva Ram,  Assistant Professor of CSE conducts yoga classes daily from 6.30 AM to
              7.30 AM  for all the hostel inmates and staff of UCEV.</Typography><br />
              <div className="image-container">
        <img src={image4} alt="Staff Quarters Exterior View" className="sac-logo" />
        <img src={image5} alt="Staff Quarters Interior View" className="sac-logo" />
        
      </div>
        
      
      </div>
    
  );
}

export default Studentactivityclub;
