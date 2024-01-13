import React from "react";
import registrar from "../../../../../assets/AdminDirectoratesImages/registrar.jpeg";
import "../AdminandDirectorates.css"; // Import your CSS file here
import tick from "../../../../../assets/StyleImages/tick.svg";
// import mailIcon from "../../../../../assets/StyleImages/mailIcon.svg";
import { MdOutlineMailOutline } from "react-icons/md";

function Registrar() {
  return (
    <div className="allRightContent-Profile">
      {/* Profile information */}

      <div className="profileName">
        <div className="profile-Image">
          <img src={registrar} alt="Profile" />
        </div>
        <h3>Prof.Dr.G.Jaya Suma</h3>
        <h4>Professor of Dept.of Information Technology</h4>
        <p>
          <MdOutlineMailOutline width="40px" />
          registrar@jntugv.edu.in
        </p>
      </div>
      <div className="profileDetails">
        <div className="registar-1">
          <p>
            Dr. G. Jaya Suma, present working as a Professor in Department of
            Information Technology, Registrar, Director (i/c) of Industry
            Institute Interaction Placements & Training & Director(i/c) of
            Faculty Development Cell and Executive Council member of JNTUGV -
            Vizianagaram, AP. Completed her B.Tech (CS&SE), MTech (CS&T),
            Ph.D(CSE). Having experience of 22 plus years Teaching, Research and
            Administration of Engineering Education
          </p>
        </div>
        <div className="registar-2">
          <p className="AD-sub">Administration Contributions</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Served as Head,
            Department of Information Technology, university college of
            Engineering, since 2014 to August 2022.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Special Officer of
            New Engineering College, JNTU-GV, Kurupam since from May 2020 to
            October 2022.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> IQAC Coordinator,
            university college of Engineering January 2020 to September 2022.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> SPOC of university
            college of Engineering for NPTEL Online Courses to till date.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Convener for Women
            Empowerment & Grievance Cell, JNTUK, University College of
            Engineering from September 2017 to till date.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Secretary & Member
            for Women Empowerment & Grievance Cell from January 2014-August
            2017.
          </p>
        </div>
        <div className="registar-3">
          <p className="AD-sub">Academic Contributions</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Specialization of
            Artificial Intelligence, Data Mining, Machine Learning, Deep
            Learning, Soft Computing, and Internet of Things.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Authored Book
            Titled “Artificial Intelligence & Machine Learning-2022.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Awarded CMI Level
            5 in Management and Leadership-2021.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Awarded Out
            Standing Women in Engineering-VIWA-2017.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Awarded Woman
            Researcher in Science and Technology-2020.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Chairperson BOS,
            Dept. of Information Technology. (2017-2022).
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Member of Board of
            Studies for 3 years (2007-2010) in the Dept of CSE, GIT, GITAM
            University.
          </p>
        </div>
        <div className="registar-4">
          <p className="AD-sub">Research Contributions</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Awarded Six PhDs
            and Eight Scholars are working for PhD at present.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Published 3
            patents.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Published 54
            International Journals, 20 International Conferences, 2 National
            Conferences.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Published 5 Book
            chapters.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> 32 workshops
            Organized, 58 Attended, 5 Chaired sessions in international
            Conferences, and 32 technical talks delivered.
          </p>
        </div>
        <div className="registar-5">
          <p className="AD-sub">Professional Contributions</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Member of CSI (ID
            – 01170956).
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Senior Fellow of
            IEEE-92245858.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Member of ISTE-
            (ID – LM44520).
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Faculty sponsor of
            IEEE WIE and faculty sponsor of ACM CHAPTER.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
