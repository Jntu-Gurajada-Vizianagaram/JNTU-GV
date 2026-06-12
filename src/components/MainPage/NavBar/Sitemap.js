import React from "react";
import { Link } from "react-router-dom";

const dropdownItems = [
  {
    label: "Home",
    path: "https://jntugv.edu.in",
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
      { label: "JNTU-GV College of e", path: "/constituent-colleges/engineering" },
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
  {
    label: "MANDATORY DISCLOSURES",
    subItems: [
      { label: "UGC Mandatory Disclosures", path: "/mandatory-disclosures" },
    ],
  },
  {
    label: "RECRUITMENT",
    path: "/recruitment",
    subItems: [
      { label: "Latest Notifications", path: "/recruitment" },
    ],
  },
];

const Sitemap = () => {
  return (
    <main className="sitemap-container">
      <style>
        {`
          .sitemap-container {
            padding: 40px 24px;
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
          }
          .sitemap-title {
            font-size: clamp(2rem, 4vw, 2.6rem);
            margin-bottom: 1rem;
            color: #4a148c;
          }
          .sitemap-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 24px;
          }
          .sitemap-section {
            padding: 1rem;
            background: #fff;
            border: 1px solid rgba(59, 13, 102, 0.08);
            border-radius: 14px;
            box-shadow: 0 10px 24px rgba(59, 13, 102, 0.05);
          }
          .sitemap-section-title {
            margin: 0 0 0.75rem;
            font-size: 1rem;
            font-weight: 700;
            color: #2e0669;
          }
          .sitemap-links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 0.5rem;
          }
          .sitemap-links a {
            text-decoration: none;
            color: #333;
            font-size: 0.95rem;
            transition: color 0.25s ease;
            display: inline-block;
            width: 100%;
          }
          .sitemap-links a:hover {
            color: #4a148c;
          }
          .sitemap-links li {
            margin: 0;
          }
          .sitemap-empty {
            min-height: 1rem;
          }
          @media (max-width: 767px) {
            .sitemap-container {
              padding: 24px 16px;
            }
          }
        `}
      </style>
      <h1 className="sitemap-title">Sitemap</h1>
      <div className="sitemap-grid">
        {dropdownItems.map((section) => (
          <section key={section.label} className="sitemap-section">
            <h2 className="sitemap-section-title">{section.label}</h2>
            {section.subItems?.length ? (
              <ul className="sitemap-links">
                {section.subItems.map((item) => (
                  <li key={item.label}>
                    {item.path ? (
                      item.path.startsWith("http") ? (
                        <a href={item.path} target="_blank" rel="noopener noreferrer">
                          {item.label}
                        </a>
                      ) : (
                        <Link to={item.path}>{item.label}</Link>
                      )
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : section.path ? (
              <p>
                <Link to={section.path}>{section.path}</Link>
              </p>
            ) : (
              <div className="sitemap-empty" />
            )}
          </section>
        ))}
      </div>
    </main>
  );
};

export default Sitemap;
