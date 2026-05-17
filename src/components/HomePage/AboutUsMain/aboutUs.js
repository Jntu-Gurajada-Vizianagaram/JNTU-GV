import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import "./aboutUs.css";

import chancellor from "../../../assets/AdminDirectoratesImages/chancellor.jpeg";
import registrar from "../../../assets/AdminDirectoratesImages/registrar_new.jpeg";
import vc from "../../../assets/AdminDirectoratesImages/vc.png";

const AboutUs = () => {
  const administrationData = [
    {
      id: 1,
      name: "Shri Justice(Retd.) S. Abdul Nazeer",
      designation: "Governor of Andhra Pradesh",
      role: "Hon'ble Chancellor",
      image: chancellor,
      link: "administration/chancellor"
    },
    {
      id: 2,
      name: "Prof. V. V. Subba Rao",
      designation: "Ph.D., Mechanical Engineering (IIT Kharagpur)",
      role: "Hon’ble Vice-Chancellor",
      image: vc,
      link: "administration/vice-chancellor"
    },
    {
      id: 3,
      name: "Prof. D. Rajya Lakshmi",
      designation: "M.Tech, Ph.D",
      role: "Registrar i/c",
      image: registrar,
      link: "administration/registrar"
    }
  ];

  return (
    <section className="executive-board-section">
      <div className="board-container">
        
        {/* Full Width Top Editorial Panel */}
        <div className="board-editorial-panel-top">
          <div className="editorial-icon-badge">
            <AccountBalanceIcon />
          </div>
          <span className="editorial-tag">Governance</span>
          <h2 className="editorial-title">University Leadership</h2>
          <p className="editorial-lead">
            Guided by distinguished administrators, academic visionaries, and leaders driving excellence in technological education.
          </p>
          <div className="editorial-decorative-line"></div>
        </div>

        {/* Unified 3-Column Profile Track Layout */}
        <div className="board-showcase-row-grid">
          {administrationData.map((person) => (
            <Link
              to={person.link}
              className="board-member-anchor"
              key={person.id}
            >
              <div className="board-member-showcase">
                
                {/* Image Wrapper Frame with Ambient Background Block */}
                <div className="member-image-frame">
                  <div className="member-bg-block"></div>
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                </div>

                {/* Typography and Meta Info Blocks */}
                <div className="member-profile-details">
                  <span className="member-role-label">{person.role}</span>
                  <h3 className="member-fullname">{person.name}</h3>
                  {person.designation && (
                    <p className="member-credentials">{person.designation}</p>
                  )}
                  
                  {/* Modern Underline Action Trigger */}
                  <div className="member-action-trigger">
                    <span>View Profile</span>
                    <ArrowForwardIcon className="arrow-transition-svg" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;