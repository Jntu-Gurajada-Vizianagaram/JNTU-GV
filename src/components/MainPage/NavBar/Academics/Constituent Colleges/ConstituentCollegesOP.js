import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./ConstituentCollegesOP.css";
import { constituentColleges } from "./ConstituentCollegesData";
import { MdLocationOn, MdLanguage } from "react-icons/md";

const ConstituentCollegesOP = () => {
  const location = useLocation();
  const selectedCategory = location.state?.category;

  return (
    <div className="allRightContentAOP">
      <div className="clgheaddiv">Constituent Colleges</div>
      <p className="clgsubtitle">
        {selectedCategory 
          ? `Showcasing JNTU-GV's flagship institutions (Highlighted: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)})` 
          : "Main Campus & Specialized Institutions of JNTU-Gurajada Vizianagaram"}
      </p>
      
      <div className="constituent-grid">
        {constituentColleges.map((college) => {
          const isHighlighted = selectedCategory && (
            (selectedCategory === "pharmacy" && (college.name.toLowerCase().includes("pharmacy") || college.name.toLowerCase().includes("pharmaceutical"))) ||
            (selectedCategory === "engineering" && college.name.toLowerCase().includes("engineering"))
          );
          
          return (
            <div key={college.id} className={`constituent-card ${isHighlighted ? "highlighted-category" : "dimmed-category"}`}>
              <div className="card-header">
                <span className="college-code">{college.code} {isHighlighted && "★"}</span>
                <span className="college-type">{college.type}</span>
              </div>
              <div className="card-body">
                <h3>{college.name}</h3>
                <p className="college-desc">{college.description}</p>
                <div className="college-meta">
                  <span>
                    <MdLocationOn className="meta-icon" /> {college.location}
                  </span>
                  <a 
                    href={college.website} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="college-link"
                  >
                    <MdLanguage className="meta-icon" /> Visit Website
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <a 
                  href={college.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="visit-button"
                >
                  Go to Portal
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstituentCollegesOP;
