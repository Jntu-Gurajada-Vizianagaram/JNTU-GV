import React from "react";
// import registrar from "../../../../assets/AdminDirectoratesImages/registrar.jpeg";
import daap from "../../../../assets/AdminDirectoratesImages/jayasuma_daap.jpeg";
import "../Administration/AdminandDirectorates.css"; // Import your CSS file here
import tick from "../../../../assets/StyleImages/tick.svg";
import { MdOutlineMailOutline } from "react-icons/md";

function AcademicPlanning() {
  return (
    <div className="allRightContent-Profile">
      {/* Profile information */}
      <div className="profileName">
        <div className="profile-Image">
          <img src={daap} alt="Profile" />
        </div>
        <h3>Prof. Dr. G. Jaya Suma</h3>
        <h3>Director of Academic Audit and Planning</h3>
        <h4>Professor of Dept. of Information Technology</h4>
        <p className="profileEmail">
          <MdOutlineMailOutline size="20px" />
          dap@jntugv.edu.in
        </p>
      </div>
      <div className="profileDetails">
        <div className="contributions">
          <div className="registar-1">
            <p>
              Dr. G. Jaya Suma, present working as a Professor in Department of
              Information Technology, Director of Academic Audit and Planning, Director (i/c) of Alumni Relations , Executive Council member of JNTUGV -
              Vizianagaram, AP. Completed her B.Tech (CS&SE), MTech (CS&T),
              Ph.D(CSE). Having experience of 22 plus years Teaching, Research and
              Administration of Engineering Education.
            </p>
          </div>
          <div className="registar-2">
            <p className="AD-sub">Administration Contributions</p>

            <p>
              ❖ Currently Director of Academic Audit and Planning, JNTUGV, Vizianagaram since from November 2022.
            </p>
            <p>
              ❖ Executive Council member of JNTUGV, Vizianagaram since from November 2022.
            </p>
            <p>
              ❖ Former Registrar of JNTU-GV from 2024-2026
            </p>
            <p>
              ❖ Served as Head,
              Department of Information Technology, university college of
              Engineering, since 2014 to August 2022.
            </p>
            <p>
              ❖ Special Officer of
              New Engineering College, JNTU-GV, Kurupam since from May 2020 to
              October 2022.
            </p>
            <p>
              ❖ IQAC Coordinator,
              university college of Engineering January 2020 to September 2022.
            </p>
            <p>
              ❖ SPOC of university
              college of Engineering for NPTEL Online Courses to till date.
            </p>
            <p>
              ❖ Convener for Women
              Empowerment & Grievance Cell, JNTUK, University College of
              Engineering from September 2017 to till date.
            </p>
            <p>
              ❖ Secretary & Member
              for Women Empowerment & Grievance Cell from January 2014-August
              2017.
            </p>
          </div>
          <div className="registar-3">
            <p className="AD-sub">Academic Contributions</p>
            <p>
              ❖ Specialization of
              Artificial Intelligence, Data Mining, Machine Learning, Deep
              Learning, Soft Computing, and Internet of Things.
            </p>
            <p>
              ❖ Authored Book
              Titled “Artificial Intelligence & Machine Learning-2022.
            </p>
            <p>
              ❖ Awarded CMI Level
              5 in Management and Leadership-2021.
            </p>
            <p>
              ❖ Awarded Out
              Standing Women in Engineering-VIWA-2017.
            </p>
            <p>
              ❖ Awarded Woman
              Researcher in Science and Technology-2020.
            </p>
            <p>
              ❖ Chairperson BOS,
              Dept. of Information Technology. (2017-2022).
            </p>
            <p>
              ❖ Member of Board of
              Studies for 3 years (2007-2010) in the Dept of CSE, GIT, GITAM
              University.
            </p>
          </div>
          <div className="registar-4">
            <p className="AD-sub">Research Contributions</p>
            <p>
              ❖ Awarded Six PhDs
              and Eight Scholars are working for PhD at present.
            </p>
            <p>
              ❖ Published 3
              patents.
            </p>
            <p>
              ❖ Published 54
              International Journals, 20 International Conferences, 2 National
              Conferences.
            </p>
            <p>
              ❖ Published 5 Book
              chapters.
            </p>
            <p>
              ❖ 32 workshops
              Organized, 58 Attended, 5 Chaired sessions in international
              Conferences, and 32 technical talks delivered.
            </p>
          </div>
          <div className="registar-5">
            <p className="AD-sub">Professional Contributions</p>
            <p>
              ❖ Member of CSI (ID
              – 01170956).
            </p>
            <p>
              ❖ Senior Fellow of
              IEEE-92245858.
            </p>
            <p>
              ❖ Member of ISTE-
              (ID – LM44520).
            </p>
            <p>
              ❖ Faculty sponsor of
              IEEE WIE and faculty sponsor of ACM CHAPTER.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicPlanning;
