import Controlleri from '../../../../assets/ExaminationImages/controller.jpg';
import './Examinations.css';

function Controller() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Controller of Examinations
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
            <div className="profileImage">

              <img src={Controlleri} alt="Profile" height={"350px"} />

            </div>
            <div className="profileName">
              <h3>Dr. Ch. Bindu Madhuri</h3>
            </div>
            <div className="profileDesignation">
              <h4 className="regularStyleH4">Controller of Examinations</h4>
              <h3>Associate Professor, Department of Information Technology</h3>
            </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ce@jntugv.edu.in</p>
          <p>Phone: 08922 294997</p>
          <hr />
            <p>Dr. Ch. Bindu Madhuri, an esteemed Associate Professor in the Department of Information Technology at JNTU-GV, CEV, Vizianagaram, is a distinguished academic and researcher with a rich background in engineering and technology. With his extensive experience and contributions to the field, he has become a pivotal figure in shaping the future of information technology education and research.</p>
            {/* <h6 className="ADsub">Educational Background:</h6> <p> */}
              {/* •	Bachelor of Engineering (B.E) in Electronics & Communication Engineering, Andhra University College of Engineering (AUCE), Visakhapatnam (1998- 2003)<br></br>
            •	Master of Technology (M.Tech) in Instrumentation and Control Systems, JNTU Kakinada (2003 - 2005) */}
          {/* </p> */}
          <h6 className="ADsub">Professional Journey:</h6>
          <p>
            •	Office In-Charge of Hostels, JNTU-GV CEV, Vizianagaram (2024-Present)<br></br>
            •	Head Of the Department , Department of Information Technology , JNTU-GV CEV, Vizianagaram (2024-2026)
            •	Additional Controller of Examinations -PG and Additional Controller of Examinations - SDC , JNTU GV , Vizianagaram (2022-2024)
          </p>
              <h6 className="ADsub">Academic Contributions:</h6>
          <p>
          Dr Ch Bindu Madhuri is having a total of 19 years of experience in teaching and research. She worked as Officer in-charge of Examinations, APSSDC Skill development coordinator, Deputy Warden and presently working as Nodal Officer Biometric Attendance and Additional Controller of Examinations.</p>
          <p>Dr Ch Bindu Madhuri is a member of IEEE. She published 20 research papers in various international/national journals and conferences. She is an editorial board member and reviewer of many international journals. She is currently guiding 8 research scholars as Supervisor/Co- Supervisor for their PhD degrees. Her research areas include the Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing.</p>
        
        </div>
      </div>
    </div>
  );
}

export default Controller;
