import {
  Apartment as ApartmentIcon,
  Description as DescriptionIcon,
  Drafts as DraftsIcon,
  Groups as GroupsIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Verified  as CertificateIcon
} from "@mui/icons-material";
import LinkIcon from '@mui/icons-material/Link';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css";
import Search from "./Search/Search";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);

  const handleMenuToggle = () => {
    setMenuState(!menuState);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuState(false);
  };

  const dropdownItems = [
    {
      icon: <HomeIcon />,
      label: " HOME",
      path: "/",
    },
    {
      icon: <ApartmentIcon />,
      label: " ABOUT US",
      path: "/about-us",
      subItems: [
        { label: "About JNTU-GV", path: "/about-us/about-jntugv" },
        { label: "Vision", path: "/about-us/vision" },
        { label: "Mission", path: "/about-us/mission" },
      ],
    },
    {
      icon: <GroupsIcon />,
      label: " ADMINISTRATION",
      path: "/administration",
      subItems: [
        { label: "Chancellor", path: "/administration/chancellor" },
        { label: "Vice Chancellor", path: "/administration/vice-chancellor" },
        { label: "Registrar", path: "/administration/registrar" },
        { label: "Officer on Special Duty (OSD)", path: "/administration/osd" },
        // Add more sub-items as needed
      ],
    },
    {
      icon: <SchoolIcon />,
      label: " ACADEMICS",
      path: "/academics",
      subItems: [
        { label: "Programs offered", path: "/academics/programs-offered" },
        { label: "Admissions", path: "/academics/admissions" },
        {
          label: "Constituent Colleges",
          path: "/academics/constituent-colleges",
        },
        { label: "Affiliated Colleges", path: "/academics/affliated-colleges" },
        {
          label: "Autonomous Colleges",
          path: "/academics/autonomous-colleges",
        },
        { label: "BOS Chairman", path: "/academics/bos-chairman" },
        { label: "Academic Calendar", path: "/academics/Calendar" },
        { label: "Academic Syllabus", path: "/academics/academic-syllabus" },
        {
          label: "Academic Regulations",
          path: "/academics/academic-regulations",
        },
        // Add more sub-items as needed
      ],
    },
    {
      icon: <PersonIcon />,
      label: " DIRECTORATES",
      path: "/directorates",
      subItems: [
        {
          label: "Academic Audit and Planning",
          path: "/directorates/academic-planning",
        },
        // { label: "Academic Audit", path: "/directorates/academic-audit" },
        { label: "Evaluation & Admissions", path: "/directorates/evaluation" },
        // { label: "Admissions", path: "/directorates/admissions" },

        { label: "Research & Development", path: "/directorates/research" },
        {
          label: "Industrial Relations & Placements",
          path: "/directorates/placements",
        },
        {
          label: "Internal Quality Assurance Cell",
          path: "/directorates/iqac",
        },
        { label: "Alumni Relations", path: "/directorates/alumni-relations" },

        // Add more sub-items as needed
      ],
    },
    {
      icon: <DescriptionIcon />,
      label: " EXAMINATIONS",
      path: "/examination",
      subItems: [
        {
          label: "Director of Evaluation",
          path: "/examination/director-evaluation",
        },
        {
          label: "Controller of Examinations",
          path: "/examination/controller",
        },
        {
          label: "Additional Controller of Examinations-SDC",
          path: "/examination/controller-sdc",
        },
        {
          label: "Additional Controller of Examinations-1",
          path: "/examination/controller1",
        },
        {
          label: "Additional Controller of Examinations-2",
          path: "/examination/controller2",
        },
        {
          label: "Additional Controller of Examinations-3",
          path: "/examination/controller3",
        },
        {
          label: "Additional Controller of Examinations-PG",
          path: "/examination/controller-pg",
        },
        {
          label: "Examination Results",
          path: "https://exams.jntugv.edu.in/results",
        }, // External link
        // Add more sub-items as needed
      ],
    },

    {
      icon: <CertificateIcon />,
      label: " PG Certification Courses",
      path: "/contact-us",
      subItems: [
        {
          label: "PGCPAITL",
          path: "https://pgcpaitl.jntugv.edu.in",
        },
      ],
    },

    {
      icon: <DraftsIcon />,
      label: " CONTACT US",
      path: "/contact-us",
    },

    {
      icon: <LinkIcon />,
      className: "quick-links-hidden",
      label: " QUICK LINKS",
      path: "/quicklinks",
      subItems: [
        {
          label: "Anti-Ragging",
          path: "/anti-ragging/about",
        },
        {
          label: "Ideaclub",
          path: "https://ideaclub.jntugv.edu.in",
        },
        {
          label: "GreenCampus",
          path: "https://greencampus.jntugv.edu.in",
        },
        {
          label: "MoUs",
          path: "https://mou.jntugv.edu.in",
        },
        {
          label: "Events",
          path: "https://events.jntugv.edu.in",
        },
        {
          label: "Yogandhra",
          path: "https://yogandhra.jntugv.edu.in",
        },
        // External link
        // Add more sub-items as needed
      ],
    },

    // Add more dropdown items as needed
  ];

  const DropdownItem = ({ path, label }) => {
    const isExternal = path.startsWith("http");

    return isExternal ? (
     <button > <a className="link-btn" href={path} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      </button>
    ) : (
      <button onClick={() => handleNavigation(path)}>
        <Link className="link-btn" to={path}>
          {label}
        </Link>
      </button>
    );
  };


  return (
    <nav className="topnav">
      <div className="menu-search">
        <div className="menu-icon" onClick={handleMenuToggle}>
          <MenuIcon />MENU
        </div>
        <div className="menu-icon" id="seach-icon">
          <Search />
        </div>
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        {dropdownItems.map((item, index) => (
          <div key={index} className={`dropdown ${item.className || ""}`}>
            <div className="dropbtn">
              {item.subItems ? (
                <div className="drop-icon d-flex align-items-center">
                  {item.icon }<span className="ms-2"></span> { item.label}
                </div>
              ) : (
                <div className="drop-icon" onClick={handleMenuToggle}>
                  <Link className="px-0 d-flex align-items-center" to={item.path}>
                    {item.icon}<span className="ms-2" ></span>{item.label}
                  </Link>
                </div>
              )}
            </div>
            {item.subItems ? (
              <div className="dropdown-content">
                {item.subItems.map((subItem, subIndex) => (
                  <DropdownItem
                    key={subIndex}
                    path={subItem.path}
                    label={subItem.label}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="bigSearch">
      <Search />
      </div>
    </nav>
  );
};

export default NavBar;
