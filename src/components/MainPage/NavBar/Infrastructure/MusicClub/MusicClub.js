import React from "react";
import "../Infrastructure.css";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Images/1.jpeg"
import image2 from "./Images/2.jpeg"
import image3 from "./Images/3.jpeg"
import image4 from "./Images/4.jpeg"


const images = [
  image1,
  image2,
  image3,
  image4,
];
  function ImageGallery() {
    return (
      <div className="mianDivIG">
        <div className="mainImageGallery">
          <Carousel fade>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="image" src={image} alt={`Slide ${index + 1}`} />
                <Carousel.Caption>
                  <div className="carouselText"></div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
  
  

function MusicClub() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Music Club</div><hr />
        <ImageGallery />

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}

    <h5 className="BI">Objectives</h5>
    <Typography>❖ Offer young people an opportunity for self expression through a non verbal creative and meaningful medium.<br/>
    ❖ Help students to cultivate their interest in music.<br/>
    ❖ Help to develop self discipline through regular practice.<br/>
    ❖ Improve Leadership skills by conducting activities or community outreach events.<br/>
    ❖ Music performance improves self confidence if directed and facilitated in a positive encouraging way.<br/>
    ❖ Represent the institution National wide platform for Music Experts.
    </Typography><br />
    <h5 className="BI">Student Enrollment and Music Club Engagement Process</h5>
     <Typography>❖ The club shall hold instruction every semester for interested students to join the club through the student Coordinators.<br/>
     ❖ Initially students are required to give a glimpse of their music knowledge.<br/>
      ❖If they have good knowledge in music they can directly use the respective instruments.<br/>
      ❖ If he/she is a beginner then he can use the music club under the guidance of students who has good knowledge in that particular instrument.<br/>
      ❖ Practicing regularly in the club.<br/>
      ❖ Conduction of musical events.
    </Typography><br/>
    <h5 className="BI">Co-ordinator</h5> 
    <Typography> Smt.B.Nalini.</Typography> <br/>  
    <h5 className="BI">Music club timings</h5> 
    <Typography>Everyday 5:00 pm – 6:30 pm</Typography> 
       

          
          



        </div>
      </div>
    </div>
  );
}

export default MusicClub;
