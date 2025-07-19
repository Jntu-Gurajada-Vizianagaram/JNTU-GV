import iqac from "../../../../assets/AdminDirectoratesImages/iqac.jpg";
import "../Administration/AdminandDirectorates.css";

function IQAC() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Internal Quality Assurance Cell
        </div>
        <br />
        <div className="allRightContentProfile">
          <div className="ADimg">
            <center>
              <img src={iqac} alt="Dr. Shaik Kalesha Vali" />
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">Dr. Shaik Kalesha Vali</h3>
            <h3 className="ADh3">
              Director <sup>i/c</sup>, Internal Quality Assurance Cell (IQAC)
            </h3>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
              Professor of Mathematics, JNTU-GV, Vizianagaram
            </h4>
          </div>
        </center>
        <hr />
        <p>Email: iqac@jntugv.edu.in</p>
        <hr />

        <p>
          Dr. Shaik Kalesha Vali is a senior academician with over 25 years of
          experience in teaching, research, and administration. He holds a Ph.D.
          in Mathematics from <strong>Andhra University</strong>, and M.Sc. and M.Phil degrees
          in Mathematics from the same institution. He currently serves as the
          <strong> Director I/c of Internal Quality Assurance Cell (IQAC)</strong> and
          <strong> Professor in the Department of Mathematics</strong> at JNTU-GV, Vizianagaram.
        </p>

        <p>
          He has previously served at reputed institutions such as GITAM University,
          PVP Siddhartha Institute of Technology, and Nimra College. He has published
          over 35 research papers and is supervising multiple Ph.D. candidates.
        </p>

        <p>
          Dr. Vali is actively involved in curriculum development, quality enhancement,
          and educational reforms. He serves as <strong>Chairman of the Board of Studies (BoS)</strong>
          for the Department of Basic Sciences and Humanities and has held key roles like
          <strong> Officer In-Charge of Library</strong> and member of various academic bodies.
        </p>

        <p className="ADsub">📌 Recent Appointment:</p>
        <div className="ADannouncementBox">
          <p>
            We are pleased to announce that <strong>Dr. Shaik Kalesha Vali</strong> has been appointed as the <strong>Officer on Special Duty (OSD)</strong> In-Charge to the Hon’ble Vice Chancellor (i/c) of JNTU-GV, Vizianagaram.
          </p>
          <p>🗓️ <strong>Order Date:</strong> July 08, 2025</p>
          <p>🏛️ <strong>Issued by:</strong> Registrar, JNTU-GV</p>
          <p>📍 <strong>Effective Immediately</strong></p>
          <p><strong>Key Responsibilities:</strong></p>
          <ul>
            <li>Support the Vice-Chancellor (i/c) in administrative affairs</li>
            <li>Assist in academic activities and legal matters</li>
            <li>Undertake tasks as assigned by the Vice-Chancellor</li>
          </ul>
        </div>

        <p className="ADsub">Highlights:</p>
        <p>❖ Ph.D. in Mathematics from Andhra University (2009)</p>
        <p>❖ Over 23 years of teaching and academic leadership experience</p>
        <p>❖ Chairman, BoS – BS&HSS, UCEV-JNTU-GV (Since 2019)</p>
        <p>❖ Officer In-Charge, Library – UCEV (Since 2020)</p>
        <p>❖ Member, RRC – JNTUK & Academic Committee – UCEV</p>
        <p>❖ Active in quality assurance activities and IQAC coordination</p>
      </div>
    </div>

);
    }
  
export default IQAC ;
