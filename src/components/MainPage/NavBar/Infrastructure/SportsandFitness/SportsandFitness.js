import React from "react";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Infrastructure.css";
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
    <div className="infra-image-gallery-container">
      <Carousel fade>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="infra-gallery-image" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

function SportsandFitness() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Sports & Fitness</h3>
      </div>
      <ImageGallery />

      <div className="infra-profile-details">
        <h5 className="infra-sub-heading">Department of Physical Education</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The Department of Physical Education at JNTU-GV is dedicated to fostering a culture of health, fitness, and sportsmanship among students. 
          The university provides extensive facilities and professional guidance to ensure that students excel both in academics and sports.
        </Typography>

        <h5 className="infra-sub-heading">Sports Co-ordinator</h5>
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h6" className="infra-accent-text">Sri R. Gurunadha</Typography>
        </div>

        <h5 className="infra-sub-heading">Key Activities</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          ❖ Organizing Intramural and Extramural competitions and preparing students for the same.<br />
          ❖ Encouraging student participation in Inter-collegiate, Inter-University, and other open national tournaments.<br />
          ❖ Hosting Inter-Collegiate tournaments, coaching camps, and open sports events.<br />
          ❖ Organizing sports tournaments for both Teaching and Non-Teaching staff members.
        </Typography>

        <h5 className="infra-sub-heading">Department Staff</h5>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Faculty Members</Typography>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Dr. G.P. Raju</td><td>Assistant Professor</td></tr>
            <tr><td>2</td><td>Mr. M. Gowree Sankararao</td><td>Lecturer in Physical Education</td></tr>
            <tr><td>3</td><td>Mr. K. Naga Raju</td><td>Lecturer in Physical Education</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: '24px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Non-Teaching Staff</Typography>
          <table className="infra-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Mr. T. Naidu</td><td>Attender</td></tr>
              <tr><td>2</td><td>Mr. V. Swamy</td><td>Attender</td></tr>
            </tbody>
          </table>
        </div>

        <h5 className="infra-sub-heading">Sports Facilities & Play Fields</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Play Fields / Facility</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>01</td><td>Athletics Track (200 Mts)</td><td>1</td></tr>
            <tr><td>02</td><td>Basketball Courts</td><td>2</td></tr>
            <tr><td>03</td><td>Badminton Courts</td><td>4</td></tr>
            <tr><td>04</td><td>Ball Badminton Courts</td><td>2</td></tr>
            <tr><td>05</td><td>Cricket Practice Pitches</td><td>2</td></tr>
            <tr><td>06</td><td>Cricket Ground</td><td>1</td></tr>
            <tr><td>07</td><td>Football Field</td><td>1</td></tr>
            <tr><td>08</td><td>Handball Court</td><td>1</td></tr>
            <tr><td>09</td><td>Hockey Field</td><td>1</td></tr>
            <tr><td>10</td><td>Kabaddi Courts</td><td>2</td></tr>
            <tr><td>11</td><td>Kho-Kho Courts</td><td>2</td></tr>
            <tr><td>12</td><td>Tennis Court</td><td>1</td></tr>
            <tr><td>13</td><td>Tenni-Coit Courts</td><td>2</td></tr>
            <tr><td>14</td><td>Throwball Courts</td><td>2</td></tr>
            <tr><td>15</td><td>Table-Tennis (Indoor)</td><td>2</td></tr>
            <tr><td>16</td><td>Volleyball Courts</td><td>4</td></tr>
            <tr><td>17</td><td>Walker's Track</td><td>1</td></tr>
            <tr><td>18</td><td>Gym (12 Stations)</td><td>1</td></tr>
            <tr><td>19</td><td>Gym (16 Stations)</td><td>1</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Contact Information</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          <strong>Address:</strong> Department of Physical Education, JNTU-GV, Dwarapudi (Post), Vizianagaram – 535003, AP, India.<br />
          <strong>Phone:</strong> 08922-277918 | <strong>Mobile:</strong> 9849777784<br />
          <strong>Email:</strong> phyedu@jntugvcev.edu.in
        </Typography>
      </div>
    </div>
  );
}

export default SportsandFitness;
