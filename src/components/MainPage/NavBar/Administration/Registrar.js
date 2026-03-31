import React from "react";
import registrar from "../../../../assets/AdminDirectoratesImages/registrar_new.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import tick from "../../../../assets/StyleImages/tick.svg";

function Registrar() {
  return (
    <div className="admin-profile-container">
      {/* Profile Section */}
      <center>
        <div className="admin-profile-image">
          <img src={registrar} alt="Registrar Profile" />
        </div>
        <div className="admin-profile-name">
          <h3>Prof. D. Rajya Lakshmi</h3>
          <h3>Registrar</h3>
          <h4>Professor of Computer Science & Engineering</h4>
          <p className="admin-profile-email">
            <MdOutlineMailOutline size="20px" />
            rajyalakshmi.cse@jntugvcev.edu.in
          </p>
        </div>
      </center>

      {/* Profile Details */}
      <div className="admin-profile-details">
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
            <p className="admin-sub-heading">Administrative Contributions</p>
            <p><img src={tick} alt="tick" /> Registrar, JNTU-GV, Vizianagaram (Present)</p>
            <p><img src={tick} alt="tick" /> Vice-Chancellor (i/c), JNTU-GV (From July 2024)</p>
            <p><img src={tick} alt="tick" /> Director of Evaluation, JNTU-GV (Oct 2022 – Aug 2024)</p>
            <p><img src={tick} alt="tick" /> Director of Women Empowerment & Grievances (i/c)</p>
            <p><img src={tick} alt="tick" /> Principal & HOD (CSE), JNTUK Narasaraopet</p>
            <p><img src={tick} alt="tick" /> Vice Principal (Academics), JNTUK Narasaraopet</p>
            <p><img src={tick} alt="tick" /> Professor & HOD, CSE Department</p>
            <p><img src={tick} alt="tick" /> BOS Chairperson (CSE & IT)</p>
            <p><img src={tick} alt="tick" /> Academic Senate Member</p>
          </div>

          {/* Academic Qualifications */}
          <div className="registar-3">
            <p className="admin-sub-heading">Academic Qualifications</p>
            <p><img src={tick} alt="tick" /> Ph.D in Computer Science & Engineering (JNTU Hyderabad)</p>
            <p><img src={tick} alt="tick" /> M.Tech in Computer Science & Engineering – Andhra University</p>
            <p><img src={tick} alt="tick" /> B.E. in Electronics – Andhra University</p>
            <p><img src={tick} alt="tick" /> Diploma in Electronics & Post Diploma in Computer Applications</p>
            <p><img src={tick} alt="tick" /> National Merit Scholar</p>
          </div>

          {/* Research Contributions */}
          <div className="registar-4">
            <p className="admin-sub-heading">Research Contributions</p>
            <p><img src={tick} alt="tick" /> 65+ International Journal Publications</p>
            <p><img src={tick} alt="tick" /> 25 Conference Publications</p>
            <p><img src={tick} alt="tick" /> 15 PhDs Awarded</p>
            <p><img src={tick} alt="tick" /> 4 Patents Published</p>
            <p><img src={tick} alt="tick" /> Funded Research Projects (Completed & Ongoing)</p>
          </div>

          {/* Books & Certifications */}
          <div className="registar-5">
            <p className="admin-sub-heading">Books & Certifications</p>
            <p><img src={tick} alt="tick" /> Books on Artificial Intelligence, Machine Learning & Cyber Security</p>
            <p><img src={tick} alt="tick" /> IBM Certified Database Associate</p>
            <p><img src={tick} alt="tick" /> IBM Certified Application Developer</p>
            <p><img src={tick} alt="tick" /> FDPs in Machine Learning, Cyber Security, Data Science</p>
          </div>

          {/* Professional Memberships */}
          <div className="registar-6">
            <p className="admin-sub-heading">Professional Memberships</p>
            <p><img src={tick} alt="tick" /> Life Member – CSI</p>
            <p><img src={tick} alt="tick" /> Life Member – ISTE</p>
            <p><img src={tick} alt="tick" /> Member – BMEI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
