import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import vc from "../../../../assets/AdminDirectoratesImages/vc.jpg";
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
              Prof. Vissakodeti Venkata Subba Rao is the Vice-Chancellor of
              Jawaharlal Nehru Technological University, Gurajada, Vizianagaram.
              He is an academician par excellence, a dedicated teacher, and a
              visionary leader committed to elevating Indian technical
              education to global standards.
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="registar-2">
            <p className="AD-sub">Academic Qualifications</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Ph.D., Computer Science & Engineering, JNTUH, Hyderabad.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              M.Tech., Computer Science & Engineering, Andhra University.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              B.E., Electronics Engineering, SRKR College of Engineering,
              Bhimavaram.
            </p>
          </div>

          {/* Academic Excellence */}
          <div className="registar-3">
            <p className="AD-sub">Academic Excellence</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Award for “Valuable Ideas towards Vision of SWARNA ANDHRA 2047”
              presented by Sri Nara Chandrababu Naidu, Hon’ble CM of A.P.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Outstanding Leadership Legacy Award – Council for Skills and
              Competencies.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Elected as “Meritorious Teacher” by Dr. Kodela Siva Prasad,
              Hon’ble First Speaker of Andhra Pradesh.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Certified Database Associate on DB2 & Associate Developer – IBM.
            </p>
          </div>

          {/* Administrative Positions */}
          <div className="registar-4">
            <p className="AD-sub">Administrative Positions</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Vice-Chancellor (i/c), JNTU-GV, Vizianagaram – from 19 July 2024.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Director of Evaluation, JNTU-GV – Oct 2022 to Aug 2024.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Principal & HOD (CSE), JNTUK-UCEN, Narasaraopet – 2018 to 2019.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Vice-Principal (Academics) & HOD, CSE – 2016 to 2018.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Director (i/c), Women Empowerment & Grievances Cell – JNTUGV.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              BOS Chairperson for CSE & IT Departments – JNTU-GV.
            </p>
          </div>

          {/* Research Contributions */}
          <div className="registar-5">
            <p className="AD-sub">Research Contributions</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Ph.Ds Awarded: 15 | Submitted: 02 | Guiding: 15.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              External Funded Projects – Completed: 01 | Ongoing: 02.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Patents – Granted: 01 | Published: 03.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Published nearly 100 research papers in reputed journals and
              conferences.
            </p>
          </div>

          {/* Books */}
          <div className="registar-6">
            <p className="AD-sub">Books & Publications</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Investigating Fraudulent Medical Claims using Machine Learning –
              Handbook of AI, 2023.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Clustering Based Band Selection – Lambert Academic Publishing.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Water Quality Prediction of Aqua Ponds – 2019.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Practical Guide to Ethical Hacking & Information Security.
            </p>
          </div>

          {/* Honors */}
          <div className="registar-7">
            <p className="AD-sub">Honors & Memberships</p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Life Member of CSI, ISTE, BMEI.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              BOS Chairperson – Emerging Courses, JNTUK.
            </p>
            <p>
              <img src={tick} alt="Icon" className="AD-icon" />
              Regional Coordinator – AP State Police Recruitment Board.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViceChancellor;
