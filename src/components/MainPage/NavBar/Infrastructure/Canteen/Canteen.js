import React from "react";
import image from "./Images/1.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function Canteen() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Canteen</h3>
      </div>
      
      <div className="infra-profile-details">
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          JNTU-GV College of Engineering (CEV) (A) features a spacious and clean canteen that caters to the diverse tastes of its students and staff. 
          The facility is well-maintained, comfortably accommodating a large number of people at any given time. With modern furniture and 
          excellent cooking and storage facilities, the canteen provides hot lunches, snacks, and beverages at reasonable rates.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Beyond being a place for food, the canteen serves as a hub where students unwind, relax with friends, and exchange views over quality, 
          delicious, and healthy meals. The menu is consistently monitored for quality and hygiene, offering a variety of vegetarian and 
          non-vegetarian dishes tailored to the tastes of the younger generation.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The canteen remains open on all working days, offering everything from breakfast and lunch to snacks, soft drinks, and confectionery. 
          Separate dining areas are provided for faculty and students, and a fresh choices bakery outlet is also available within the campus premises.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image} alt="Canteen Facility" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default Canteen;
