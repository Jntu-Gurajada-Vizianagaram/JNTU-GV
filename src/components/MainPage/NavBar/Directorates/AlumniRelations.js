import React from "react";
import "../Administration/AdminandDirectorates.css"; // Import your CSS file here
import daa from "../../../../assets/AdminDirectoratesImages/daa.jpg";


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
            <h3 className="ADh3">Dr. K. Srikumar</h3>
            <h3 className="ADh3">
              Director of Alumni Relations
            </h3>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
              Professor of Dept. of Electrical & Electronics Engineering
            </h4>
          </div>
        </center>
        <hr />
        {/* Profile description */}
        <p>Email: dar@jntugv.edu.in</p>
        <hr></hr>
        <p className="ADsub">Administrative Positions</p>
        <p>
          ❖ Presently performing duties as Director of Alumimi Relationship of JNTU GV from 14-08-2024.
        </p>
        <p>
          ❖ Performed duties as Principal of JNTU GV, College of Engineering Vizianagaram from 03-8-2023 to 13-08-2024.
        </p>
        <p>
          ❖ Performed duties as Principal i/c of JNTU GV, College of Engineering Vizianagaram from 22-8-2022 to 03-08-2023.
        </p>
        <p>
          ❖ Performed duties as Head of the EEE Department, UCEK(A),JNTUK, Kakinada Jan 2020 to June 2022
        </p>
        <p>
          ❖ Performed duties as Project Engineer, JNTU GV College of Engineering Vizianagaram.
        </p>
        <p>
          ❖ Performed duties as Additional Controller of Examinations, JNTUK  from 29-11-2017 to 30-04-2019
        </p>
        <p>
          ❖ Performed duties as JNTUK NSS Coordinator from March, 2013 to March,2017.
        </p>
        <p>
          ❖ Worked in several confidential exams as Member in EAMCET, ECET etc.
        </p>
        <p>
          ❖ Worked as Head of the Department for EEE in JNTUK, Vizianagaram Campus for a period of 3 years
        </p>
        <p>
          ❖ Performed duties as Officer In charge of Exams at JNTUK, Vizianagaram Campus.
        </p>
        <p>
          ❖ With the support and guidance of  Senior Professors  in University and College, Electrical circuits Lab, Electrical Measurements Lab, Power Electronics lab, Electrical Machines - I & II Labs were established @ UCEV, Vizianagaram Campus during my presence as a faculty and Head of the EEE Dept.
        </p>
      
        <p className="ADsub">Awards:</p>
        <p>
          ❖ Received VIJ trust presented Global Eminent Academician Award for the year 2021.
        </p>


        <p className="ADsub">National / International Conference Publication:</p>
        <p>
          ❖ Power flow analysis in the presence of VSM of Interline Power Flow Controller in an optimal location.
        </p>
        <p>
          ❖ Multi- objective optimized voltage stability using NDSPSO with cost and loss objectives pp-50.
        </p>
        <p>
          ❖ Incorporation of UPFC transformer model in an optimal location using sensitivity analysis.
        </p>
        <p>
          ❖ Optimization of cost and voltage stability index using NDSPSO for estimation of loadability.
        </p>
        <p>
          ❖ Multi-objective loadability enhancement with optimal SVC placement through risk index and modal analysis approaches.
        </p>
        <p>
          ❖ Analysis of power system in the presence of Hybrid Flow Controller.
        </p>
        <p>
          ❖ Multi-Objective optimization in the presence of Hybrid Flow Controller.
        </p>

      </div>
    </div>
  );
}

export default AlumniRelations;
