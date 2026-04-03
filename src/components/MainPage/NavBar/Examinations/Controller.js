import React from "react";
import Controlleri from '../../../../assets/ExaminationImages/controller.jpg';
import { MdOutlineMailOutline } from "react-icons/md";

function Controller() {
  return (
    <div className="exam-profile-container">
      {/* Profile Section */}
      <div className="exam-content-area-header">
        <h3>Controller of Examinations</h3>
      </div>
      <center>
        <div className="exam-profile-image">
          <img src={Controlleri} alt="Profile" />
        </div>
        <div className="exam-profile-name">
          <h3>Dr. Ch. Bindu Madhuri</h3>
          <h4>Controller of Examinations</h4>
          <h4>Associate Professor, Department of Information Technology</h4>
          <p className="exam-profile-email">
            <MdOutlineMailOutline size="20px" /> ce@jntugv.edu.in
          </p>
          <p>Phone: 08922 294997</p>
        </div>
      </center>

      <hr />

      {/* Profile Details */}
      <div className="exam-profile-details">
        <p>
          Dr. Ch. Bindu Madhuri, an esteemed Associate Professor in the Department of Information Technology at JNTU-GV College of Engineering (CEV) (A), Vizianagaram, is a distinguished academic and researcher with a rich background in engineering and technology. With her extensive experience and contributions to the field, she has become a pivotal figure in shaping the future of information technology education and research.
        </p>

        <p className="exam-sub-heading">Professional Journey:</p>
        <p>
          • Office In-Charge of Hostels, JNTU-GV College of Engineering (CEV) (A) (2024-Present)<br />
          • Head Of the Department, Department of Information Technology, JNTU-GV College of Engineering (CEV) (A) (2024-2026)<br />
          • Additional Controller of Examinations -PG and Additional Controller of Examinations - SDC, JNTU-GV, Vizianagaram (2022-2024)
        </p>

        <p className="exam-sub-heading">Academic Contributions:</p>
        <p>
          Dr Ch Bindu Madhuri is having a total of 19 years of experience in teaching and research. She worked as Officer in-charge of Examinations, APSSDC Skill development coordinator, Deputy Warden and presently working as Nodal Officer Biometric Attendance and Additional Controller of Examinations.
        </p>
        <p>
          Dr Ch Bindu Madhuri is a member of IEEE. She published 20 research papers in various international/national journals and conferences. She is an editorial board member and reviewer of many international journals. She is currently guiding 8 research scholars as Supervisor/Co- Supervisor for their PhD degrees. Her research areas include the Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing.
        </p>
      </div>
    </div>
  );
}

export default Controller;
