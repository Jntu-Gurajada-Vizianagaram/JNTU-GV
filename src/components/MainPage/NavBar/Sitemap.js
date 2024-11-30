import React from "react";
import { Link } from "react-router-dom";

const dropdownItems = [
  {
    label: "Home",
    path: "https//jntugv.edu.in",
  },
  {
    label: "ABOUT US",
    subItems: [
      { label: "About JNTU-GV", path: "/about-us/about-jntugv" },
      { label: "Vision", path: "/about-us/vision" },
      { label: "Mission", path: "/about-us/mission" },
    ],
  },
  {
    label: "ADMINISTRATION",
    subItems: [
      { label: "Vice Chancellor", path: "/administration/vice-chancellor" },
      { label: "Registrar", path: "/administration/registrar" },
      { label: "Finance Officer", path: "/administration/finance-officer" },
    ],
  },
  {
    label: "ACADEMICS",
    subItems: [
      { label: "Programs Offered", path: "/academics/programs-offered" },
      { label: "Admissions", path: "/academics/admissions" },
      { label: "Constituent Colleges", path: "/academics/constituent-colleges" },
      { label: "Affiliated Colleges", path: "/academics/affiliated-colleges" },
      { label: "BOS Chairman", path: "/academics/bos-chairman" },
      { label: "Academic Calendar", path: "/academics/calendar" },
      { label: "Academic Syllabus", path: "/academics/academic-syllabus" },
      { label: "Academic Regulations", path: "/academics/academic-regulations" },
    ],
  },
  {
    label: "DIRECTORATES",
    subItems: [
      { label: "Directorate of Admissions", path: "/directorates/admissions" },
      { label: "Directorate of Research and Development", path: "/directorates/research-development" },
      { label: "Directorate of Industry-Institute Interaction", path: "/directorates/industry-institute" },
    ],
  },
  {
    label: "EXAMINATIONS",
    subItems: [
      { label: "Director of Evaluation", path: "/examination/director-evaluation" },
      { label: "Controller of Examinations", path: "/examination/controller" },
      { label: "Additional Controller of Examinations-SDC", path: "/examination/controller-sdc" },
      { label: "Examination Results", path: "https://jntugv.campx.in/jntugv/ums/results" },
    ],
  },
  {
    label: "CENTRAL FACILITIES",
    subItems: [
      { label: "Library", path: null },
      { label: "Sports", path: null },
      { label: "Health Centre", path: null},
    ],
  },
  {
    label: "CONSTITUENT COLLEGES",
    subItems: [
      { label: "JNTUGV College of e", path: "/constituent-colleges/engineering" },
      { label: "Pharmacy College", path: "/constituent-colleges/pharmacy" },
    ],
  },
  {
    label: "UNIVERSITY HOSTELS",
    subItems: [
      { label: "Men's Hostel", path: "/hostels/mens" },
      { label: "Women's Hostel", path: "/hostels/womens" },
    ],
  },
  {
    label: "JNTU-GV UNITS",
    subItems: [
      { label: "NSS Unit", path: "/units/nss" },
      { label: "Entrepreneurship Cell", path: "/units/entrepreneurship-cell" },
    ],
  },
  {
    label: "GRIEVANCE",
    subItems: [
      { label: "Student Grievance Portal", path: "/grievance/student" },
      { label: "Faculty Grievance Portal", path: "/grievance/faculty" },
    ],
  },
  {
    label: "STUDENT CORNER",
    subItems: [
      { label: "Placement Cell", path: "/student-corner/placement" },
      { label: "Clubs and Societies", path: "/student-corner/clubs-societies" },
    ],
  },
];

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <style>
        {`
          .sitemap-container {
            padding: 40px;
            font-family: Arial, sans-serif;
          }
          .sitemap-section {
            margin-bottom: 30px;
          }
          .sitemap-title {
            font-size: 1.8rem;
            font-weight: bold;
            color: #4a148c;
            margin-bottom: 10px;
          }
          .sitemap-links {
            list-style-type: none;
            padding: 0;
          }
          .sitemap-links li {
            margin-bottom: 8px;
          }
          .sitemap-links a {
            text-decoration: none;
            color: #333;
            font-size: 1rem;
            transition: color 0.3s ease;
          }
          .sitemap-links a:hover {
            color: #4a148c;
          }
        `}
      </style>
      <h1>Sitemap</h1>
      {dropdownItems.map((section, index) => (
        <div key={index} className="sitemap-section">
          {/* Render section title */}
          <li className="">{section.label}</li> 

          {/* Conditionally render sub-items if they exist */}
          {section.subItems ? (
            <ul className="sitemap-links">
              {section.subItems.map((item, subIndex) => (
                <li key={subIndex}>
                  {/* Conditional rendering for internal and external links */}
                  {item.path.startsWith("http") ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p></p> // Placeholder text for empty sections
          )}
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
