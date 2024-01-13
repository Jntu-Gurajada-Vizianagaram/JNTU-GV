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
        <div className="allRightContentHeading">Hostels</div><hr />
        <ImageGallery />

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          
          <h5 className="BI">About Hostel Office  </h5>
          <Typography>
          The hostels of JNTUK UCE Vizianagaram are started in the year 2010 at 
          this hill top campus with an aim to provide charmed life to the students. 
          The two hostels were planned to accommodate 350 inmates each. The strength 
          of the hostels was drastically increasing from year to year, and so to accommodate 
          the increased strength, one new boys in 2015 and one new girls in 2016 were started.
           The present strength of the inmates is 1450. The Hostel Students of JNTUK UCEV are 
           successfully running the SMH from 1st Sept 2016 to till date. And now the hostels are
            headed by Prof.G.Swami Naidu Principal JNTUK UCEV who is continuously striving for 
            the welfare of students.
          </Typography><br />
          <h5 className="BI">Officer in-charge of hostel</h5>
          <Typography>Sri D.D.V.Sivaram Rolangi</Typography>
          <Typography>Asst.Professor</Typography><br />

          <h5 className="BI">Deputy Wardens</h5>
          <h5 className="BI">Girls Hostel </h5>
          <table className="girls-hostel">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name of the Staff member</th>
          <th>Designation</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr. M. Sowbhagya Lakshmi</td>
          <td>Deputy Warden</td>
          <td>9966607376</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ms. M. Krishna Priya</td>
          <td>Asst. Deputy Warden</td>
          <td>9490929487</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ms. B. Sridurga</td>
          <td>Asst. Deputy Warden</td>
          <td>9491627084</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ms. T. Sirisa</td>
          <td>Asst. Deputy Warden</td>
          <td>9989187658</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Ms. M. Geetha Madhuri</td>
          <td>Asst. Deputy Warden</td>
          <td>8341499617</td>
        </tr>
      </tbody>
    </table><br />
    <Typography><b>UG [Girls Hostel]</b></Typography>
          <table className="girls-hostel">
      <thead>
        <tr>
          <th>Facility</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No. of Rooms</td>
          <td>113</td>
        </tr>
        <tr>
          <td>Dining Hall</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td>1</td>
        </tr>
      </tbody>
    </table><br />
    <Typography><b>PG [Girls Hostel]</b></Typography>
          <table className="girls-hostel">
      <thead>
        <tr>
          <th>Facility</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No. of Rooms</td>
          <td>96</td>
        </tr>
        <tr>
          <td>Dining Hall</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td>1</td>
        </tr>
      </tbody>
    </table><br />

    <h5 className="BI">Boys Hostel </h5>
          <table className="boys-hostel">
          <thead>
        <tr>
          <th>S.No</th>
          <th>Name of the Staff member</th>
          <th>Designation</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sri P. Sreenivasula Reddy</td>
          <td>Deputy Warden</td>
          <td>8187829026</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sri B.R.K. Ambedkar</td>
          <td>Deputy Warden</td>
          <td>9491241340</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sri B. Chennakesava</td>
          <td>Asst. Deputy Warden</td>
          <td>7013606978</td>
        </tr>
      </tbody>
    </table><br />
    <Typography><b>UG [Boys Hostel]</b></Typography>
          <table className="girls-hostel">
      <thead>
        <tr>
          <th>Facility</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No. of Rooms</td>
          <td>109</td>
        </tr>
        <tr>
          <td>Dining Hall</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td>1</td>
        </tr>
      </tbody>
    </table><br />
    <Typography><b>PG [Boys Hostel]</b></Typography>
          <table className="girls-hostel">
      <thead>
        <tr>
          <th>Facility</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No. of Rooms</td>
          <td>96</td>
        </tr>
        <tr>
          <td>Dining Hall</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td>1</td>
        </tr>
      </tbody>
    </table><br />

    <h5 className="BI">Supporting Staff  </h5>
          <table className="supporting-staff">
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
          <td>Mr. B. Chandra Sekhar Rao</td>
          <td>Mechanic</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ms. K. Swapna</td>
          <td>Health Asst.</td>
        </tr>
      </tbody>
    </table><br />
    <h5 className="BI">Facilities provided by the hostel   </h5>
    <ul>
        <li>RO plant</li>
        <li>Gym</li>
        <li>Health Assistant</li>
    </ul>

       

          
          



        </div>
      </div>
    </div>
  );
}

export default Library;
