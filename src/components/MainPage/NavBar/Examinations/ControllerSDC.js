import Controller3i from '../../../../assets/ExaminationImages/ACE3.jpg';
import './Examinations.css';

function ControllerSDC() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-SDC
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {Controller3i} alt="Profile" width={290}/>
        
          </div>
          <div className="profileName">
            <h3>Mr. D D V Sivaram Rolangi</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Additional Controller of Examinations (SDC)</h4><br></br>
            <h3>Assistant Professor, Department of Computer Science & Engineering</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: acesdc@jntugv.edu.in</p>
          <hr />
          <p>Mr. D D V Sivaram Rolangi, currently working as Assistant Professor in Department of Computer Science and Engineering, University College of Engineering Vizianagaram-JNTU-GV, Vizianagaram, completed his B. Tech in Computer Science and Engineering from V R Siddhartha Engineering College, Vijayawada. M.Tech in Information Technology and  currently pursuing his Ph.D under Visveswaraya PhD scheme  from Andhra University College of Engineering , Andhra University, Visakhapatnam.  </p>
          <p>His areas of interests include Theoretical Computer Science, Compiler technologies, Network programming. He has about 19 years of experience in teaching. His research interests include Machine learning, Computer vision, Deep learning, IoT and Assistive Technologies. </p>
        
        <p className="ADsub">Additional Roles carried out so far :</p>
<p>❖ Network & systems coordinator.</p>
<p>❖ Deputy Warden. </p>
<p>❖ Training & Placement Officer (TPO).</p>
<p>❖ Officer In charge of Hostels (OIH).</p>



<p className="ADsub">Present administrative roles: </p>
<p>❖ Dispensary Coordinator </p>
<p>❖ Public Relations Officer(PRO) of JNTUGV </p>
<p>❖ Additional Controller of Examinations -III ( ACE-3)</p>
<p>❖ Additional Controller of Examinations-SDC</p>
</div>
      </div>
    </div>
  );
}

export default ControllerSDC;
