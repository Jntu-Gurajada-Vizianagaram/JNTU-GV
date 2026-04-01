import React from "react";
import daap from "../../../../assets/AdminDirectoratesImages/jayasuma_daap.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";

function AlumniRelations() {
  return (
    <div className="dir-profile-container">
      {/* Profile Header Block */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={daap} alt="Prof. Dr. G. Jaya Suma" />
        </div>
        <div className="dir-profile-info">
          <h3>Prof. Dr. G. Jaya Suma</h3>
          <h4>Director i/c of Alumni Relations</h4>
          <h4>Professor, Department of Information Technology</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> dar@jntugv.edu.in
          </p>
        </div>
      </div>

      {/* Profile Details Block */}
      <div className="dir-profile-details">
        <p>
          Dr. G. Jaya Suma, present working as a Professor in Department of Information Technology, Director of Academic Audit and Planning, Director (i/c) of Alumni Relations, Executive Council member of JNTU-GV - Vizianagaram, AP. Completed her B.Tech (CS&SE), MTech (CS&T), Ph.D(CSE). Having experience of 22 plus years Teaching, Research and Administration of Engineering Education.
        </p>

        <p className="dir-sub-heading">Administrative Positions</p>
        <p>❖ Currently Director of Academic Audit and Planning, JNTU-GV since from November 2022.</p>
        <p>❖ Former Registrar of JNTU-GV from 2024-2026.</p>
        <p>❖ Director (i/c) of Alumni Relations, JNTU-GV, Vizianagaram.</p>
        <p>❖ Executive Council Member, JNTU-GV since from November 2022.</p>
        <p>❖ Served as Director (i/c) of Industry Institute Interaction Placements & Training & Director(i/c) of Faculty Development Cell and Executive Council member of JNTU-GV.</p>
        <p>❖ Served as Head, Department of Information Technology, University College of Engineering from 2014 to August 2022.</p>
        <p>❖ Special Officer of New Engineering College, JNTU-GV, Kurupam from May 2020 to October 2022.</p>
        <p>❖ IQAC Coordinator, JNTU-GV College of Engineering (CEV) (A) from January 2020 to September 2022.</p>
        <p>❖ Convener for Women Empowerment & Grievance Cell, JNTUK from September 2017 to till date.</p>

        <p className="dir-sub-heading">Awards</p>
        <p>❖ Awarded CMI Level 5 in Management and Leadership – 2021.</p>
        <p>❖ Awarded Outstanding Woman in Engineering – VIWA – 2017.</p>
        <p>❖ Awarded Woman Researcher in Science and Technology – 2020.</p>

        <p className="dir-sub-heading">Academic & Research Contributions</p>
        <p>❖ Specialization in Artificial Intelligence, Data Mining, Machine Learning, Deep Learning, Soft Computing, and Internet of Things.</p>
        <p>❖ Authored a book titled “Artificial Intelligence & Machine Learning” – 2022.</p>
        <p>❖ Awarded Six PhDs and Eight Scholars are currently pursuing PhD.</p>
        <p>❖ Published 3 Patents.</p>
        <p>❖ Published 54 International Journals, 20 International Conferences, and 2 National Conferences.</p>
        <p>❖ Published 5 Book Chapters.</p>
        <p>❖ Organized 32 Workshops, Attended 58 Workshops, Chaired 5 International Conference Sessions, and delivered 32 Technical Talks.</p>
      </div>
    </div>
  );
}

export default AlumniRelations;
