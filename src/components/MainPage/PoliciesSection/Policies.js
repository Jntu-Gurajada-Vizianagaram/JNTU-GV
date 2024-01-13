import React from "react";
import { FaBook } from "react-icons/fa";
import "./Policies.css";
const Policies = () => {
  const Data = [
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "iqac",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "jntugv Research Promotion Policy",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "jntugv Consultancy  Policy",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "jntugv E-Governance Policy",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "jntugv IP POLICY 2021",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "jntugv IT POLICY",
    },
    {
      link: "https://www.npmjs.com/package/react-router-dom",
      text: "Incubation & Start-up Policy of jntugv University, 2022",
    },
    { link: "https://www.npmjs.com/package/react-router-dom", text: "RTI" },
  ];
  return (
    <div className="Policies">
      <div className="Policies-Heading">
        <h4>jntugv Policies</h4>
      </div>
      <ul>
        {Data.map((val, index) => (
          <li key={index}>
            <a href={val.link} rel="noopener noreferrer" target="_blank">
              <FaBook className="fa" size={15} style={{ color: "#2a5dc8" }} />
              {val.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policies;
