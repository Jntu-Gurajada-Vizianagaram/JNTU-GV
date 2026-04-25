import React, { useState } from "react";
import doe from "../../../../assets/AdminDirectoratesImages/da.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

function Evaluation() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="dir-profile-container">
      {/* Profile Header Block - Persistent */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={doe} alt="Dr. K. Babulu" />
        </div>
        <div className="dir-profile-info">
          <h3>Dr. K. Babulu</h3>
          <h4>Director of Admissions & Director of Evaluation <sub>i/c</sub></h4>
          <h4>Professor, Deptartment of Electronics and Communications Engineering</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> de@jntugv.edu.in, da@jntugv.edu.in
          </p>
        </div>
      </div>

      {/* Internal Tabs */}
      <div className="dir-tabs-container">
        <button 
          className={`dir-tab-button ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Directorate
        </button>
        <button 
          className={`dir-tab-button ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Director Profile
        </button>
      </div>

      {activeTab === "about" && (
        <div className="dir-profile-details">
          <p className="dir-sub-heading">Directorate of Evaluation (DE)</p>
          <p>
            The Directorate of Evaluation is responsible for the conduct of all university examinations and the timely declaration of results. Its primary responsibilities include:
          </p>
          <p>❖ Planning and execution of semester-end examinations for all constituent and affiliated colleges of JNTU-GV.</p>
          <p>❖ Management of paper setting, valuation processes, and the secure processing of results.</p>
          <p>❖ Issuance of degree certificates, transcripts, and other academic records with high integrity.</p>
          <p>❖ Implementation of examination reforms and technology-driven valuation systems to ensure transparency and efficiency.</p>
          <p>❖ Redressal of students' grievances related to examinations and evaluations.</p>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="dir-profile-details">
          <p className="dir-sub-heading">Educational Qualifications:</p>
          <p>❖ B.E from Andhra University with Electronics and Communication Engineering.</p>
          <p>❖ M.Tech from REC, Warangal with Electronic Instrumentation.</p>
          <p>❖ Ph.D from J.N.T. University, Anantapur in the area of VLSI & Embedded System Design.</p>

          <p className="dir-sub-heading">Industrial Experience:</p>
          <p>❖ “Engineer Trainee” in Vijaya Electronics Pvt.Ltd, Hyderabad for a period of 1 year and 6 months.</p>
          <p>❖ “Instrumentation Engineer” in Andhra Paper Mills Ltd. Rajahmundry for a period of 6 Months.</p>

          <p className="dir-sub-heading">Teaching Experience:</p>
          <p>❖ “Lecturer in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a Period of 1 year.</p>
          <p>❖ “Assistant Professor in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a period of 2 years and 6 months.</p>
          <p>❖ “Associate Professor in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a period of 3 years.</p>
          <p>❖ “Associate Professor in the Department of ECE”, at JNTU College of Engineering, Anantapur for a period of 4 years</p>
          <p>❖ “Associate Professor in the Department of ECE”, at University College of Engineering, JNTUK, Kakinada for a period of 3 years and 5 months.</p>
          <p>❖ “Professor in the Department of ECE”, at University College of Engineering, JNTUK, Kakinada for a period of 9 years and 11 months.</p>
          <p>❖ “Professor in the Department of ECE”, at University College of Engineering, JNTUK, Vizianagaram for a period of 1 year and 3 months.</p>
          <p>❖ Working as Professor at JNTU-GV College of Engineering (CEV) (A), Vizianagaram since January 2022.</p>

          <p className="dir-sub-heading">Memberships:</p>
          <p>❖ Life Member of ISTE.</p>
          <p>❖ Fellow of IETE (F235351).</p>
          <p>❖ Fellow of IE (F1184004).</p>

          <p className="dir-sub-heading">Administrative Responsibilities:</p>
          <p>❖ Director, Director Research & Development and Admissions (i/c), JNTU-GV, Vizianagaram.</p>
          <p>❖ Director, Library Science & Entrepreneurs Development Centre, JNTUK, Kakinada.</p>
          <p>❖ Controller of Examinations at JNTUK, Kakinada.</p>
          <p>❖ BOS Chairman for ECE Department at JNTU-GV College of Engineering (CEV) (A) (Autonomous), JNTUK, Kakinada during 2014-2015.</p>
          <p>❖ Head of ECE Department at JNTU-GV College of Engineering (CEV) (A), JNTUK, Kakinada.</p>
          <p>❖ Procurement Nodal Officer for TEQIP-II at University College of Engineering, JNTUK, Kakinada.</p>
          <p>❖ BOS Member for JNTUK, Kakinada, JNTUA, Anantapur and SVUCE, Tirupati.</p>
          <p>❖ Taskforce Committee Member for Private Engineering Colleges in Ranga Reddy District, Andhra Pradesh.</p>
          <p>❖ Additional controller of Examinations at JNTUK, Kakinada</p>
          <p>❖ Convener and Member for Fact Finding Committees of JNTUA, Anatapur, JNTUK, Kakinada and JNTU-GV, Vizianagaram.</p>
          <p>❖ In-Charge Head of ECE Department at JNTU College of Engineering, Anantapur.</p>
          <p>❖ Staff Coordinator for IEEE Student branch at JNTU College of Engineering, Anantapur.</p>
          <p>❖ Student Union Coordinator at JNTU College of Engineering, Anantapur.</p>
          <p>❖ Executive Member for ISTE Student chapter at NBKR Institute of Science & Technology, Vidyanagar.</p>

          <p className="dir-sub-heading">List of Publications:</p>
          <p>❖ International Journals: 47.</p>
          <p>❖ National Journals: 02</p>
          <p>❖ International Conferences : 31</p>
          <p>❖ National Conferences : 14</p>

          <p className="dir-sub-heading">Ph.D s:</p>
          <p>❖ Number of Ph.D s Awarded: 05.</p>
          <p>❖ Number of Ph.D Scholars Pursing: 08.</p>

          <p className="dir-sub-heading">Others:</p>
          <p>❖ AWARDS: 05.</p>
          <p>❖ SHORT TERM TRAINING PROGRAMS (STTP) ATTEND: 03.</p>
          <p>❖ WORKSHOPS ATTENED: 11.</p>
          <p>❖ REFRESHER COURSE/TRAINING PROGRAMMES ATTENED: 04.</p>
          <p>❖ CONFERENCES/TRAINING PROGRAMMES/ WORKSHOPS CONDUCTED: 11.</p>
          <p>❖ RESOURCE PERSON: 10.</p>
          <p>❖ CHAIR PERSON: 01.</p>
        </div>
      )}
    </div>
  );
}

export default Evaluation;
