import React from 'react';
import AnilImage from "../../../../assets/ExaminationImages/Ace2.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";

function ControllerSDC() {
  return (
    <div className="exam-profile-container">
      <div className="exam-content-area-header">
        <h3>Additional Controller of Examinations SDC</h3>
      </div>
      {/* Profile Section */}
      <center>
        <div className="exam-profile-image">
          <img src={AnilImage} alt="Profile" />
        </div>
        <div className="exam-profile-name">
          <h3>Mr. Anil Wurity</h3>
          <h4>Additional Controller of Examinations-SDC</h4>
          <h4>Assistant Professor, Dept. of Information Technology</h4>
          <p className="exam-profile-email">
            <MdOutlineMailOutline size="20px" /> acesdc@jntugv.edu.in
          </p>
        </div>
      </center>

      <hr />

      {/* Profile Details */}
      <div className="exam-profile-details">
        <p>
          Mr. Anil Wurity is currently serving as the Additional Controller of Examinations (SDC) and Additional Controller of Examinations (PG) at JNTU-GV, Vizianagaram. He has been working as an Assistant Professor in the Department of Information Technology since January 2013. He holds an M.Tech in Computer Science and Technology and has extensive experience in teaching, administration, and digital monitoring.
        </p>

        <p className="exam-sub-heading">Educational Qualifications:</p>
        <p>❖ M.Tech in Computer Science and Technology (2009–2011) from GITAM University, Visakhapatnam.</p>
        <p>❖ B.Tech in Information Technology (2002–2006) from Al-Ameer College of Engineering and Information Technology, affiliated to JNTU Hyderabad.</p>

        <p className="exam-sub-heading">Professional Experience:</p>
        <p>❖ Additional Controller of Examinations – SDC, JNTU-GV.</p>
        <p>❖ Additional Controller of Examinations – PG, JNTU-GV.</p>
        <p>❖ Digital Monitoring Cell Coordinator, JNTU-GV from 2022 - 2026.</p>
        <p>❖ Jan 2013 – Present: Assistant Professor, Department of Information Technology, JNTU-GV College of Engineering (CEV) (A).</p>
        <p>❖ Sept 2011 – Jan 2013: Assistant Professor, Department of Computer Science Engineering, Gokul Institute of Technology and Sciences, Bobbili.</p>

        <p className="exam-sub-heading">Administrative Service in this Institution:</p>
        <p>❖ Appointed to act upon and maintain JNTUK-CoEeRD related processes in the college (29 October 2014).</p>
        <p>❖ Served as Deputy Warden for Boys Hostel (Feb 2016 – Mar 2019).</p>
        <p>❖ Worked as Network and System Coordinator for the college (Mar 2019 – Present).</p>

        <p className="exam-sub-heading">Research Interests:</p>
        <p>❖ Machine Learning</p>
        <p>❖ Internet of Things</p>
        <p>❖ Network Security</p>

        <p className="exam-sub-heading">Professional Memberships:</p>
        <p>❖ Associate Member (Life Member), The Institution of Engineers (India).</p>

        <p className="exam-sub-heading">Invited Talks:</p>
        <p>❖ “A Day with Pandas and NumPy” – Two Day Workshop on Advanced Python Toolkits, Visakha Institute of Engineering and Technology, Visakhapatnam (19–20 Sept 2018).</p>

        <p className="exam-sub-heading">Internship:</p>
        <p>❖ Completed Internship Project under ExcelR & APSSDC Faculty Development Program on Data Science (June 2020).</p>
      </div>
    </div>
  );
}

export default ControllerSDC;
