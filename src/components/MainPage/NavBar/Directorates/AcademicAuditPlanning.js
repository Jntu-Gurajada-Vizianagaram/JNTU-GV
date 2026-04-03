import React, { useState } from "react";
import daap from "../../../../assets/AdminDirectoratesImages/jayasuma_daap.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";

function AcademicAuditPlanning() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="dir-profile-container">

      {/* Profile Header Block */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={daap} alt="Prof. Dr. G. Jaya Suma" />
        </div>
        <div className="dir-profile-info">
          <h3>Prof. Dr. G. Jaya Suma</h3>
          <h4>Director of Academic Audit and Planning</h4>
          <h4>Professor, Dept. of Information Technology</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> daa@jntugv.edu.in, dap@jntugv.edu.in
          </p>

          <div className="dir-profile-website">
            <a href="https://dap.jntugv.edu.in" className="dir-action-link" target="_blank" rel="noopener noreferrer">Website for Directorate of Academic Planning</a>
            <a href="https://daa.jntugv.edu.in" className="dir-action-link" target="_blank" rel="noopener noreferrer">Website for Directorate of Academic Audit</a>
          </div>

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
          <p className="dir-sub-heading">Directorate of Academic Audit and Planning (DAA & DAP)</p>
          <p>
            The Directorate of Academic Audit and Planning is responsible for the overall academic governance and strategic planning of JNTU-GV. Its primary roles include:
          </p>
          <p>❖ Formulation of academic regulations and curriculum development for all constituent and affiliated colleges.</p>
          <p>❖ Conducting periodic academic audits to ensure compliance with university standards and NCTE/AICTE guidelines.</p>
          <p>❖ Planning and approval of new academic programs and institution-level expansions.</p>
          <p>❖ Oversight of academic calendars and institutional planning.</p>
        </div>
      )}

      {activeTab === "profile" && (
        <>
          {/* Profile Details Block */}
          <div className="dir-profile-details">
            <p>
              Dr. G. Jaya Suma, present working as a Professor in Department of Information Technology, Director of Academic Audit and Planning, Director (i/c) of Alumni Relations, Executive Council member of JNTU-GV - Vizianagaram, AP. Completed her B.Tech (CS&SE), MTech (CS&T), Ph.D(CSE). Having experience of 22 plus years Teaching, Research and Administration of Engineering Education.
            </p>

            <p className="dir-sub-heading">Administration Contributions</p>
            <p>❖ Former Registrar of JNTU-GV from 2024-2026</p>
            <p>❖ Currently Director of Academic Audit and Planning, JNTU-GV since from March 2026.</p>
            <p>❖ Executive Council member of JNTU-GV since from November 2022 to September 2025</p>
            <p>❖ Served as Head, Department of Information Technology, university college of Engineering, since 2014 to August 2022.</p>
            <p>❖ Special Officer of New Engineering College, JNTU-GV, Kurupam since from May 2020 to October 2022.</p>
            <p>❖ IQAC Coordinator, JNTU-GV College of Engineering (CEV) (A) January 2020 to September 2022.</p>
            <p>❖ SPOC of university college of Engineering for NPTEL Online Courses to till date.</p>
            <p>❖ Convener for Women Empowerment & Grievance Cell, JNTUK, University College of Engineering from September 2017 to till date.</p>
            <p>❖ Secretary & Member for Women Empowerment & Grievance Cell from January 2014-August 2017.</p>

            <p className="dir-sub-heading">Academic Contributions</p>
            <p>❖ Specialization of Artificial Intelligence, Data Mining, Machine Learning, Deep Learning, Soft Computing, and Internet of Things.</p>
            <p>❖ Authored Book Titled “Artificial Intelligence & Machine Learning-2022.</p>
            <p>❖ Awarded CMI Level 5 in Management and Leadership-2021.</p>
            <p>❖ Awarded Out Standing Women in Engineering-VIWA-2017.</p>
            <p>❖ Awarded Woman Researcher in Science and Technology-2020.</p>
            <p>❖ Chairperson BOS, Dept. of Information Technology. (2017-2022).</p>
            <p>❖ Member of Board of Studies for 3 years (2007-2010) in the Dept of CSE, GIT, GITAM University.</p>

            <p className="dir-sub-heading">Research Contributions</p>
            <p>❖ Awarded Six PhDs and Eight Scholars are working for PhD at present.</p>
            <p>❖ Published 3 patents.</p>
            <p>❖ Published 54 International Journals, 20 International Conferences, 2 National Conferences.</p>
            <p>❖ Published 5 Book chapters.</p>
            <p>❖ 32 workshops Organized, 58 Attended, 5 Chaired sessions in international Conferences, and 32 technical talks delivered.</p>

            <p className="dir-sub-heading">Professional Contributions</p>
            <p>❖ Member of CSI (ID – 01170956).</p>
            <p>❖ Senior Fellow of IEEE-92245858.</p>
            <p>❖ Member of ISTE- (ID – LM44520).</p>
            <p>❖ Faculty sponsor of IEEE WIE and faculty sponsor of ACM CHAPTER.</p>
          </div>
        </>
      )}
    </div>
  );
}

export default AcademicAuditPlanning;
