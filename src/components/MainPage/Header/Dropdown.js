import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
// // import { RiBankFill } from "react-icons/ri";
// import { MdOutlineComputer } from "react-icons/md";



import { useState } from "react";
// import { PiExamFill } from "react-icons/pi";

const Dropdown = () => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };

  const contactHandler = () => {
    navigate("/contact-us");
  };

  // const digitalHandler = () => {
  //   window.open("http://digitalhub.jntugv.edu.in:8000", "_blank");
  // }
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div className="dropdown">
          <div className="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <HomeIcon /> HOME
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <ApartmentIcon /> ABOUT US
          </div>
          <div className="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-us/about-jntugv">
                About JNTU-GV
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/vision">
                Vision
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/mission">
                Mission
              </Link>
            </button>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <GroupsIcon /> ADMINISTRATION
          </div>
          <div className="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/chancellor"
                target="_self"
              >
                Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/vice-chancellor"
                target="_self"
              >
                Vice Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/registrar"
                target="_self"
              >
                Registrar
              </Link>
            </button>
            <button>
              {" "}
              {/* <Link
                className="link-btn"
                to="/administration/chairpersons"
                target="_self"
              >
                Chairpersons
              </Link> */}
            </button>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <SchoolIcon /> ACADEMICS
          </div>
          <div
            className="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/academics/programs-offered">
                Programs offered
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/admissions">
                {" "}
                Admissions
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/academics/constituent-colleges">
                Constituent Colleges
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/affliated-colleges">
                {" "}
                Affiliated Colleges
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/bos-chairman">
                {" "}
                BOS Chairman
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/calender">
                {" "}
                Academic Calender
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/academic-syllabus">
                {" "}
                Academic Syllabus
              </Link>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <PersonIcon />
            DIRECTORATES
          </div>
          <div className="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/academic-planning"
                target="_self"
              >
                Academic Planning
              </Link>
            </button>

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/academic-audit"
                target="_self"
              >
                Academic Audit
              </Link>
            </button>

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/evaluation"
                target="_self"
              >
                Evaluation
              </Link>
            </button>

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/admissions"
                target="_self"
              >
                Admissions
              </Link>
            </button>

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/placements"
                target="_self"
              >
                IIIT & Placements
              </Link>
            </button>

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/research"
                target="_self"
              >
                Research & Development
              </Link>
            </button>
            {/* 
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/faculty-development-cell"
                target="_self"
              >
                Faculty Development Cell
              </Link>
            </button> */}

            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/alumni-relations"
                target="_self"
              >
                Alumni Relations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/directorates/iqac" target="_self">
                Internal Quality Assurance Cell
              </Link>
            </button>

            {/* <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/empowerment"
                target="_self"
              >
                Empowerment of Women & Grievances
              </Link>
            </button>    
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/directorates/sports-administration"
                target="_self"
              >
                University Games & Sports Administration
              </Link>
            </button> */}
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <DescriptionIcon /> EXAMINATIONS
          </div>
          <div
            className="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/examination/director-evaluation">
                Director of Evaluation
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller">
                Controller of Examinations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller-sdc">
                Additional Controller of Examinations-SDC
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller1">
                Additional Controller of Examinations-1
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller2">
                Additional Controller of Examinations-2
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller3">
                Additional Controller of Examinations-3
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller-pg">
                Additional Controller of Examinations-PG
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="https://results.jntugv.edu.in"
                target="_blank"
              >
                Examination Results
              </Link>
            </button>
          </div>
        </div>
        {/* 
        <div className="dropdown">
          <div className="dropbtn">
            <div className="drop-icon">
              <PiExamFill className="result-icon" />
              RESULTS
            </div>
          </div>
          <div className="dropdown-content">
            <button>
              {" "}
              <Link className="link-btn" to="/results/r13">
                R13
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r16">
                R16{" "}
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r19">
                R19{" "}
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r20">
                R20{" "}
              </Link>
            </button>
          </div>
        </div> */}

        {/* <div className="dropdown">
          <div className="dropbtn">
          <RiBankFill /> INFRASTRUCTURE
          </div>
          <div className="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-library">
                Library
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-hostels">
                Hostels
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-sports-and-fitness">
                Sports & Fitness
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-dispensary">
                Dispensary
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-banks">
                Bank
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-engineering-cell">
                Engineering Cell
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-canteen">
                Canteen 
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-staff-quarters">
                Staff Quarters 
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-guest-house">
                Guest House 
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-music-club">
                Music Club 
              </Link>
            </button>
            <button >
              {" "}
              <Link className="link-btn" to="/infrastructure/about-student-activity-club">
                Student Activity Club 
              </Link>
            </button>
          </div>
        </div> */}

        {/* <div class=Name"dropdown">
          <div className="dropbtn" onClick={digitalHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <MdOutlineComputer className="digitali-icon" /> DIGITAL HUB
            </div>
          </div>
        </div> */}


        <div className="dropdown">
          <div className="dropbtn" onClick={contactHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <DraftsIcon /> CONTACT US
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dropdown;
