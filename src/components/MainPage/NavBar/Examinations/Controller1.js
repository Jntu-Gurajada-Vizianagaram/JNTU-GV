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
            <h3>Dr. Chinta Neelima Devi</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Additional Controller of Examinations 1</h4>
            <h5>for I B.Tech, IV B.Tech and IV B.Pharmacy</h5><br></br>
            <h3>Assistant Professor in the Department of Mechanical Engineering</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ace4@jntugv.edu.in</p>
          <hr />
          <p>Dr. Chinta Neelima Devi is having 15 + years of teaching experience. She got B.Tech from JNTUH, Hyderabad, 
          Master of Engineering -M.E. (CAD/CAM) from Andhra University and Ph.D from National Institute of Technology (NIT), Warangal. </p>
          <p>She has published 30+ International Journals and attended 21 International and National Conferences. She has published 4 books and got research project under RUSA 2.0 of worth 10 lakhs from 01-06-2024 to 31-5-2026.She was acted as CAD/CAM Text Book reviewer for Oxford International Press.</p>
          <p>She got UNIVERSITY MERITORIOUS TEACHER AWARD FOR MECHANICAL ENGINEERING DEPARTMENT  in September 2022.</p>
           <br/>
           <h5>Positions Held/Handling</h5>
           <p>Serving as Officer –In charge of Library ,JNTUGV-College of Engineering Vizianagaram (A) </p>
            <p>Served as Head of the Mechanical Engineering from 04-08-2022 to 05-08-2024</p>
            <p>Served as I/c Head of the Mechanical Engineering from 21-12-2018 to 03-08-2022</p>

            <p>Served as Officer-in-Charge of Examinations and Admissions</p>
            <p>Served as Deputy Warden for Girls Hostel</p>
            <p>At autonomous college level, Chairman BOS, ME during 2023-2024 for R23 regulations,
            I/c Chairman BOS –ME dept for R19 and R20 Regulations.</p>
            <p>ME department Member & Coordinator for Women Empowerment and Grievance Cell (WEGC) at college level and Coordinator and judge for various events since 2013.</p>
            <p>Assistant Chief Superintendent for APPSC Group I & Group III Service Examinations</p>
            <p></p>

            <p></p>


        </div>
      </div>
    </div>
  );
}

export default Controller1;
