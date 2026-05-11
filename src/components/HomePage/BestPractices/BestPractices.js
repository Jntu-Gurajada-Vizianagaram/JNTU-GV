import React, { useState } from "react";
import "./BestPractices.css";

const BestPractices = () => {
  const [activeTab, setActiveTab] = useState("practices");

  const practices = [
    {
      id: 1,
      title: "Smart Hostel Management",
      description: "Implementation of advanced digital systems for efficient hostel operations, including automated check-in/check-out, maintenance tracking, and resident services."
    },
    {
      id: 2,
      title: "Career Opportunities Cell for Every Student of Judiciary Districts of University",
      description: "Dedicated career guidance and placement services accessible to all students across university judiciary districts, ensuring equal opportunities for career development."
    },
    {
      id: 3,
      title: "Walk with Nature Initiatives",
      description: "Environmental conservation programs and green initiatives promoting sustainable campus development and ecological awareness among students and faculty."
    },
    {
      id: 4,
      title: "Digitalization of Universities Examinations",
      description: "Complete transition to online examination systems, digital assessment tools, and automated result processing for enhanced efficiency and transparency."
    },
    {
      id: 5,
      title: "Cancellation of Tatkal Certification Process and 24hr based Certificate Issuance in University",
      description: "Streamlined certificate issuance system eliminating urgent processing fees and ensuring all certificates are issued within 24 hours of request."
    },
    {
      id: 6,
      title: "Collaboration with International Universities for Academic Excellence like UNT, JNTU-GV signed an MoU with The Reutlingen University Knowledge Foundation (KFRU), Germany",
      description: "Strategic partnerships with global institutions including the recent MoU with Reutlingen University Knowledge Foundation (KFRU), Germany, to enhance academic standards and international exposure."
    }
  ];

  return (
    <div className="best-practices-container">
      <h2 className="best-practices-heading">University Best Practices</h2>

      <div className="best-practices-tabs-container">
        <button
          className={`best-practices-tab-button ${activeTab === "practices" ? "active" : ""}`}
          onClick={() => setActiveTab("practices")}
        >
          Best Practices
        </button>
      </div>

      {activeTab === "practices" && (
        <div className="best-practices-content">
          <div className="best-practices-grid">
            {practices.map((practice) => (
              <div key={practice.id} className="best-practice-card">
                <div className="best-practice-number">{practice.id}</div>
                <div className="best-practice-details">
                  <h3 className="best-practice-title">{practice.title}</h3>
                  <p className="best-practice-description">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BestPractices;