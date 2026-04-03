import React, { useState } from "react";
import dirp from "../../../../assets/AdminDirectoratesImages/dir&p.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

function Placements() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="dir-profile-container">
      {/* Profile Header Block - Persistent */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={dirp} alt="Dr. G.J. Naga Raju" />
        </div>
        <div className="dir-profile-info">
          <h3>Dr. G.J. Naga Raju</h3>
          <h4>Director i/c of Industrial Relations & Placements</h4>
          <h4>Associate Professor of Physics</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> dirp@jntugv.edu.in
          </p>
          <div className="dir-profile-website">
            <a href="https://dirp.jntugv.edu.in/" className="dir-action-link" target="_blank" rel="noopener noreferrer">Visit Industrial Relations & Placements Website</a>
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
          <p className="dir-sub-heading">Directorate of Industrial Relations & Placements (DIR&P)</p>
          <p>
            The Directorate of Industrial Relations & Placements acts as a vital interface between the university and the corporate world. Its primary goals include:
          </p>
          <p>❖ Bridging the gap between academia and industry through strategic MoUs and collaborative training partnerships.</p>
          <p>❖ Facilitating campus recruitment drives, internships, and industrial training for students.</p>
          <p>❖ Organizing skill development programs, workshops, and expert lectures to enhance student employability.</p>
          <p>❖ Providing career counseling and guidance for higher education and competitive examinations.</p>
          <p>❖ Strengthening the industry-institute interaction through collaborative R&D and consultancy projects.</p>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="dir-profile-details">
          <p>
            Dr. G. J. N. Raju, Associate Professor of Physics, received Doctorate in Nuclear Physics from Andhra University in the year 2006. Dr. Raju completed M.Tech (Computer Science and Technology) in 2010 from GITAM University and M.Sc. (Nuclear Physics) in 2000 from Andhra University, Visakhapatnam. He has nearly 20 years of teaching experience at University level. Dr. Raju received two Best Paper presentation awards at DAE conferences and received five academic awards from various organizations and Universities. He authored two textbooks titled as “Nano Physics” and “Basic Engineering Physics” and authored four book chapters. He filed two Indian patents and received two UK patent grant certificates. Dr. Raju served the institution in various capacities like Head of the Dept. of BS&HSS, Officer in-charge Examinations, R & D co-ordinator, NBA, NAAC, and AICTE co-ordinator at Department level, BoS Chairperson and as a member, etc.
          </p>

          <p className="dir-sub-heading">Research Experience</p>
          <p>
            ❖ Senior Research Fellow (13-07-2004 to 30-03-2006) <br />
            Dept. of Nuclear Physics, Andhra University, Visakhapatnam-530 003, India / Council of Scientific and Industrial Research (CSIR), Govt. of India.
          </p>
          <p>
            ❖ Project Fellow (02-12-2003 to 12-07-2004)<br />
            “Trace elemental analysis in biological and environmental samples by PIXE technique” Funded by UGC-DAE Consortium for Scientific Research, Kolkata Centre, India.
          </p>
          <p>
            ❖ Junior Research Fellow (30-09-04-2000 to 31-03-2003) <br />
            “Online studies of K and Lx-ray ion intensity ratios using heavy ions”
            Funded by UGC-DAE Consortium for Scientific Research, Kolkata Centre, India
          </p>

          <p className="dir-sub-heading">Research Projects Completed</p>
          <p>
            ❖ “Diagnosis of ovarian cancer using decision tree classification of trace elemental data obtained by applying ion beam analysis” under DST-FTS, Young Scientist Scheme (DST SR/FTP/PS-139/2011), Total cost of the project: Rs. 21,84,000/-
          </p>
          <p>
            ❖ “Acquisition and analysis of trace elemental data obtained from biological samples of breast cancer patients using analytical techniques” under UGC Major Research Projects (42-831/2013(SR): Co-Investigator), Total cost of the project: Rs.13,54,800/-
          </p>
          <p>❖ “Multi elemental mapping of blood serum of diabetes mellitus patients using synchrotron radiation based florescence spectroscopy” UGC-DAE Consortium for Scientific Research, Indore Centre, Govt. of India (CSR-IC-BL-60/CRS-177/2016-17/841):
            Co-Investigator, Total cost of the project: Rs.7,68,600/- (Per Year)
          </p>

          <p className="dir-sub-heading">Research Publications</p>
          <p>
            ❖ Research Paper in Journals : 64 <br />
            (Scopus Indexed:46 & UGC approved:18)
          </p>
          <p>
            ❖ Papers presented at conference Symposia : 48 <br />
            (organized by DAE-BRNS, BARC&Universities)
          </p>
          <p>❖ Workshops attended : 27</p>
          <p>
            ❖ FDP’s / Course works : 18 <br />
            (NPTEL/Academic Staff Colleges)
          </p>
          <p>
            ❖ Scopus h-index : 12 <br />
             <a href="https://www.scopus.com/authid/detail.uri?authorId=6506204413" className="dir-action-link" target="_blank" rel="noopener noreferrer">View Scopus Profile</a>
          </p>
          <p>
            ❖ Google h-index : 16 <br />
             <a href="https://scholar.google.co.in/citations?user=S7TNMfsAAAAJ&hl=en" className="dir-action-link" target="_blank" rel="noopener noreferrer">View Google Scholar Profile</a>
          </p>
          <p className="dir-sub-heading">Research Students Under Supervision</p>
          <p>❖ Awarded Ph.D’s: 03 </p>
          <p>❖ Pursing Ph.D’s: 07 <br />
            (Supervisor & Co-Supervisor)
          </p>
        </div>
      )}
    </div>
  );
}

export default Placements;
