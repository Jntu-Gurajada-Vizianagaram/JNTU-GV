import React from "react";
import "../Infrastructure.css";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
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
  
  

function SportsandFitness() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Sports & Fitness</div><hr />
        <ImageGallery />

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          
          <h5 className="BI">Department of Physical Education  </h5>
          <Typography>
          The Central Library, established in June 2008, is a proud partner in the institute’s 
          march towards its vision playing a vital role in acquisition, organization, and dissemination 
          of knowledge. Library has a large collection of books covering various branches of Engineering, 
          Technology, and Science and Humanities and its related fields. The library is well protected
           with CCTV Security systems.
          </Typography><br />
          <h5 className="BI">Sports Co-ordinator</h5>
          <Typography>R .Gurunadha</Typography><br />
          <h5 className="BI">Activities</h5>
          ❖ Organizing Intramural and Extramural competitions and preparing the students for the same.<br />
          ❖ Encouraging student participation in Inter-collegiate, Inter University and other open tournaments in the country.<br />
          ❖ Organizing Inter-Collegiate tournaments, Inter University tournaments & coaching camps and open tournaments in various sports and games.<br />
          ❖ Organizing tournaments for Teaching and Non-Teaching staff.<br /><br />
          <h5 className="BI">Staff</h5>
          <Typography><b>Faculty members</b></Typography>
          <table className="staff-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr. G.P. Raju</td>
          <td>Assistant Professor</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mr. M. Gowree Sankararao</td>
          <td>Lecturer in Physical Education</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mr. K. Naga Raju</td>
          <td>Lecturer in Physical Education</td>
        </tr>
      </tbody>
    </table><br />
    <Typography><b>Non-teaching staff</b></Typography>
    <table className="staff-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mr. T. Naidu</td>
          <td>Attender</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mr. V. Swamy</td>
          <td>Attender</td>
        </tr>
      </tbody>
    </table><br />
          <h5 className="BI">Play Fields
          </h5>
          <table className="sports">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Play Fields</th>
          <th>Numbers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>ATHLETICS TRACK (200 Mts)</td>
          <td>1</td>
        </tr>
        <tr>
          <td>02</td>
          <td>BASKET-BALL</td>
          <td>2</td>
        </tr>
        <tr>
          <td>03</td>
          <td>BADMINTON</td>
          <td>4</td>
        </tr>
        <tr>
          <td>04</td>
          <td>BALL BADMINTON</td>
          <td>2</td>
        </tr>
        <tr>
          <td>05</td>
          <td>CRICKET PRACTICE PITCH</td>
          <td>2</td>
        </tr>
        <tr>
          <td>06</td>
          <td>CRICKET GROUND</td>
          <td>1</td>
        </tr>
        <tr>
          <td>07</td>
          <td>FOOT BALL</td>
          <td>1</td>
        </tr>
        <tr>
          <td>08</td>
          <td>HAND BALL</td>
          <td>1</td>
        </tr>
        <tr>
          <td>09</td>
          <td>HOCKEY FIELD</td>
          <td>1</td>
        </tr>
        <tr>
          <td>10</td>
          <td>KABADDI</td>
          <td>2</td>
        </tr>
        <tr>
          <td>11</td>
          <td>KHO-KHO</td>
          <td>2</td>
        </tr>
        <tr>
          <td>12</td>
          <td>TENNIS COURT</td>
          <td>1</td>
        </tr>
        <tr>
          <td>13</td>
          <td>TENNI COIT</td>
          <td>2</td>
        </tr>
        <tr>
          <td>14</td>
          <td>THROW BALL</td>
          <td>2</td>
        </tr>
        <tr>
          <td>15</td>
          <td>TABLE- TENNIS(INDOOR)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>16</td>
          <td>VOLLEY-BALL</td>
          <td>4</td>
        </tr>
        <tr>
          <td>17</td>
          <td>WALKERS TRACK</td>
          <td>1</td>
        </tr>
        <tr>
          <td>18</td>
          <td>12 STATIONS MULTIGYM</td>
          <td>1</td>
        </tr>
        <tr>
          <td>19</td>
          <td>16 STATIONS MULTI GYM</td>
          <td>1</td>
        </tr>
      </tbody>
    </table><br />
    <h5 className="BI">Contact information</h5>
    <Typography>
    Address : Department of Physical Education, Jawaharlal Nehru Technological 
    University Gurajada Vizianagaram, Dwarapudi (Post), Vizianagram – 535003, Andhra Pradesh, India.<br />
    Phone : (o) 08922-277918 Mobile: 9849777784<br />
    College Extn. : 76<br />
    Email ID : phyedu@jntukucev.ac.in, gogula. raju@yahoo.com , gogula.raju@gmail.com
    </Typography>
          

          

       

          
          



        </div>
      </div>
    </div>
  );
}

export default SportsandFitness;
