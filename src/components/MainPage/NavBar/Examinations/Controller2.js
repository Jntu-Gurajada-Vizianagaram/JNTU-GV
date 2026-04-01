import React from 'react';
import Controller3i from '../../../../assets/ExaminationImages/ACE3.jpg';
import { MdOutlineMailOutline } from "react-icons/md";

function Controller2() {
  return (
    <div className="exam-profile-container">
      {/* Profile Section */}
      <center>
        <div className="exam-profile-image">
          <img src={Controller3i} alt="Profile" />
        </div>
        <div className="exam-profile-name">
          <h3>Mr. D D V Sivaram Rolangi</h3>
          <h4>Additional Controller of Examinations-2</h4>
          <h4>Assistant Professor, Department of Computer Science & Engineering</h4>
          <p className="exam-profile-email">
            <MdOutlineMailOutline size="20px" /> ace2@jntugv.edu.in
          </p>
        </div>
      </center>

      <hr />
      
      {/* Profile Details */}
      <div className="exam-profile-details">
        <p>
          Mr. D D V Sivaram Rolangi, currently working as Assistant Professor, Department of Information Technology, JNTU-GV College of Engineering (CEV) (A)College of Engineering (CEV) (A) Vizianagaram-JNTU-GV, Vizianagaram, completed his B. Tech in Computer Science and Engineering from V R Siddhartha Engineering College, Vijayawada. M.Tech in Information Technology and currently pursuing his Ph.D under Visveswaraya PhD scheme from Andhra JNTU-GV College of Engineering (CEV) (A), Andhra University, Visakhapatnam.
        </p>
        <p>
          His areas of interests include Theoretical Computer Science, Compiler technologies, Network programming. He has about 19 years of experience in teaching. His research interests include Machine learning, Computer vision, Deep learning, IoT and Assistive Technologies.
        </p>

        <p className="exam-sub-heading">Additional Roles carried out so far :</p>
        <p>❖ Network & systems coordinator.</p>
        <p>❖ Deputy Warden.</p>
        <p>❖ Training & Placement Officer (TPO).</p>
        <p>❖ Officer In charge of Hostels (OIH).</p>

        <p className="exam-sub-heading">Present administrative roles: </p>
        <p>❖ Dispensary Coordinator</p>
        <p>❖ Public Relations Officer(PRO) of JNTU-GV</p>
        <p>❖ Additional Controller of Examinations -III ( ACE-3)</p>
        <p>❖ Additional Controller of Examinations-2</p>
      </div>
    </div>
  );
}

export default Controller2;
