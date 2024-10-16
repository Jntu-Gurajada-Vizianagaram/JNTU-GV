import React from "react";
import vc from "../../../../assets/AdminDirectoratesImages/doe.png";
import "./AdminandDirectorates.css"; // Import your CSS file here
import { MdOutlineMailOutline } from "react-icons/md";
function ViceChancellor() {
  return (
    <div className="allRightContent-Profile">
      <div className="profileName">
        <div className="profile-Image">
          <img src={vc} alt="Profile" />
        </div>
        <h3>Dr. D. Rajya Lakshmi</h3>
        <h4>Hon’ble Vice-Chancellor(i/c)</h4>
        <p>
          <MdOutlineMailOutline width="40px" />
          vc@jntugv.edu.in
        </p>
      </div>
      <div className="profileDetailsVC">
      <p>
          Dr. D. Rajya Lakshmi is the incharge Vice-Chancellor of
          Jawaharlal Nehru Technological University, Gurajada, Vizianagaram. She
          is an academician par excellence, a beloved teacher, and a focused
          leader with the vision to improve Indian education to internationally
          approved standards.

          </p>
      <p>
            She obtained her BTech in Electronics and
            Communications Engineering from Andhra University, M.Tech in
            Computer Science from Andhra University, and PhD from JNTU
            Hyderabad, India. She is currently working as Professor in the
            Department of Computer Science and Engineering at JNTUGV,
            Vizianagaram, India.
          </p>

          <p>
            Her research interests arevested in the area of Image Processing,
            Machine Learning, Data Mining and Software Engineering. She accrued
            a total teaching experience of around 29 years in which she found
            her calling with academia and is pursuing her passion serving in
            various capacities as Professor,Principal, Vice Principal Academics,
            HOD, CSE & IT,BoSmemberBoS Chairperson, Academic Council Member,
            Regional Co-Ordinator for APSLPRB, Co-Ordinator for campus wide
            network, Member Research Review Committee at Department of CSE,
            JNTUK, Co-Ordinator for AP POLYCET, APEMACET, Member, CAC, INTUK,
            UCEN&UCEKfive emerging courses.
          </p>
          <p>
            She has more than 75 research publications in various National,
            International Journals and Conferences, Book Chapters, Books
            andPatents published to her credit. With over 29 years of
            experience, Dr. D. Rajya Lakshmi is well reputed for her Guest
            Lectures on various topics spanning from Image Processing to Career
            Advancement and is widely known for her commitment to teaching and
            catering to students needs at large.She guided 13 students to
            completion of their Ph.D and is guiding08 Ph.D students. Dr. Rajya
            Lakshmi is known for her unique initiatives like Women Empowerment
            and makes her mark in the roles that she adorns.
          </p>
      </div>
    </div>
  );
}

export default ViceChancellor;
