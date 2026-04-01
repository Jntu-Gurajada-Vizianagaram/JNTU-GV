import React from "react";
import Controller1i from "../../../../assets/ExaminationImages/Controller1i.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

function Controller1() {
  return (
    <div className="exam-profile-container">
      {/* Profile Section */}
      <center>
        <div className="exam-profile-image">
          <img src={Controller1i} alt="Profile" />
        </div>
        <div className="exam-profile-name">
          <h3>Dr. Chinta Neelima Devi</h3>
          <h4>Additional Controller of Examinations</h4>
          <h6>for IV B.Tech and IV B.Pharmacy</h6>
          <h4>Associate Professor in the Department of Mechanical Engineering</h4>
          <p className="exam-profile-email">
            <MdOutlineMailOutline size="20px" /> ace4@jntugv.edu.in
          </p>
        </div>
      </center>

      <hr />
      
      {/* Profile Details */}
      <div className="exam-profile-details">
        <p>
          Dr. Chinta Neelima Devi is having 15+ years of teaching experience. She got B.Tech from JNTUH, Hyderabad, Master of Engineering -M.E. (CAD/CAM) from Andhra University and Ph.D from National Institute of Technology (NIT), Warangal.
        </p>
        <p>
          She has published 30+ International Journals and attended 21 International and National Conferences. She has published 4 books and got research project under RUSA 2.0 of worth 10 lakhs from 01-06-2024 to 31-5-2026. She was acted as CAD/CAM Text Book reviewer for Oxford International Press.
        </p>
        <p>
          She got UNIVERSITY MERITORIOUS TEACHER AWARD FOR MECHANICAL ENGINEERING DEPARTMENT in September 2022.
        </p>

        <p className="exam-sub-heading">Positions Held/Handling</p>
        <p>❖ Served as Head of the Mechanical Engineering from 04-08-2022 to 05-08-2024</p>
        <p>❖ Served as Officer –In charge of Library, JNTUGV-College of Engineering Vizianagaram (A) from 2024-2025</p>
        <p>❖ Served as I/c Head of the Mechanical Engineering from 21-12-2018 to 03-08-2022</p>
        <p>❖ Served as Officer-in-Charge of Examinations and Admissions</p>
        <p>❖ Served as Deputy Warden for Girls Hostel</p>
        <p>❖ At autonomous college level, Chairman BOS, ME during 2023-2024 for R23 regulations, I/c Chairman BOS –ME dept for R19 and R20 Regulations.</p>
        <p>❖ ME department Member & Coordinator for Women Empowerment and Grievance Cell (WEGC) at college level and Coordinator and judge for various events since 2013.</p>
        <p>❖ Assistant Chief Superintendent for APPSC Group I & Group III Service Examinations</p>
      </div>
    </div>
  );
}

export default Controller1;
