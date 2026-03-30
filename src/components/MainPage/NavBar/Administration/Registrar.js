import React from "react";
import registrar from "../../../../assets/AdminDirectoratesImages/registrar_new.jpeg";
import "../Administration/AdminandDirectorates.css";
import { MdOutlineMailOutline } from "react-icons/md";

function Registrar() {
  return (
    <div className="allRightContent-Profile">

      {/* Profile Section */}
      <div className="profileName">
        <div className="profile-Image">
          <img src={registrar} alt="Registrar Profile" />
        </div>

        <h3>Prof. D. Rajya Lakshmi</h3>
        <h3>Registrar</h3>
        {/* <h4>Former Vice-Chancellor (i/c)</h4> */}
        <h4>Professor of Computer Science & Engineering</h4>

        <p className="profileEmail">
          <MdOutlineMailOutline size="20px" />
          rajyalakshmi.cse@jntugvcev.edu.in
        </p>
      </div>

      {/* Profile Details */}
      <div className="profileDetails">
        <div className="contributions">

          {/* Bio */}
          <div className="registar-1">
            <p>
              Prof. D. Rajya Lakshmi is currently serving as the Registrar of JNTU-GV, Vizianagaram.
              She previously served as the Vice-Chancellor (i/c) from July 2024. She is a Professor in
              the Department of Computer Science and Engineering with over 30 years of teaching,
              research, and administrative experience.
            </p>
          </div>

          {/* Administrative Contributions */}
          <div className="registar-2">
            <p className="AD-sub">Administrative Contributions</p>

            <p>❖ Registrar, JNTU-GV, Vizianagaram (Present)</p>
            <p>❖ Vice-Chancellor (i/c), JNTU-GV (From July 2024)</p>
            <p>❖ Director of Evaluation, JNTU-GV (Oct 2022 – Aug 2024)</p>
            <p>❖ Director of Women Empowerment & Grievances (i/c)</p>
            <p>❖ Principal & HOD (CSE), JNTUK Narasaraopet</p>
            <p>❖ Vice Principal (Academics), JNTUK Narasaraopet</p>
            <p>❖ Professor & HOD, CSE Department</p>
            <p>❖ BOS Chairperson (CSE & IT)</p>
            <p>❖ Academic Senate Member</p>
          </div>

          {/* Academic Qualifications */}
          <div className="registar-3">
            <p className="AD-sub">Academic Qualifications</p>

            <p>❖ Ph.D in Computer Science & Engineering (JNTU Hyderabad)</p>
            <p>❖ M.Tech in Computer Science & Engineering – Andhra University</p>
            <p>❖ B.E. in Electronics – Andhra University</p>
            <p>❖ Diploma in Electronics & Post Diploma in Computer Applications</p>
            <p>❖ National Merit Scholar</p>
          </div>

          {/* Research Contributions */}
          <div className="registar-4">
            <p className="AD-sub">Research Contributions</p>

            <p>❖ 65+ International Journal Publications</p>
            <p>❖ 25 Conference Publications</p>
            <p>❖ 15 PhDs Awarded</p>
            <p>❖ 4 Patents Published</p>
            <p>❖ Funded Research Projects (Completed & Ongoing)</p>
          </div>

          {/* Books & Certifications */}
          <div className="registar-5">
            <p className="AD-sub">Books & Certifications</p>

            <p>❖ Books on Artificial Intelligence, Machine Learning & Cyber Security</p>
            <p>❖ IBM Certified Database Associate</p>
            <p>❖ IBM Certified Application Developer</p>
            <p>❖ FDPs in Machine Learning, Cyber Security, Data Science</p>
          </div>

          {/* Professional Memberships */}
          <div className="registar-6">
            <p className="AD-sub">Professional Memberships</p>

            <p>❖ Life Member – CSI</p>
            <p>❖ Life Member – ISTE</p>
            <p>❖ Member – BMEI</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Registrar;