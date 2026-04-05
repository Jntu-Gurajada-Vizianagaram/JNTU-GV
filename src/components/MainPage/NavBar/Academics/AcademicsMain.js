import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './Academics.css';

const AcademicsMain = () => {
  const location = useLocation();

  const menuSections = [
    {
      title: "Category: General",
      links: [
        { to: "programs-offered", label: "Programs Offered" },
        { to: "admissions", label: "Admissions" },
        { to: "Calendar", label: "Academic Calendar" },
        { to: "academic-syllabus", label: "Academic Syllabus" },
        { to: "academic-regulations", label: "Academic Regulations" },
        { to: "bos-chairman", label: "BOS Chairpersons" },
      ]
    },
    {
      title: "Category: Engineering",
      links: [
        { to: "constituent-colleges", label: "Constituent Colleges", state: { category: "engineering" } },
        { to: "affliated-colleges", label: "Affiliated Colleges", state: { category: "engineering" } },
        { to: "autonomous-colleges", label: "Autonomous Colleges", state: { category: "engineering" } },
      ]
    },
    {
      title: "Category: Pharmacy",
      links: [
        { to: "constituent-colleges", label: "Constituent Colleges", state: { category: "pharmacy" } },
        { to: "affliated-colleges", label: "Affiliated Colleges", state: { category: "pharmacy" } },
        { to: "autonomous-colleges", label: "Autonomous Colleges", state: { category: "pharmacy" } },
      ]
    },
    {
      title: "Category: Management",
      links: [
        { to: "affliated-colleges", label: "Affiliated Colleges", state: { category: "management" } },
      ]
    }
  ];

  return (
    <div className="Academicmain-Main">
      <div className="allLeftMenuAOP">
        {menuSections.map((section, idx) => (
          <div key={idx} className="menu-category-section">
            <div className="menu-category-header">{section.title}</div>
            <div className="menu-category-links">
              {section.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  state={link.state}
                  className={`menubutton ${location.pathname.includes(link.to) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicsMain;
