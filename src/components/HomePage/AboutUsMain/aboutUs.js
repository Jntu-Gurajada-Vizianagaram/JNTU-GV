import "./aboutUs.css";
import { Link } from "react-router-dom";

import chancellor from "../../../assets/AdminDirectoratesImages/chancellor.jpeg";
import registrar from "../../../assets/AdminDirectoratesImages/registrar.jpeg";
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
      name: "Prof. V V Subba Rao",
      designation: "Ph.D., Computer Science & Engineering",
      role: "Hon'ble Vice Chancellor",
      image: vc,
      link: "administration/vice-chancellor"
    },
    {
      id: 3,
      name: "Prof. G. Jaya Suma",
      designation: "M.Tech (CS&T), Ph.D(CSE)",
      role: "Registrar",
      image: registrar,
      link: "administration/registrar"
    }
  ];

  return (
    <div className="aboutUs">
      <h2 className="about-heading">Administration</h2>
      <div className="administration-grid">
        {administrationData.map((person) => (
          <Link 
            to={person.link} 
            className="more-link" 
            key={person.id}
          >
            <div className="aboutUs-card">
              <div className="aboutUs-image-container">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="aboutUs-image" 
                  loading="lazy"
                />
              </div>
              <div className="aboutUs-content">
                <p className="aboutUs-name">{person.name}</p>
                {person.designation?(
                  <p className="aboutUs-designation">{person.designation}</p>
                ): <br></br>}
                <p className="aboutUs-designation highlight">{person.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;