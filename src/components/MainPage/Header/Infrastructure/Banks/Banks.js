import React from "react";
import image from "./BankImages/1.jpg";
import { Typography } from "@mui/material";

function Banks() {
  return (
    
    <div className="bank-card">
      <div className="allRightContentHeading">Bank</div><hr />
      
        <h5 className="BI">State Bank of India</h5>
        <Typography>State Bank of India is available for Staff/Students on the campus. Students can 
        pay College, Hostel and Examination fees through the banks.</Typography><br />
        <img src={image} alt="Bank Logo" className="bank-logo" />
      
      </div>
    
  );
}

export default Banks;
