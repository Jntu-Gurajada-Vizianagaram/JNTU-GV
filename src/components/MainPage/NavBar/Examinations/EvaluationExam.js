import React from 'react';
import doe from "../../../../assets/AdminDirectoratesImages/da.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

function EvaluationExam() {
  return (
    <div className="exam-profile-container">
      <div className="exam-content-area-header">
        <h3>Director of Evaluation</h3>
      </div>
      {/* Profile Section */}
      <center>
        <div className="exam-profile-image">
          <img src={doe} alt="Profile" />
        </div>
        <div className="exam-profile-name">
          <h3>Dr. K. Babulu</h3>
          <h4>Director <sup>i/c</sup> of Evaluation</h4>
          <h4>Professor, Department of Electronics and Communications Engineering</h4>
          <p className="exam-profile-email">
            <MdOutlineMailOutline size="20px" /> de@jntugv.edu.in
          </p>
        </div>
      </center>

      <hr />

      {/* Profile Details */}
      <div className="exam-profile-details">
        <p className="exam-sub-heading">Educational Qualifications:</p>
        <p>❖ B.E from Andhra University with Electronics and Communication Engineering.</p>
        <p>❖ M.Tech from REC, Warangal with Electronic Instrumentation.</p>
        <p>❖ Ph.D from J.N.T. University, Anantapur in the area of VLSI & Embedded System Design.</p>

        <p className="exam-sub-heading">Industrial Experience:</p>
        <p>❖ “Engineer Trainee” in Vijaya Electronics Pvt. Ltd, Hyderabad for a period of 1 year and 6 months.</p>
        <p>❖ “Instrumentation Engineer” in Andhra Paper Mills Ltd. Rajahmundry for a period of 6 Months.</p>

        <p className="exam-sub-heading">Teaching Experience:</p>
        <p>❖ “Lecturer in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a Period of 1 year.</p>
        <p>❖ “Assistant Professor in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a period of 2 years and 6 months.</p>
        <p>❖ “Associate Professor in the Department of ECE”, at NBKR Institute of Science & Technology, Vidyanagar for a period of 3 years.</p>
        <p>❖ “Associate Professor in the Department of ECE”, at JNTU College of Engineering, Anantapur for a period of 4 years</p>
        <p>❖ “Associate Professor in the Department of ECE”, at University College of Engineering, JNTUK, Kakinada for a period of 3 years and 5 months.</p>
        <p>❖ “Professor in the Department of ECE”, at University College of Engineering, JNTUK, Kakinada for a period of 9 years and 11 months.</p>
        <p>❖ “Professor in the Department of ECE”, at University College of Engineering, JNTUK, Vizianagaram for a period of 1 year and 3 months.</p>
        <p>❖ Working as “Professor in the Department of ECE”, at JNTU-GV College of Engineering (CEV) (A), Vizianagaram since January 2022.</p>

        <p className="exam-sub-heading">Memberships:</p>
        <p>❖ Life Member of ISTE.</p>
        <p>❖ Fellow of IETE (F235351).</p>
        <p>❖ Fellow of IE (F1184004).</p>

        <p className="exam-sub-heading">Administrative Responsibilities:</p>
        <p>❖ Director, Director Research & Development and Admissions (i/c), JNTU-GV, Vizianagaram.</p>
        <p>❖ Director, Library Science & Entrepreneurs Development Centre, JNTUK, Kakinada.</p>
        <p>❖ Controller of Examinations at JNTUK, Kakinada.</p>
        <p>❖ BOS Chairman for ECE Department at University College of Engineering, JNTUK, Kakinada during 2014-2015.</p>
        <p>❖ Head of ECE Department at University College of Engineering, JNTUK, Kakinada.</p>
        <p>❖ Procurement Nodal Officer for TEQIP-II at University College of Engineering, JNTUK, Kakinada.</p>
        <p>❖ BOS Member for JNTUK, Kakinada, JNTUA, Anantapur and SVUCE, Tirupati.</p>
        <p>❖ Taskforce Committee Member for Private Engineering Colleges in Ranga Reddy District, Andhra Pradesh.</p>
        <p>❖ Additional controller of Examinations at JNTUK, Kakinada</p>
        <p>❖ Convener and Member for Fact Finding Committees of JNTUA, Anatapur, JNTUK, Kakinada and JNTU-GV, Vizianagaram.</p>
        <p>❖ In-Charge Head of ECE Department at JNTU College of Engineering, Anantapur.</p>
        <p>❖ Staff Coordinator for IEEE Student branch at JNTU College of Engineering, Anantapur.</p>
        <p>❖ Student Union Coordinator at JNTU College of Engineering, Anantapur.</p>
        <p>❖ Executive Member for ISTE Student chapter at NBKR Institute of Science & Technology, Vidyanagar.</p>

        <p className="exam-sub-heading">List of Publications:</p>
        <p>❖ International Journals: 47.</p>
        <p>❖ National Journals: 02</p>
        <p>❖ International Conferences: 31</p>
        <p>❖ National Conferences: 14</p>

        <p className="exam-sub-heading">Ph.Ds:</p>
        <p>❖ Number of Ph.Ds Awarded: 05.</p>
        <p>❖ Number of Ph.D Scholars Pursing: 08.</p>

        <p className="exam-sub-heading">Others:</p>
        <p>❖ AWARDS: 05.</p>
        <p>❖ SHORT TERM TRAINING PROGRAMS (STTP) ATTEND: 03.</p>
        <p>❖ WORKSHOPS ATTENED: 11.</p>
        <p>❖ REFRESHER COURSE/TRAINING PROGRAMMES ATTENED: 04.</p>
        <p>❖ CONFERENCES/TRAINING PROGRAMMES/ WORKSHOPS CONDUCTED: 11.</p>
        <p>❖ RESOURCE PERSON: 10.</p>
        <p>❖ CHAIR PERSON: 01.</p>
      </div>
    </div>
  );
}

export default EvaluationExam;
