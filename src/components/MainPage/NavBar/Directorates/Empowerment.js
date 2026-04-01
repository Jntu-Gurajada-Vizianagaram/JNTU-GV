import React from "react";
import doe from "../../../../assets/AdminDirectoratesImages/doe.png";
import { MdOutlineMailOutline } from "react-icons/md";

function Empowerment() {
  return (
    <div className="dir-profile-container">
      {/* Profile Header Block */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={doe} alt="Dr. D. Rajya Lakshmi" />
        </div>
        <div className="dir-profile-info">
          <h3>Dr. D. Rajya Lakshmi</h3>
          <h4>Director of Empowerment of Women & Grievances</h4>
          <h4>Professor, Dept. of Computer Science and Engineering</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> dewg@jntugv.edu.in
          </p>
        </div>
      </div>

      {/* Profile Details Block */}
      <div className="dir-profile-details">
        <p>
          Dr. D. Rajya Lakshmi obtained her BTech in Electronics and Communications Engineering from Andhra University, M.Tech in Computer Science from Andhra University, and PhD from JNTU Hyderabad, India. She is currently working as Professor in the Department of Computer Science and Engineering at JNTU-GV college of Engineering, Vizianagaram, India.
        </p>

        <p>
          Her research interests are vested in the area of Image Processing, Machine Learning, Data Mining and Software Engineering. She accrued a total teaching experience of around 29 years in which she found her calling with academia and is pursuing her passion serving in various capacities as Professor, Principal, Vice Principal Academics, HOD, CSE & IT, BoS member BoS Chairperson, Academic Council Member, Regional Co-Ordinator for APSLPRB, Co-Ordinator for campus wide network, Member Research Review Committee at Department of CSE, JNTUK, Co-Ordinator for AP POLYCET, APEMACET, Member, CAC, INTUK, UCEN & UCEK five emerging courses.
        </p>
        <p>
          She has more than 75 research publications in various National, International Journals and Conferences, Book Chapters, Books and Patents published to her credit. With over 29 years of experience, Dr. D. Rajya Lakshmi is well reputed for her Guest Lectures on various topics spanning from Image Processing to Career Advancement and is widely known for her commitment to teaching and catering to students needs at large. She guided 13 students to completion of their Ph.D and is guiding 08 Ph.D students. Dr. Rajya Lakshmi is known for her unique initiatives like Women Empowerment and makes her mark in the roles that she adorns.
        </p>
      </div>
    </div>
  );
}

export default Empowerment;
