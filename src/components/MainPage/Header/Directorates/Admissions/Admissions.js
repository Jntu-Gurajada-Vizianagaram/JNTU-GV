import React from "react";
import "../../Administration/AdminandDirectorates.css"; // Import your CSS file here
import da from "../../../../../assets/AdminDirectoratesImages/da.jpg";


function Admissions() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Director of Admissions</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={da}
                alt="Profile"
              />
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">Dr. K. Babulu</h3>
            <h3 className="ADh3">
              Director of Admissions
            </h3>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
              Professor of Dept. of Electronics and Communications Engineering
            </h4>
          </div>
        </center>
        <hr />
        {/* Profile description */}
        <p>Email: da@jntugv.edu.in</p>
        <hr></hr>
        
        <p className="ADsub">Educational Qualifications:</p>
        <p>
          ❖ B.E from Andhra University with Electronics and Communication
          Engineering.
        </p>
        <p>❖ M.Tech from REC, Warangal with Electronic Instrumentation.</p>
        <p>
          ❖ Ph.D from J.N.T. University, Anantapur in the area of VLSI& Embedded
          System Design.
        </p>
        
        <p className="ADsub">Industrial Experience:</p>
        <p>
          ❖ “Engineer Trainee” in Vijaya Electronics Pvt.Ltd, Hyderabad for a
          period of 1year and 6 months.
        </p>
        <p>
          ❖ “Instrumentation Engineer” in Andhra Paper Mills Ltd. Rajahmundry
          for a period of 6 Months.
        </p>
        
        <p className="ADsub">Teaching Experience:</p>
        <p>
          ❖ “Lecturer in the Department of ECE”, at NBKR Institute of Science &
          Technology, Vidyanagar for a Period of 1 year.
        </p>
        <p>
          ❖ “Assistant Professor in the Department of ECE”, at NBKR Institute of
          Science & Technology, Vidyanagar for a period of 2 years and 6 months.
        </p>
        <p>
          ❖ “Associate Professor in the Department of ECE”, at NBKR Institute of
          Science & Technology, Vidyanagar for a period of 3 years.
        </p>
        <p>
          ❖ “Associate Professor in the Department of ECE”, at JNTU College of
          Engineering, Anantapur for a period of 4 years
        </p>
        <p>
          ❖ “Associate Professor in the Department of ECE”, at University
          College of Engineering, JNTUK, Kakinada for a period of 3 years and 5
          months.
        </p>
        <p>
          ❖ “Professor in the Department of ECE”, at University College of
          Engineering, JNTUK, Kakinada for a period of 9 years and 11 months.
        </p>
        <p>
          ❖ “Professor in the Department of ECE”, at University College of
          Engineering, JNTUK, Vizianagaram for a period of 1 year and 3 months.
        </p>
        <p>
          ❖ Working as “Professor in the Department of ECE”, at JNTU-GV College
          of Engineering (CEV), Vizianagaram since January 2022.
        </p>
        
        <p className="ADsub">Memberships:</p>
        <p>❖ Life Member of ISTE.</p>
        <p>❖ Fellow of IETE (F235351).</p>
        <p>❖ Fellow of IE (F1184004).</p>
        
        <p className="ADsub">Administrative Responsibilities:</p>
        <p>
          ❖ Director, Director Research & Development and Admissions (i/c),
          JNTU-GV, Vizianagaram.
        </p>
        <p>
          ❖ Director, Library Science & Entrepreneurs Development Centre, JNTUK,
          Kakinada.
        </p>
        <p>❖ Controller of Examinations at JNTUK, Kakinada.</p>
        <p>
          ❖ BOS Chairman for ECE Department at University College of Engineering
          (Autonomous), JNTUK, Kakinada during 2014-2015.
        </p>
        <p>
          ❖ Head of ECE Department at University College of Engineering, JNTUK,
          Kakinada.
        </p>
        <p>
          ❖ Procurement Nodal Officer for TEQIP-II at University College of
          Engineering, JNTUK, Kakinada.
        </p>
        <p>
          ❖ BOS Member for JNTUK, Kakinada, JNTUA, Anantapur and SVUCE,
          Tirupati.
        </p>
        <p>
          ❖ Taskforce Committee Member for Private Engineering Colleges in Ranga
          Reddy District, Andhra Pradesh.
        </p>
        <p>❖ Additional controller of Examinations at JNTUK, Kakinada</p>
        <p>
          ❖ Convener and Member for Fact Finding Committees of JNTUA, Anatapur,
          JNTUK, Kakinada and JNTU-GV, Vizianagaram.
        </p>
        <p>
          ❖ In-Charge Head of ECE Department at JNTU College of Engineering,
          Anantapur.
        </p>
        <p>
          ❖ Staff Coordinator for IEEE Student branch at JNTU College of
          Engineering, Anantapur.
        </p>
        <p>
          ❖ Student Union Coordinator at JNTU College of Engineering, Anantapur.
        </p>
        <p>
          ❖ Executive Member for ISTE Student chapter at NBKR Institute of
          Science & Technology, Vidyanagar.
        </p>
        
        <p className="ADsub">List of Publications:</p>
        <p>❖ International Journals: 47.</p>
        <p>❖ National Journals: 02</p>
        <p>❖ International Conferences : 31</p>
        <p>❖ National Conferences : 14</p>
        
        <p className="ADsub">Ph.D s:</p>
        <p>❖ Number of Ph.D s Awarded: 05.</p>
        <p>❖ Number of Ph.D Scholars Pursing: 08.</p>
        
        <p className="ADsub">Others:</p>
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

export default Admissions;
