import { MdOutlineMailOutline } from "react-icons/md";
// import "../AdminandDirectorates.css";
import "../Administration.css";
import iqac from "./images/diqac.jpg";
import tick from "./images/tick.svg";

function OSD() {
  return (
    <div className="admin-profile-container">
      <center>
        <div className="admin-profile-image">
          <img src={iqac} alt="Profile" />
        </div>
        <div className="admin-profile-name">
          <h3>Dr. Shaik Kalesha Vali</h3>
          <h3>Officer on Special Duty to Hon’ble Vice-Chancellor</h3>
          <p className="admin-profile-email">
            <MdOutlineMailOutline size="20px" /> osd@jntugv.edu.in
          </p>
        </div>
      </center>

      <hr />
      <div className="admin-profile-details">

        <p>
          Dr. S Kalesha Vali is currently working as Professor of Mathematics in Department of BS&HSS at JNTU-GV College of Engineering (A) , Director <sup>i/c</sup> of IQAC and Officer on Special Duty to Hon’ble Vice-Chancellor, JNTU-GV. He received his M.Sc., M.Phil., and Ph.D. degrees in Mathematics from Andhra University, Visakhapatnam. With 28 years of teaching and research experience, he has served in several reputed Engineering Colleges and Universities, received two medals and two awards, published over 50 research papers and two patents, guided 5 Ph.Ds, 2 M.Phils, and is currently guiding 12 Ph.D. scholars. He has completed a funded research project and authored two textbooks.
        </p>

        <p className="admin-sub-heading">Teaching Experience:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Working as Professor of Mathematics at Department of BS&HSS at JNTU-GV  College of Engineering (A) since June 2025.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Worked as Professor at JNTUK UCEV, JNTUK Kakinada, and Andhra University for 13 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Associate Professor at GITAM University for 5 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Assistant Professor at GITAM University and PVP Sidhartha Institute for 8 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Lecturer at Nimra College for 2 years.</p>

        <p className="admin-sub-heading">Administrative Contributions:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Officer on Special Duty (i/c) to the Hon’ble Vice-Chancellor, JNTU-GV since July 2025.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Director (i/c), IQAC, JNTU-GV since July 2025.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Head, Dept. of BS&HSS, JNTUK UCEV for 6 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Officer In-Charge, Library, JNTUK UCEV for 1 year.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Convener, FFC visits to affiliated colleges since 2013.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, Academic and Departmental Committees, JNTUK UCEV for 10 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Chief Coordinator, Spot Valuations, Andhra University for 3 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Nodal Officer, Examinations, Andhra University for 1 year.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Controller of Examinations, GITAM University for 3 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Addl. Controller of Examinations, GITAM University for 1 year.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Coordinator, GAT admissions counselling for 2 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Coordinator, Convocations (first 3), GITAM University.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Head, BS&HSS Dept., PVP Sidhartha Institute for 4 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Head, Dept. of Mathematics, Nimra College for 2 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, AICTE Expert Visit Committee.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, Committees at GITAM University including Academic Affairs, Discipline, Proctorial, Anti-Ragging, and IMG for 2 years.</p>

        <p className="admin-sub-heading">Academic Contributions:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Authored: ‘Engineering Mathematics-I’ (2018) & ‘Differential Equations and Vector Calculus’ (2025), Cengage Learning.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Reviewer for Intermediate Mathematics textbooks (2022–2024).</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Chairman, Board of Studies, BS&HSS, JNTUK UCEV for 3 years.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, Research Review Committee, JNTU-GV (since 2024) & JNTUK (since 2013).</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, BoS in multiple universities and autonomous colleges in AP.</p>

        <p className="admin-sub-heading">Research Contributions:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Research Areas: Algebra, Lattice Theory, Mathematical Modeling (Epidemic models).</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Guided 5 Ph.Ds, 2 M.Phils; 2 Ph.Ds submitted; 12 Ph.D. scholars ongoing.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Published 2 patents and 52 research papers.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Presented 12 papers in conferences; organized 1 conference & 8 workshops.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Chaired 4 sessions and delivered 6 invited talks.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Visited Hong Kong for international conference in 2016.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Completed UGC-funded research project worth ₹4.12 Lakhs.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Consultancy: Technical team for GVMC at GITAM University.</p>

        <p className="admin-sub-heading">Professional Contributions:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Life member, APSMS and Prof. Minakshi Sundaram Memorial Society.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Served as Vice-President, APSMS for 2 years.</p>

        <p className="admin-sub-heading">Societal Contributions:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Treasurer/Member, MAKAT Trust (20 years).</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Member, Islamic Centre, Visakhapatnam since 2015.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> President, Teachers Association, UCEV for 1 year.</p>

        <p className="admin-sub-heading">Academic Achievements:</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Academic Excellence Award – 2019 by MAKAT.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> SOMASS Award and medals for proficiency in Mathematics.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> Certificate of Merit from Rotary Club, Rajahmundry.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> B.R.M. Memorial Medal winner at school level.</p>
        <p><img src={tick} alt="Icon" className="admin-icon" /> College topper at degree and PG level.</p>
      </div>
    </div>
  );
}

export default OSD;
