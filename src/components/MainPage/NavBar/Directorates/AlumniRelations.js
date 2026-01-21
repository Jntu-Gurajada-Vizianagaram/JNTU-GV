import React from "react";
import "../Administration/AdminandDirectorates.css";
import registrar from "../../../../assets/AdminDirectoratesImages/registrar.jpeg";

function AlumniRelations() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Alumni Relations
        </div>
        <br></br>

        <div className="allRightContentProfile">
          <div className="ADimg">
            <center>
              <img src={registrar} alt="Profile" />
            </center>
          </div>
        </div>

        <center>
          <div className="profileName">
            <h3 className="ADh3">Prof. Dr. G. Jaya Suma</h3>
            <h3 className="ADh3">
              Director <sup>i/c</sup> of Alumni Relations
            </h3>
          </div>

          <div className="profileDesignation">
            <h4 className="ADh4">
              Professor, Department of Information Technology
            </h4>
          </div>
        </center>

        <hr />

        <p>Email: dar@jntugv.edu.in</p>

        <hr></hr>

        <p className="ADsub">Administrative Positions</p>

        <p>
          ❖ Presently working as Registrar and Director of Alumni Relations,
          JNTU-GV, Vizianagaram.
        </p>
        <p>
          ❖ Director (i/c) of Industry Institute Interaction, Placements & Training,
          JNTUGV.
        </p>
        <p>
          ❖ Director (i/c) of Faculty Development Cell, JNTUGV.
        </p>
        <p>
          ❖ Executive Council Member, JNTUGV, Vizianagaram.
        </p>
        <p>
          ❖ Served as Head, Department of Information Technology, University College
          of Engineering from 2014 to August 2022.
        </p>
        <p>
          ❖ Special Officer of New Engineering College, JNTU-GV, Kurupam from May
          2020 to October 2022.
        </p>
        <p>
          ❖ IQAC Coordinator, University College of Engineering from January 2020
          to September 2022.
        </p>
        <p>
          ❖ Convener for Women Empowerment & Grievance Cell, JNTUK from September
          2017 to till date.
        </p>

        <p className="ADsub">Awards</p>

        <p>
          ❖ Awarded CMI Level 5 in Management and Leadership – 2021.
        </p>
        <p>
          ❖ Awarded Outstanding Woman in Engineering – VIWA – 2017.
        </p>
        <p>
          ❖ Awarded Woman Researcher in Science and Technology – 2020.
        </p>

        <p className="ADsub">Academic & Research Contributions</p>

        <p>
          ❖ Specialization in Artificial Intelligence, Data Mining, Machine Learning,
          Deep Learning, Soft Computing, and Internet of Things.
        </p>
        <p>
          ❖ Authored a book titled “Artificial Intelligence & Machine Learning” – 2022.
        </p>
        <p>
          ❖ Awarded Six PhDs and Eight Scholars are currently pursuing PhD.
        </p>
        <p>
          ❖ Published 3 Patents.
        </p>
        <p>
          ❖ Published 54 International Journals, 20 International Conferences, and
          2 National Conferences.
        </p>
        <p>
          ❖ Published 5 Book Chapters.
        </p>
        <p>
          ❖ Organized 32 Workshops, Attended 58 Workshops, Chaired 5 International
          Conference Sessions, and delivered 32 Technical Talks.
        </p>
      </div>
    </div>
  );
}

export default AlumniRelations;
