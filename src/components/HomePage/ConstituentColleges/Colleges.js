import React from "react";
import "./Colleges.css";
import JNTU_PIC from "../../../assets/JNTU_PIC.png"
import KURUPAM from "../../../assets/Kurupam.jpg"
import PHARMACY from "../../../assets/Pharmacy.jpeg"


const colleges = [
  {
    id: 1,
    name: `JNTU-GV College 
    of Engineering, Vizianagaram`,
    description:"DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535003.",
     image: JNTU_PIC,
      link: "https://jntugvcev.edu.in/",
  },
  {
    id: 2,
    name: "JNTU-GV Tribal College of Engineering, Kurupam",
    description:"TEKHARAKHANDI VILLAGE, VIZIANAGARAM, ANDHRA PRADESH 535524",

    image: KURUPAM,
      link: "https://teck.jntugv.edu.in/",
  },
  {
    id: 3,
    name: "JNTU-GV College of Pharmaceutical Sciences, Vizianagaram",
    description:"DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535003.",
    image:PHARMACY,
    link: "https://jntugvcpsv.jntugv.edu.in/",
  },
];

const Colleges = () => {
  return (
    <div className="constituent-section">
      <h2 className="constituent-heading">Constituent Colleges</h2>
      <div className="constituent-grid">
        {colleges.map((college) => (
          <div className="college-card" key={college.id}>
            <div className="college-image">
              <img src={college.image} alt={college.name} loading="lazy" />
            </div>
            <div className="college-content">
              <h3>{college.name}</h3>

              <p>{college.description}</p>
              
              <a href={college.link} target="_blank" rel="noopener noreferrer">
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
