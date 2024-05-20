import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Apartment as ApartmentIcon,
  Groups as GroupsIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  Drafts as DraftsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import "./Dropdown.css";

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
      label: "HOME",
      path: "/",
    },
    {
      icon: <ApartmentIcon />,
      label: "ABOUT US",
      path: "/about-us",
      subItems: [
        { label: "About JNTU-GV", path: "/about-us/about-jntugv" },
        { label: "Vision", path: "/about-us/vision" },
        { label: "Mission", path: "/about-us/mission" },
      ],
    },
    {
      icon: <GroupsIcon />,
      label: "ADMINISTRATION",
      path: "/administration",
      subItems: [
        { label: "Chancellor", path: "/administration/chancellor" },
        { label: "Vice Chancellor", path: "/administration/vice-chancellor" },
        { label: "Registrar", path: "/administration/registrar" },
        // Add more sub-items as needed
      ],
    },
    {
      icon: <SchoolIcon />,
      label: "ACADEMICS",
      path: "/academics",
      subItems: [
        { label: "Programs offered", path: "/academics/programs-offered" },
        { label: "Admissions", path: "/academics/admissions" },
        {
          label: "Constituent Colleges",
          path: "/academics/constituent-colleges",
        },
        { label: "Affiliated Colleges", path: "/academics/affliated-colleges" },
        { label: "BOS Chairman", path: "/academics/bos-chairman" },
        { label: "Academic Calendar", path: "/academics/Calendar" },
        { label: "Academic Syllabus", path: "/academics/academic-syllabus" },
        // Add more sub-items as needed
      ],
    },
    {
      icon: <PersonIcon />,
      label: "DIRECTORATES",
      path: "/directorates",
      subItems: [
        { label: "Academic Planning", path: "/directorates/academic-planning" },
        { label: "Academic Audit", path: "/directorates/academic-audit" },
        { label: "Evaluation", path: "/directorates/evaluation" },
        { label: "Admissions", path: "/directorates/admissions" },
        { label: "IIIT & Placements", path: "/directorates/placements" },
        { label: "Research & Development", path: "/directorates/research" },
        { label: "Alumni Relations", path: "/directorates/alumni-relations" },
        {
          label: "Internal Quality Assurance Cell",
          path: "/directorates/iqac",
        },
        // Add more sub-items as needed
      ],
    },
    {
      icon: <DescriptionIcon />,
      label: "EXAMINATIONS",
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
          path: "https://ums.campx.in/jntugv/jntugv/results",
        }, // External link
        // Add more sub-items as needed
      ],
    },
    {
      icon: <DraftsIcon />,
      label: "CONTACT US",
      path: "/contact-us",
    },
    // Add more dropdown items as needed
  ];

  const DropdownItem = ({ path, label }) => (
    <button onClick={() => handleNavigation(path)}>
      <Link className="link-btn" to={path}>
        {label}
      </Link>
    </button>
  );

  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={handleMenuToggle}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        {dropdownItems.map((item, index) => (
          <div key={index} className="dropdown">
            <div className="dropbtn">
              {item.subItems ? (
                <div className="drop-icon">
                  {item.icon} {item.label}
                </div>
              ) : (
                <div className="drop-icon" onClick={handleMenuToggle}>
                  <Link to={item.path}>
                    {item.icon} {item.label}
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
    </nav>
  );
};

export default NavBar;
