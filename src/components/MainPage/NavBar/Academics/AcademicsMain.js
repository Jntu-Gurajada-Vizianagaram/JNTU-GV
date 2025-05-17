import { Link, Outlet, useLocation } from "react-router-dom";
import './Academics.css'

const AcademicsMain = () => {
  const location = useLocation();

  return (
    <div className="Academicmain-Main">
      <div className="allLeftMenuAOP">
        <Link
          to="programs-offered"
          className={`menubutton ${
            location.pathname === "/academics/programs-offered" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
        <Link
          to="admissions"
          className={`menubutton ${
            location.pathname === "/academics/admissions" ? "active" : ""
          }`}
        >
          Admissions
        </Link>
        <Link
          to="constituent-colleges"
          className={`menubutton ${
            location.pathname === "/academics/constituent-colleges" ? "active" : ""
          }`}
        >
          Constituent Colleges
        </Link>
        <Link
          to="affliated-colleges"
          className={`menubutton ${
            location.pathname === "/academics/affliated-colleges" ? "active" : ""
          }`}
        >
          Affiliated Colleges
        </Link>

        <Link
          to="autonomous-colleges"
          className={`menubutton ${
            location.pathname === "/academics/autonomous-colleges" ? "active" : ""
          }`}
        >
          Autonomous Colleges
        </Link>


        <Link
          to="bos-chairman"
          className={`menubutton ${
            location.pathname === "/academics/bos-chairman" ? "active" : ""
          }`}
        >
          BOS Chairman
        </Link>
        <Link
          to="Calendar"
          className={`menubutton ${
            location.pathname === "/academics/Calendar" ? "active" : ""
          }`}
        >
        Academic Calendar
        </Link>
        <Link
          to="academic-syllabus"
          className={`menubutton ${
            location.pathname === "/academics/academic-syllabus" ? "active" : ""
          }`}
        >
          Academic Syllabus
        </Link>
        <Link
          to="academic-regulations"
          className={`menubutton ${
            location.pathname === "/academics/academic-regulations" ? "active" : ""
          }`}
        >
          Academic Regulations
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicsMain;
