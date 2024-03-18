import React from 'react';
import Controlleri from "../../../../assets/ExaminationImages/Controlleri.jpg";
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
              <h3>Dr. R. Gurunadha</h3>
            </div>
            <div className="profileDesignation">
              <h4 className="regularStyleH4">Controller of Examinations</h4><br></br>
              <h3>Associate Professor, Department of Electronics & Communications Engineering</h3>
            </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ce@jntugv.edu.in</p>
          <hr />
          <p>Dr. R. Gurunadha, an esteemed Associate Professor in the Department of Electronics & Communication Engineering (ECE) at JNTU-GV, CEV, Vizianagaram, is a distinguished academic and researcher with a rich background in engineering and technology. With his extensive experience and contributions to the field, he has become a pivotal figure in shaping the future of electronics and communication engineering education and research.</p>
          <h6>Educational Background:</h6> <p>
            •	Bachelor of Engineering (B.E) in Electronics & Communication Engineering, Andhra University College of Engineering (AUCE), Visakhapatnam (1998- 2003)<br></br>
            •	Master of Technology (M.Tech) in Instrumentation and Control Systems, JNTU Kakinada (2003 - 2005)
          </p>
          <h6>Professional Journey:</h6><p>
            •	Office In-Charge of Examinations, JNTUK, UCEV, Vizianagaram (2009-2013)<br></br>
            •	NSS Program Officer, JNTUK, UCEV, Vizianagaram (2013-2016)<br></br>
            •	Officer In-Charge of Library, JNTUK, UCEV, Vizianagaram (2016-2019)<br></br>
            •	Sports Coordinator, JNTUK, UCEV, Vizianagaram.<br></br>
            •	In-Charge Head of the Department of ECE, JNTUK, UCEV, Vizianagaram (2010-2013)
          </p>
          <h6>Research and Publications:</h6><p>
          Dr. R. Gurunadha has made significant contributions to the field of electronics and communication engineering through his extensive research and publications. His work primarily focuses on fault modeling in analog circuits, low-power digital circuit design, and advancements in quantum dot cellular automata. He has authored and co-authored numerous papers in various international journals and conferences
          </p>
        </div>
      </div>
    </div>
  );
}

export default Controller;
