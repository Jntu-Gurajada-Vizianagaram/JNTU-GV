import React from 'react';
import Controller2i from "../../../../assets/ExaminationImages/Controller2i.png";
import './Examinations.css'; 

function Controller2() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-2
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {Controller2i} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Dr. K Srinivasa Prasad</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Additional Controller of Examinations 2</h4><br></br>
            <h3>Assistant Professor, Department of Mechanical Engineering</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ace2@jntugv.edu.in</p>
          <hr />
          <p>Dr. K Srinivasa Prasad, working as Assistant Professor in Mechanical Enginering Department, JNTU-GV, CEV Vizianagaram is having a total of 14 years of experience in teaching and research. He has 05 years of administrative experience in JNTUK UCEV. He worked as NSS program officer, AICTE Co-ordinator, Deputy Warden, Student Affairs coordinator, Head of the Department and presently working as Additional Controller of Examinations. Dr. K Srinivasa Prasad, acted as Co-coordinator for International conference on advanced materials and manufacturing processes (ICAMMP-2018) organized at JNTUK UCEV on 30th & 31st March 2018 in association with IIM Vizag chapter. HE is member of Institution of Engineers (India).</p>
          <p>Dr. K Srinivasa Prasad has published 18 research papers in various international and national journals and conferences. He is currently guiding 4 research scholars as Supervisor/Co-supervisor for their PhD degrees. His research areas include Nano-Composites, Advanced manufacturing techniques, Age hardening and Computer Integrated Manufacturing. He is working as Co- Principal Investigator for the NRB project titled "A novel ECAR technique to produce AA5083 aluminum alloy with high deformation homogeneity and improved mechanical properties for naval applications".</p>
        </div>
      </div>
    </div>
  );
}

export default Controller2;
