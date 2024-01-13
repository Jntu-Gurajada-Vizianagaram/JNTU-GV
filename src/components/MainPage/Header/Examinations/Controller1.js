import React from 'react';
import Controller1i from "../../../../assets/ExaminationImages/Controller1i.jpg";
import './Examinations.css'; 

function Controller1() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-1
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {Controller1i} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Mr. G.Appala Naidu</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Additional Controller of Examinations 1</h4><br></br>
            <h3>Assistant Professor, Department of Electronics & Communications Engineering</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ace1@jntugv.edu.in</p>
          <hr />
          <p>Mr.G.Appala Naidu having a total of 15 years of experience in teaching and research. He worked as Officer in-charge of Examinations, Deputy Warden and presently working as NSS Programme officer and Additional Controller of Examinations.</p>
          <p>Mr.G.Appala Naidu has published 19 research papers in various international/national journals and conferences. His research area is Analog VLSI.</p>
        </div>
      </div>
    </div>
  );
}

export default Controller1;
