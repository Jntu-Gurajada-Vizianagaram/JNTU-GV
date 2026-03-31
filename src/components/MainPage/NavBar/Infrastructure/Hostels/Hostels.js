import React from "react";
import "../Infrastructure.css";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./HostelImages/1.jpg";
import image2 from "./HostelImages/2.jpg";
import image3 from "./HostelImages/3.jpg";
import image4 from "./HostelImages/4.jpg";
import image5 from "./HostelImages/5.jpg";
import image6 from "./HostelImages/6.jpg";

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

function Hostels() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Hostels</h3>
      </div>
      <ImageGallery />

      <div className="infra-profile-details">
        <h5 className="infra-sub-heading">About Hostel Office</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The hostels of JNTUK UCE Vizianagaram were started in the year 2010 at this hilltop campus with an aim to provide a charmed life to the students. 
          The two hostels were planned to accommodate 350 inmates each. The strength of the hostels has been drastically increasing from year to year, 
          leading to the addition of one new boys' hostel in 2015 and one new girls' hostel in 2016. The present strength of the inmates is 1450. 
          The Hostel Students of JNTUK UCEV have been successfully running the SMH from 1st Sept 2016 to date. 
          Currently, the hostels are headed by Prof. G. Swami Naidu, Principal JNTUK UCEV, who continuously strives for the welfare of students.
        </Typography>

        <h5 className="infra-sub-heading">Officer in-charge of hostel</h5>
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h6" className="infra-accent-text">Sri D.D.V. Sivaram Rolangi</Typography>
          <Typography variant="body1">Assistant Professor</Typography>
        </div>

        <h5 className="infra-sub-heading">Deputy Wardens - Girls Hostel</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Staff member</th>
              <th>Designation</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Dr. M. Sowbhagya Lakshmi</td><td>Deputy Warden</td><td>9966607376</td></tr>
            <tr><td>2</td><td>Ms. M. Krishna Priya</td><td>Asst. Deputy Warden</td><td>9490929487</td></tr>
            <tr><td>3</td><td>Ms. B. Sridurga</td><td>Asst. Deputy Warden</td><td>9491627084</td></tr>
            <tr><td>4</td><td>Ms. T. Sirisa</td><td>Asst. Deputy Warden</td><td>9989187658</td></tr>
            <tr><td>5</td><td>Ms. M. Geetha Madhuri</td><td>Asst. Deputy Warden</td><td>8341499617</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: '24px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>UG [Girls Hostel]</Typography>
          <table className="infra-table">
            <thead><tr><th>Facility</th><th>Quantity</th></tr></thead>
            <tbody>
              <tr><td>No. of Rooms</td><td>113</td></tr>
              <tr><td>Dining Hall</td><td>1</td></tr>
              <tr><td>Kitchen</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '24px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>PG [Girls Hostel]</Typography>
          <table className="infra-table">
            <thead><tr><th>Facility</th><th>Quantity</th></tr></thead>
            <tbody>
              <tr><td>No. of Rooms</td><td>96</td></tr>
              <tr><td>Dining Hall</td><td>1</td></tr>
              <tr><td>Kitchen</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <h5 className="infra-sub-heading">Deputy Wardens - Boys Hostel</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Staff member</th>
              <th>Designation</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Sri P. Sreenivasula Reddy</td><td>Deputy Warden</td><td>8187829026</td></tr>
            <tr><td>2</td><td>Sri B.R.K. Ambedkar</td><td>Deputy Warden</td><td>9491241340</td></tr>
            <tr><td>3</td><td>Sri B. Chennakesava</td><td>Asst. Deputy Warden</td><td>7013606978</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: '24px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>UG [Boys Hostel]</Typography>
          <table className="infra-table">
            <thead><tr><th>Facility</th><th>Quantity</th></tr></thead>
            <tbody>
              <tr><td>No. of Rooms</td><td>109</td></tr>
              <tr><td>Dining Hall</td><td>1</td></tr>
              <tr><td>Kitchen</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '24px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>PG [Boys Hostel]</Typography>
          <table className="infra-table">
            <thead><tr><th>Facility</th><th>Quantity</th></tr></thead>
            <tbody>
              <tr><td>No. of Rooms</td><td>96</td></tr>
              <tr><td>Dining Hall</td><td>1</td></tr>
              <tr><td>Kitchen</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <h5 className="infra-sub-heading">Supporting Staff</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Mr. B. Chandra Sekhar Rao</td><td>Mechanic</td></tr>
            <tr><td>2</td><td>Ms. K. Swapna</td><td>Health Asst.</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Facilities provided by the hostel</h5>
        <ul className="infra-list" style={{ lineHeight: '2' }}>
          <li>RO plant</li>
          <li>Gym</li>
          <li>Health Assistant</li>
        </ul>
      </div>
    </div>
  );
}

export default Hostels;
