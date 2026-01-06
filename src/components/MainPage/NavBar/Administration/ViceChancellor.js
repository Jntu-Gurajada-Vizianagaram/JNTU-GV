import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import vc from "../../../../assets/AdminDirectoratesImages/vc.png";
import tick from "../../../../assets/StyleImages/tick.svg";
import "./AdminandDirectorates.css";

function ViceChancellor() {
  return (
    <div className="allRightContent-Profile">
      {/* Profile Header */}
      <div className="profileName">
        <div className="profile-Image">
          <img src={vc} alt="Profile" />
        </div>
        <h3>Prof. V. V. Subba Rao</h3>
        <h4>Hon’ble Vice-Chancellor</h4>
        <p className="profileEmail">
          <MdOutlineMailOutline size="20px" />
          vc@jntugv.edu.in
        </p>
      </div>

      {/* Profile Details */}
      <div className="profileDetails">
        <div className="contributions">

          {/* Intro */}
          <div className="registar-1">
            <p>
              Prof. V. V. Subba Rao is the Vice-Chancellor of Jawaharlal Nehru
              Technological University – Gurajada, Vizianagaram. He is a
              Professor of Mechanical Engineering with extensive academic and
              administrative experience in technical education.
            </p>
          </div>

          {/* Qualifications */}
          <div className="registar-2">
            <p className="AD-sub">Academic Qualifications</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Ph.D. from IIT Kharagpur.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Post-Doctoral Fellowship from Hoseo University, South Korea.
            </p>
          </div>

          {/* Experience */}
          <div className="registar-3">
            <p className="AD-sub">Professional Experience</p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Lecturer, BMS College of Engineering, Bangalore (Nov 1993 – Sep 1994).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Assistant Professor, JNTU College of Engineering, Kakinada
              (Sep 1994 – Apr 2003).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Associate Professor, JNTU College of Engineering, Kakinada
              (May 2003 – Aug 2006).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Head, Department of Mechanical Engineering, JNTU College of
              Engineering, Kakinada (Sep 2006 – Mar 2007).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Officer In-charge of Hostels, JNTU College of Engineering,
              Pulivendula (Oct 2008 – Jan 2009).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Officer In-charge of Examinations, University College of
              Engineering, Kakinada.
            </p>
          </div>

          {/* Administrative Roles */}
          <div className="registar-4">
            <p className="AD-sub">Administrative Positions</p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Director, Foreign Universities Relations, JNTUK Kakinada
              (Sep 2016 – Jun 2017).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Registrar, JNTUK Kakinada (Jun 2017 – Dec 2019).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Principal, University College of Engineering, Narasaraopet
              (Dec 2019 – Jul 2023).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Convener, AP EAPCET-2025.
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Rector, JNTUK (Jul 2025).
            </p>

            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Vice-Chancellor, JNTU-GV, Vizianagaram
              (from 13-10-2025 onwards).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViceChancellor;
