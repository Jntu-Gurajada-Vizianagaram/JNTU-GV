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
  
  

function Library() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Library</div><hr />
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
          <h5 className="BI">Officer In- Charge, Library</h5>
          <Typography>Dr.C. Neelima Devi</Typography><br />
          <h5 className="BI">Building and Infrastructure</h5>
          <Typography>
          The library is in a separate building of total area 2864 Sq.mts located opposite to the 
          administrative office in Academic Block-I. Library block is equipped with a lending section, 
          reading halls with Reference collection, Group discussion room, Magazine reading/ Periodicals 
          section, and Digital Library. The present seating capacity in the Library is 225 and is in the
           process of up-gradation to 350.
          </Typography><br />
          <table className="infra-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Section/ Room</th>
                <th>Area in sq.mts</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Reference Section</td>
                <td>218.84</td>
                <td>Ground floor</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lending Section</td>
                <td>218.84</td>
                <td>Ground floor</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Digital Library</td>
                <td>139.98</td>
                <td>Second floor</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Server Room</td>
                <td>23.94</td>
                <td>Second floor</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Periodical Section</td>
                <td>93.0</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Group Discussion Room</td>
                <td>36.61</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Technical Section</td>
                <td>21.7</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Office Room</td>
                <td>44.81</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Officer In-charge Room</td>
                <td>12.6</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>10</td>
                <td>E-class Room</td>
                <td>78.06</td>
                <td>Second floor</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Stack Room</td>
                <td>78.06</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Gents Toilets</td>
                <td>45.31</td>
                <td>Second floor</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Ladies Toilets</td>
                <td>45.31</td>
                <td>First floor</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Store Room</td>
                <td>41.08</td>
                <td>First & Second floor</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Circulation area</td>
                <td>1328</td>
                <td></td>
              </tr>
            </tbody>
          </table><br />
          <h5 className="BI">Library Working Hours</h5>
          <table className="working-hours-table">
            <thead>
              <tr>
                <th>Days</th>
                <th>Working Hours</th>
                <th>Transaction Hours (Issue, Return & Renewal)</th>
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
                <td>--</td>
              </tr>
              <tr>
                <td>Summer Holidays</td>
                <td>08.00 am – 01.00 pm</td>
                <td>08.00 am – 01.00 pm</td>
              </tr>
            </tbody>
          </table><br />
          <h5 className="BI">Titles & Volumes</h5>
          <table className="infra-table">
  <thead>
    <tr>
      <th>S. No</th>
      <th>Name of the Branch</th>
      <th>Number of Titles</th>
      <th>Number of Volumes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>CE</td>
      <td>228</td>
      <td>1018</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ME</td>
      <td>563</td>
      <td>2874</td>
    </tr>
    <tr>
      <td>3</td>
      <td>EEE</td>
      <td>492</td>
      <td>2515</td>
    </tr>
    <tr>
      <td>4</td>
      <td>ECE</td>
      <td>564</td>
      <td>3002</td>
    </tr>
    <tr>
      <td>5</td>
      <td>CSE</td>
      <td>465</td>
      <td>2978</td>
    </tr>
    <tr>
      <td>6</td>
      <td>IT</td>
      <td>333</td>
      <td>2728</td>
    </tr>
    <tr>
      <td>7</td>
      <td>MET</td>
      <td>115</td>
      <td>832</td>
    </tr>
    <tr>
      <td>8</td>
      <td>BS&HSS</td>
      <td>320</td>
      <td>2632</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Management, MCA, M.Tech, Other general books</td>
      <td>--</td>
      <td>5706</td>
    </tr>
    <tr>
    <td colSpan="2">Total Books</td>
  <td>3080</td>
  <td>24585</td>
    </tr>
  </tbody>
</table><br />
<h5 className="BI">Periodicals</h5>
<Typography>The Library receive Print journals, Technical, Magazines, 
  News Papers and the library provides IP enabled access to a large number 
  of full text on line journal database from the Publisher.</Typography><br />
  <h5 className="BI">News Papers</h5>
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
    <tr>
      <td>1</td>
      <td>Eenadu</td>
      <td>Telugu</td>
      <td>6</td>
      <td>Praja Sakthi</td>
      <td>Telugu</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Sakshi</td>
      <td>Telugu</td>
      <td>7</td>
      <td>Vishala Andhra</td>
      <td>Telugu</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Andhra Jyothi</td>
      <td>Telugu</td>
      <td>8</td>
      <td>Deccan Chronicle</td>
      <td>English</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Andhra Bhoomi</td>
      <td>Telugu</td>
      <td>9</td>
      <td>Indian Express</td>
      <td>English</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Andhra Prabha</td>
      <td>Telugu</td>
      <td>10</td>
      <td>The Hindu</td>
      <td>English</td>
    </tr>
  </tbody>
</table><br />
<h5 className="BI">Digital Library</h5>
<Typography>The reading area in the library has been Network connectivity access to the 
Internet and the PCs are meant for user to access databases, E-journals and other 
E-resources. Total 24 systems are available in the library for this purpose. The
 process is initiated to increase systems in the library.</Typography><br />

 <h5 className="BI">Resources</h5>
<Typography>The following e-sources are available to cater to the needs of the students and Faculty.<br />
(i) DELNET<br />
(ii) E- Journals</Typography><br />

<h5 className="BI">Team</h5>
  <table className="staff-table">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name of the Staff</th>
        <th>Qualification</th>
        <th>Designation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dr. Ch. Srinivasa Rao</td>
        <td>Ph.D</td>
        <td>Professor of Mathematics & Officer In-Charge, Library</td>
      </tr>
      <tr>
        <td>2</td>
        <td>B. Ramu</td>
        <td>MLISc</td>
        <td>Library Assistant</td>
      </tr>
      <tr>
        <td>3</td>
        <td>G. Sanyasappadu</td>
        <td>MLISc</td>
        <td>Library Assistant</td>
      </tr>
      <tr>
        <td>4</td>
        <td>S. Bhaskra Rao</td>
        <td>BLISc</td>
        <td>Library Assistant</td>
      </tr>
      <tr>
        <td>5</td>
        <td>G.V. Satyanarayana</td>
        <td>B.PED</td>
        <td>Helper</td>
      </tr>
      <tr>
        <td>6</td>
        <td>N Lalitha</td>
        <td>BLISc</td>
        <td>Helper</td>
      </tr>
      
    </tbody>
  </table><br />
  <h5 className="BI">Ekeeda Digital Library</h5>
  <Typography>To make online learning resources available to JNTUGV students 
    through a single window, the university signed an MoU with EKEEDA Pvt. Ltd., 
    Mumbai and as a part of this MoU Ekeeda has sponsored the Digital Library 
    project to JNTU. This video library contains 90000+ high-quality videos 
    recorded by renowned experts from the Engineering industry. Students can 
    watch videos and access notes through ekeeda.com website and Mobile App. 
    Contact Officer In-charge of Library or email to library@jntugvcev.edu.in 
    for any assistance or access.</Typography>
    





        </div>
      </div>
    </div>
  );
}

export default Library;
