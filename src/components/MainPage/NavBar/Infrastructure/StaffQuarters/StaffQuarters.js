import React from "react";
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg"
import { Typography } from "@mui/material";

function StaffQuarters() {
  return (
    
    <div>
      <div className="allRightContentHeading">Staff Quarters</div><hr />
      
        
        <Typography>Staff quarters, integral to an organization's employee
             welfare initiatives, refer to residential units provided for the
              accommodation of employees. The primary purpose is to enhance the 
              quality of life for staff members and strategically attract and 
              retain talent. These quarters come in various types, ranging from 
              executive residences to standard and basic units. Equipped with essential 
              facilities such as kitchens, living areas, and utilities, staff quarters 
              aim to provide a convenient and comfortable living environment. Proximity
              to the workplace and fair allocation criteria are crucial considerations.
              While staff quarters foster a sense of community among employees, challenges 
              may arise due to limited availability and the need for equitable distribution. 
              Overall, staff quarters contribute significantly to a positive work environment,
              supporting the well-being of employees and reinforcing organizational culture.</Typography><br />
              <div className="image-container">
        <img src={image1} alt="Staff Quarters Exterior View" className="sq-logo" />
        <img src={image2} alt="Staff Quarters Interior View" className="sq-logo" />
      </div>
        
      
      </div>
    
  );
}

export default StaffQuarters;
