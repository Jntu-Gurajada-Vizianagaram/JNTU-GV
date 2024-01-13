import React from 'react';
import Evaluationi from "../../../../assets/ExaminationImages/Evaluationi.png";
import './Examinations.css'; 

function EvaluationExam() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Evaluation
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {Evaluationi} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Dr. D. Rajya Lakshmi</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Director of Evaluation</h4><br></br>
            <h3>Professor of Dept. of Computer Science and Engineering</h3>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: de@jntugv.edu.in</p>
          <hr />
          <p>Dr. D. Rajya Lakshmi obtained her B.Tech in Electronics and Communications Engineering from Andhra University. M.Tech in Computer Science from Andhra University, and PhD from JNTU Hyderabad, India. She is currently working as Professor in the Department of Computer Science and Engineering at JNTUGV. Vizianagaram, India.</p>
          <p>Her research interests arevested in the area of Image Processing, Machine Learning, Data Mining and Software Engineering. She accrued a total teaching experience of around 29 years in which she found her calling with academia and is pursuing her passion serving in various capacities as Professor Principal, Vice Principal Academics, HOD, CSE & IT,BOSmemberBoS Chairperson, Academic Council Member, Regional Co-Ordinator for APSLPRB, Co-Ordinator for campus wide network, Member Research Review Committee at Department of CSE, JNTUK, Co-Ordinator for AP POLYCET, APEMACET, Member, CAC, JNTUK, UCEN&UCEKfive emerging courses.</p>
          <p>She has more than 75 research publications in various National, International Journals and Conferences, Book Chapters, Books and Patents published to her credit. With over 29 years of experience, Dr. D. Rajya Lakshmi is well reputed for her Guest Lectures on various topics spanning from Image Processing to Career Advancement and is. widely known for her commitment to teaching and catering to students needs at large.She guided 13 students to completion of their Ph.D and is guiding08 Ph.D students. Dr. Rajya Lakshmi is known for her unique initiatives like Women Empowerment and makes her mark in the roles that she adorns.</p>
        </div>
      </div>
    </div>
  );
}

export default EvaluationExam;
