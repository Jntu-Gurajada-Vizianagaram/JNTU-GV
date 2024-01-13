import React from "react";
import "../../Administration/AdminandDirectorates.css"; // Import your CSS file here
import daa from "../../../../../assets/AdminDirectoratesImages/daa.jpeg";


function AlumniRelations() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Alumni Relations
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={daa}
                alt="Profile"
              />
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">Dr. R. Rajeswara Rao</h3>
            <h3 className="ADh3">
              Director of Alumni Relations
            </h3>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
              Professor of Dept. of Computer Science and Engineering
            </h4>
          </div>
        </center>
        <hr />
        {/* Profile description */}
        <p>Email: Email: daa@jntugv.edu.in</p>
        <hr></hr>
        <p>
          Dr. Ramisetty Rajeswara Rao is presently working as Director(i/c)
          Academic Audit & Director(i/c) Alumni Relations, JNTU-GV,
          Vizianagaram. Dr. Rao completed his B. Tech in CSE in the year 1999
          from V.R. Siddhartha Engineering College, Vijayawada. M.Tech in CSE
          from JNTUH-Hyderabad in the year 2003, PhD in CSE from JNTUH-Hyderabad
          in the year 2010. Dr. Rao pursued his Post Doc in University of
          Missouri, Colombia, USA in the year 2019.. Dr. Rao is having 20 +
          Years of Teaching Experience in the field of Computer Science and
          Engineering. Dr. Rao served as officer in charge of Hostels and Head
          of the Department, Vice Principal and Principal(i/c) JNTUK, UCEV,
          Vizianagaram. JNTUK University College of Engineering, Vizianagaram
          got NBA accreditation for CSE, ECE and Mechanical for 3 years during
          his leadership as NBA Co-coordinator. He also served the institution
          as IQAC Co-Ordinator. He authored one monograph titled with{" "}
          <strong>
            “Automatic Text Independent Speaker Recognition using Source
            Feature”
          </strong>{" "}
          (Lap LABERT Publishing GmbH Co. KG, Germany) in the year 2012 and Two
          Text-Books titled{" "}
          <strong>
            “Cloud Computing and virtualization” (BSP Publications)
          </strong>{" "}
          in the year 2014 and Software Engineering-A New Approach in the year
          2018. Dr. Rao is Expert Visit Committee Member to{" "}
          <strong>AICTE, New Delhi</strong>. He is a state level committee
          member for Curriculum Development for the{" "}
          <strong>
            state of Andhra Pradesh appointed by AP-State Council for Higher
            Education (APSCHE)
          </strong>{" "}
          for Computer Science & Engineering. Eight students have received{" "}
          <strong>
            Ph. D degree under his guidance from JNTUH-Hyderabad and
            JNTU-Kakinada
          </strong>
          . To his credit he had published papers in{" "}
          <strong>ACM, ELSEVIER, SPRINGER</strong> and other reputed journals.
          He authored 86 Journals, presented papers in 35 conferences and
          chaired 23 session chairs and gave 43 invited talks in various reputed
          colleges in Andhra Pradesh and Telengana. Prof. Rao received{" "}
          <strong>Best Researcher</strong> Award from JNUK, Kakinada on 28th
          December, 2018. He received <strong>VIDYA RATAN</strong> award from
          T.E.H.E.G, New Delhi for the year 2011. Dr. Rao is recipient of Jyesta
          Acharya Award from Bharat Education Excellence Awards, Visakhapatnam,
          India. He is an academic advisor to National Cyber Safety and Security
          Standards (NCSSS). He is a Member of CSI and Sr. Member of IEEE. His
          Areas of Interest are Artificial Intelligence, Speech Processing,
          Pattern Recognition, NLP and Cloud Computing.
        </p>
      </div>
    </div>
  );
}

export default AlumniRelations;
