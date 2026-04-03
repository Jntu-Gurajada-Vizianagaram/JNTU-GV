import React from "react";
import "../Infrastructure.css";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";

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

function Library() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Library</h3>
      </div>
      <ImageGallery />

      <div className="infra-profile-details">
        <h5 className="infra-sub-heading">About the Central Library</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The Central Library, established in June 2008, is a proud partner in the institute’s march towards its vision, playing a vital role in the acquisition, organization, and dissemination of knowledge. The library boasts a large collection of books covering various branches of Engineering, Technology, Science, and Humanities. The facility is well-protected with CCTV security systems.
        </Typography>

        <h5 className="infra-sub-heading">Officer In-Charge</h5>
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h6" className="infra-accent-text">R. D. D. V. Siva Ram</Typography>
          <Typography variant="body1">Asst. Professor of COmputer Science & Officer In-Charge, Library</Typography>
        </div>

        <h5 className="infra-sub-heading">Building and Infrastructure</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The library is housed in a separate building with a total area of 2864 Sq.mts, located opposite the administrative office in Academic Block-I. It is equipped with a lending section, reference reading halls, a group discussion room, a periodical section, and a digital library. The current seating capacity is 225, with plans to upgrade to 350.
        </Typography>

        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Section / Room</th>
              <th>Area (sq.mts)</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Reference Section</td><td>218.84</td><td>Ground floor</td></tr>
            <tr><td>2</td><td>Lending Section</td><td>218.84</td><td>Ground floor</td></tr>
            <tr><td>3</td><td>Digital Library</td><td>139.98</td><td>Second floor</td></tr>
            <tr><td>4</td><td>Server Room</td><td>23.94</td><td>Second floor</td></tr>
            <tr><td>5</td><td>Periodical Section</td><td>93.0</td><td>First floor</td></tr>
            <tr><td>6</td><td>Group Discussion Room</td><td>36.61</td><td>First floor</td></tr>
            <tr><td>7</td><td>Technical Section</td><td>21.7</td><td>First floor</td></tr>
            <tr><td>8</td><td>Office Room</td><td>44.81</td><td>First floor</td></tr>
            <tr><td>9</td><td>Officer In-charge Room</td><td>12.6</td><td>First floor</td></tr>
            <tr><td>10</td><td>E-class Room</td><td>78.06</td><td>Second floor</td></tr>
            <tr><td>11</td><td>Stack Room</td><td>78.06</td><td>First floor</td></tr>
            <tr><td>12</td><td>Gents Toilets</td><td>45.31</td><td>Second floor</td></tr>
            <tr><td>13</td><td>Ladies Toilets</td><td>45.31</td><td>First floor</td></tr>
            <tr><td>14</td><td>Store Room</td><td>41.08</td><td>First & Second floor</td></tr>
            <tr><td>15</td><td>Circulation area</td><td>1328</td><td>-</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Library Working Hours</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>Days</th>
              <th>Working Hours</th>
              <th>Transaction Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday to Saturday</td>
              <td>08.00 am – 08.00 pm</td>
              <td>08.00 am – 5.00 pm</td>
            </tr>
            <tr>
              <td>Sunday & Holidays</td>
              <td>09.00 am – 01.00 pm</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Summer Holidays</td>
              <td>08.00 am – 01.00 pm</td>
              <td>08.00 am – 01.00 pm</td>
            </tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Titles & Volumes</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S. No</th>
              <th>Branch</th>
              <th>Titles</th>
              <th>Volumes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>CE</td><td>228</td><td>1018</td></tr>
            <tr><td>2</td><td>ME</td><td>563</td><td>2874</td></tr>
            <tr><td>3</td><td>EEE</td><td>492</td><td>2515</td></tr>
            <tr><td>4</td><td>ECE</td><td>564</td><td>3002</td></tr>
            <tr><td>5</td><td>CSE</td><td>465</td><td>2978</td></tr>
            <tr><td>6</td><td>IT</td><td>333</td><td>2728</td></tr>
            <tr><td>7</td><td>MET</td><td>115</td><td>832</td></tr>
            <tr><td>8</td><td>BS&HSS</td><td>320</td><td>2632</td></tr>
            <tr><td>9</td><td>Mgt, MCA, M.Tech, General</td><td>-</td><td>5706</td></tr>
            <tr><td colSpan="2" className="infra-accent-text">Total Books</td><td>3080</td><td>24585</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Periodicals & Newspapers</h5>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The library provides access to print journals, technical magazines, and newspapers, alongside IP-enabled access to online databases.
        </Typography>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>News Paper</th>
              <th>Language</th>
              <th>S.No</th>
              <th>News Paper</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Eenadu</td><td>Telugu</td><td>6</td><td>Praja Sakthi</td><td>Telugu</td></tr>
            <tr><td>2</td><td>Sakshi</td><td>Telugu</td><td>7</td><td>Vishala Andhra</td><td>Telugu</td></tr>
            <tr><td>3</td><td>Andhra Jyothi</td><td>Telugu</td><td>8</td><td>Deccan Chronicle</td><td>English</td></tr>
            <tr><td>4</td><td>Andhra Bhoomi</td><td>Telugu</td><td>9</td><td>Indian Express</td><td>English</td></tr>
            <tr><td>5</td><td>Andhra Prabha</td><td>Telugu</td><td>10</td><td>The Hindu</td><td>English</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Digital Library & E-Resources</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The digital library features 24 networked systems for accessing databases, E-journals, and other E-resources, with plans for expansion.
          Available sources include DELNET and various academic E-journals.
        </Typography>

        <h5 className="infra-sub-heading">Library Team</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>R.D.D.V. Siva Ram</td><td>Ph.D</td><td>Asst. Prof. of CSE & Officer In-Charge</td></tr>
            <tr><td>2</td><td>B. Ramu</td><td>MLISc</td><td>Library Assistant</td></tr>
            <tr><td>3</td><td>G. Sanyasappadu</td><td>MLISc</td><td>Library Assistant</td></tr>
            <tr><td>4</td><td>S. Bhaskra Rao</td><td>BLISc</td><td>Library Assistant</td></tr>
            <tr><td>5</td><td>G.V. Satyanarayana</td><td>B.PED</td><td>Helper</td></tr>
            <tr><td>6</td><td>N Lalitha</td><td>BLISc</td><td>Helper</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Ekeeda Digital Library</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Under an MoU with Ekeeda Pvt. Ltd., Mumbai, students have access to a video library containing 90,000+ high-quality engineering videos and notes
          via the Ekeeda website and mobile app.
        </Typography>
      </div>
    </div>
  );
}

export default Library;
