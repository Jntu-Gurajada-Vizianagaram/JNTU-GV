import React from "react";
import image1 from "./Images/1.jpg";

import { Typography } from "@mui/material";

function GuestHouse() {
  return (
    
    <div>
      <div className="allRightContentHeading">Guest House</div><hr />
      
        
        <Typography>A guest house in a university serves as an essential 
            facility providing temporary accommodation for visitors, guests,
             and scholars associated with the academic institution. Typically
              designed to offer a comfortable and welcoming environment, the 
              university guest house offers lodging for guests such as visiting 
              professors, researchers, parents, or attendees of academic events. 
              These guest houses often feature well-appointed rooms equipped with 
              necessary amenities, creating a home away from home experience. The
               proximity of the guest house to the university's academic and 
               administrative buildings enhances convenience for guests. The guest 
               house plays a crucial role in fostering academic collaboration, facilitating 
               interactions between scholars, and contributing to the overall vibrancy of
                the university community. The availability of a guest house reflects the 
                institution's commitment to hospitality, providing a supportive environment
                 for those engaged in academic pursuits within the university's diverse and 
                 dynamic academic landscape.</Typography><br />
            
        <img src={image1} alt="guest house" className="gh-logo" />
    
      
        
      
      </div>
    
  );
}

export default GuestHouse;
