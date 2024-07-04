import React from "react";
import "../Administration/AdminandDirectorates.css"; // Import your CSS file here
import dirp from "../../../../assets/AdminDirectoratesImages/dir&p.jpg";


function Placements() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director<sup>i/c</sup> Industrial Relations & Placements
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
            <div className="ADimg">
              <img
                src={dirp}
                alt="Profile"
              />
            </div>
            <div className="profileName">
              <h3 className="ADh3">Dr.G.J. Naga Raju</h3>
              <h3 className="ADh3">Director<sup>i/c</sup> Industrial Relations & Placements</h3>
            </div>
            <div className="profileDesignation">
              <h4 className="ADh4">
              Associate Professor of Physics
              </h4>
            </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: dirp@jntugv.edu.in</p>
          <hr></hr>

          <p>
          Dr. G. J. N. Raju, Associate Professor of Physics, received Doctorate in Nuclear Physics from Andhra University in the year 2006. Dr. Raju completed M.Tech (Computer Science and Technology) in 2010 from GITAM University and M.Sc. (Nuclear Physics) in 2000 from Andhra University, Visakhapatnam. He has nearly 20 years of teaching experience at University level. Dr. Raju received two Best Paper presentation awards at DAE conferences and received five academic awards from various organizations and Universities. He authored two textbooks titled as “Nano Physics” and “Basic Engineering Physics” and authored four book chapters. He filed two Indian patents and received two UK patent grant certificates. Dr. Raju served the institution in various capacities like Head of the Dept. of BS&HSS, Officer  in-charge Examinations, R & D co-ordinator, NBA, NAAC, and AICTE co-ordinator at Department level, BoS Chairperson and as a member, etc. 
          </p>

          <p className="ADsub">Research Experience</p>
          <p>
            ❖ Senior Research Fellow (13-07-2004  to 30-03-2006) <br />
            Dept. of Nuclear Physics, Andhra University, Visakhapatnam-530 003, India / Council of Scientific and Industrial Research (CSIR), Govt. of India.

          </p>
          <p>
            ❖ Project Fellow  (02-12-2003  to 12-07-2004)<br />
            “Trace elemental analysis in biological and environmental samples by PIXE technique”              Funded by UGC-DAE Consortium for Scientific Research, Kolkata Centre, India.

          </p>
          <p>
            ❖ Junior Research Fellow (30-09-04-2000  to 31-03-2003) <br />
            “Online studies of K and Lx-ray ion intensity ratios using heavy ions”
            Funded by UGC-DAE Consortium for Scientific Research, Kolkata Centre, India

          </p>
      
          <p className="ADsub">Research Projects Completed </p>
          <p>
            ❖ “Diagnosis of ovarian cancer using decision tree classification of trace elemental data obtained by applying ion beam analysis” under DST-FTS, Young Scientist Scheme (DST SR/FTP/PS-139/2011), Total cost of the project: Rs. 21,84,000/- 
          </p>
          <p>
            ❖ 	“Acquisition and analysis of trace elemental data obtained from biological samples of breast cancer patients using analytical techniques” under UGC Major Research Projects (42-831/2013(SR): Co-Investigator), Total cost of the project: Rs.13,54,800/-
          </p>
          <p>❖ 	“Multi elemental mapping of blood serum of diabetes mellitus patients using synchrotron radiation based florescence spectroscopy” UGC-DAE Consortium for Scientific Research, Indore Centre, Govt. of India (CSR-IC-BL-60/CRS-177/2016-17/841):
            Co-Investigator, Total cost of the project: Rs.7,68,600/- (Per Year)
          </p>

          <p className="ADsub">Research Publications</p>
          <p>
            ❖ Research Paper in Journals <span id="spanSpace"> :64</span> <br/>
            (Scopus Indexed:46 & UGC approved:18)
          </p>
          <p>
            ❖ Papers presented at conference Symposia	 <span id="spanSpace">:48  </span> <br/>
            (organized by DAE-BRNS, BARC&Universities)
          </p>
          <p>❖ Workshops attended <span id="spanSpace"> :27</span> </p>
          <p>
            ❖ FDP’s / Course works <span id="spanSpace">:18 </span><br/>
            (NPTEL/Academic Staff Colleges)                
          </p>
          <p>
            ❖ Scopus h-index <span id="spanSpace"> :12</span> <br/>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=6506204413">(https://www.scopus.com/authid/detail.uri?authorId=6506204413)</a>                
          </p>
          <p>
            ❖ Google h-index<span id="spanSpace">  :16</span> <br/>
            <a href="https://scholar.google.co.in/citations?user=S7TNMfsAAAAJ&hl=en">(https://scholar.google.co.in/citations?user=S7TNMfsAAAAJ&hl=en)</a>                
          </p>
          <p className="ADsub">Research Students Under Supervision</p>
          <p>❖ Awarded Ph.D’s<span id="spanSpace">:03 </span> </p>
          <p>❖ Pursing Ph.D’s<span id="spanSpace">:07  </span><br/>
          (Supervisor & Co-Supervisor)
            
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Placements;
