import React from 'react';
import ControllerPg from '../../../../assets/ExaminationImages/ACEPG.jpg'; 
import './Examinations.css'; 

function ControllerPG() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-PG
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {ControllerPg} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Dr A.V.PapaRao</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Additional Controller of Examinations PG</h4><br></br>
            <h3>Assistant Professor of Mathematics</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: acepg@jntugv.edu.in</p>
          <hr />
          <p>Dr A.V.PapaRao presently working as Assistant Professor of Mathematics in JNTU GV, University College of Engineering Vizianagaram, Andhra Pradesh. He has 20 years of research and 24 years of academic experience. </p>
         
          <p>He published 70 papers in national and international journals. He authored Four books and Nine book chapters. He presented 45 papers in various national and international conferences and 40 workshops. </p>
          <p> His area of interest is mathematical modelling in ecology, epidemiology and medicine.  Three scholars are success fully completed Ph.D. under his guidance. Presently 6 scholars are working under his guidance. He served as Deputy warden, officer InCharge of examinations . In charge Head, Sports coordinator. </p>
      
        </div>
      </div>
    </div>
  );
}

export default ControllerPG;
