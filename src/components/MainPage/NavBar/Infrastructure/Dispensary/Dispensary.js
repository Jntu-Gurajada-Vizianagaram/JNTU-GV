import React from "react";
import "../Infrastructure.css";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./DispensaryImages/1.jpg";
import image2 from "./DispensaryImages/2.jpg";
import image3 from "./DispensaryImages/3.jpg";


const images = [
  image1,
  image2,
  image3,
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
  
  

function Dispensary() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Dispensary</div><hr />
        <ImageGallery />

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <h5 className="BI">Doctors</h5>
          <table className="doctors-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Qualification</th>
          <th>Working Hours</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr. K. Samba Murthy</td>
          <td>M.B.B.S</td>
          <td>2 Hrs (4 PM - 6 PM)</td>
          <td>9440194422</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. G. Sowjanya Devi</td>
          <td>M.B.B.S</td>
          <td>2 Hrs (3 PM - 5 PM)</td>
          <td>9949259776</td>
        </tr>
      </tbody>
    </table><br />
    <h5 className="BI">Facilities</h5>
    <Typography>❖ First aid facilities and equipment : Cotton, Band-aid, Hydrogen; peroxide, ceframycin (ion), Iodine<br />
                ❖ Beds : 3 Beds Available<br />
                ❖ Medicine available : T.Paracetamol 500mg, T.Diclo Fenac 50mg, T.Aceclo Fenac-P, T.Fenac-plus, T.Cetrazin, 
                T.L-Hist mont, Caps: Amoxicillin 500mg, T.Omnicef 200mg, T.Zinta 150MG, T.Pantop 40mg, T.Ciprofloxcin 500mg,
                 T.Domastal, T.Meftal Spas, T.Metrogyl 400mg, T.Beplex Forte, T.Orofer XT, T.Zincovit, T.Calcimox, 
                 T.Azithromycin, T.Albendazole, Syp:Salbutamol, Syp:Cheston Plus, Syp:Brozeet, Srp:Chlorpheniramine 
                 and dextromethorphan(CPM) Dextrome Thorphan, Oin: Miconezole, Oin:Ketaconazole, OIN:Permethrin, Oin:Sofrmycin, 
                 Oin:Povidone Iodine, Ciplox-D Eye-Ear, Inj:Rantac, T.Iron (Orofex XT), 2CC Syrings, 3CC Syrings, I.V Fluids RL, T.Zincovit<br /> 
                 ❖ Others : B.P. Apparatus, Thermometer, Blood glucose apparatus
    </Typography><br />
    <h5 className="BI">Supporting staff</h5>
    <table className="supporting-staff">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Qualification</th>
          <th>Contact Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>T. Venkata Krishna</td>
          <td>Inter & Diploma</td>
          <td>9441569736</td>
        </tr>
        <tr>
          <td>2</td>
          <td>G. Krishna Veni</td>
          <td>Inter (MPHW)</td>
          <td>7095002994</td>
        </tr>
      </tbody>
    </table><br/>
    <Typography>
        Ambulance : 24/7 available
        <h5 className="BI">Ambulance driver contact details</h5>
        <table className="supporting-staff">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Qualification</th>
          <th>Contact Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>P. Suresh</td>
          <td>10th(sss)</td>
          <td>8008531396</td>
        </tr>
      </tbody>
    </table>
    </Typography>

          

       

          
          



        </div>
      </div>
    </div>
  );
}

export default Dispensary;
