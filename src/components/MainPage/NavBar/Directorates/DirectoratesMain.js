import { Link, Outlet, useLocation } from "react-router-dom";
import "./Directorates.css";

const DirectoratesMain = () => {
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/directorates/academic-audit-planning":
        return "Director of Academic Audit and Planning";
      case "/directorates/evaluation":
        return "Director of Evaluation & Admissions";
      case "/directorates/research":
        return "Director of Research & Development";
      case "/directorates/placements":
        return "Director of Industrial Relations & Placements";
      case "/directorates/iqac":
        return "Director of Internal Quality Assurance Cell";
      case "/directorates/alumni-relations":
        return "Director of Alumni Relations";
      case "/directorates/admissions":
        return "Director of Admissions";
      case "/directorates/sports-administration":
        return "Director of University Games & Sports Administration";
      case "/directorates/faculty-development-cell":
        return "Director of Faculty Development Cell";
      case "/directorates/empowerment":
        return "Director of Empowerment of Women & Grievances";
      default:
        return "Directorate Overview";
    }
  };

  return (
    <div className="dir-main-container">
      <div className="dir-left-menu">
        <Link
          to="academic-audit-planning"
          className={`dir-menu-button ${location.pathname === "/directorates/academic-audit-planning" ? "active" : ""}`}
        >
          Director of Academic Audit and Planning
        </Link>

        <Link
          to="evaluation"
          className={`dir-menu-button ${location.pathname === "/directorates/evaluation" ? "active" : ""}`}
        >
          Director of Evaluation & Admissions
        </Link>
        <Link
          to="research"
          className={`dir-menu-button ${location.pathname === "/directorates/research" ? "active" : ""}`}
        >
          Director of Research & Development
        </Link>

        <Link
          to="placements"
          className={`dir-menu-button ${location.pathname === "/directorates/placements" ? "active" : ""}`}
        >
          Director of Industrial Relations & Placements
        </Link>

        <Link
          to="iqac"
          className={`dir-menu-button ${location.pathname === "/directorates/iqac" ? "active" : ""}`}
        >
          Director of Internal Quality Assurance Cell
        </Link>

        <Link
          to="alumni-relations"
          className={`dir-menu-button ${location.pathname === "/directorates/alumni-relations" ? "active" : ""}`}
        >
          Director of Alumni Relations
        </Link>
        {/* <Link
          to="admissions"
          className={`dir-menu-button ${location.pathname === "/directorates/admissions" ? "active" : ""}`}
        >
          Director of Admissions
        </Link> */}
        {/* <Link
          to="faculty-development-cell"
          className={`dir-menu-button ${location.pathname === "/directorates/faculty-development-cell" ? "active" : ""}`}
        >
          Director of Faculty Development Cell
        </Link>
        <Link
          to="sports-administration"
          className={`dir-menu-button ${location.pathname === "/directorates/sports-administration" ? "active" : ""}`}
        >
          Director of University Games & Sports Administration
        </Link>
        <Link
          to="empowerment"
          className={`dir-menu-button ${location.pathname === "/directorates/empowerment" ? "active" : ""}`}
        >
          Director of Empowerment of Women & Grievances
        </Link> */}
      </div>
      <div className="dir-right-content">
        <div className="dir-right-content-heading">
          {getTitle(location.pathname)}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DirectoratesMain;
