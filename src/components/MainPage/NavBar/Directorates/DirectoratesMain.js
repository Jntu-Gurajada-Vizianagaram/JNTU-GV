import { Link, Outlet, useLocation } from "react-router-dom";
import "./DirectoratesMain.css";
const DirectoratesMain = () => {
  const location = useLocation();

  return (
    <div className="AD-Main-DM">
      <div className="ADall-LeftMenu">
      <Link
          to="academic-planning"
          className={`menuButton ${
            location.pathname === "/directorates/academic-planning"
              ? "active"
              : ""
          }`}
        >
          Director of Academic Planning
        </Link>



        <Link
          to="academic-audit"
          className={`menuButton ${
            location.pathname === "/directorates/academic-audit" ? "active" : ""
          }`}
        >
          Director of Academic Audit
        </Link>

        <Link
          to="evaluation"
          className={`menuButton ${
            location.pathname === "/directorates/evaluation" ? "active" : ""
          }`}
        >
          Director of Evaluation
        </Link>

        <Link
          to="admissions"
          className={`menuButton ${
            location.pathname === "/directorates/admissions" ? "active" : ""
          }`}
        >
          Director of Admissions
        </Link>

        <Link
          to="placements"
          className={`menuButton ${
            location.pathname === "/directorates/placements" ? "active" : ""
          }`}
        >
          Director of IIIT & Placements
        </Link>

        <Link
          to="research"
          className={`menuButton ${
            location.pathname === "/directorates/research" ? "active" : ""
          }`}
        >
          Director of Research & Development
        </Link>

        {/* <Link
          to="faculty-development-cell"
          className={`menuButton ${
            location.pathname === "/directorates/faculty-development-cell"
              ? "active"
              : ""
          }`}
        >
          Director of Faculty Development Cell
        </Link> */}

        <Link
          to="alumni-relations"
          className={`menuButton ${
            location.pathname === "/directorates/alumni-relations"
              ? "active"
              : ""
          }`}
        >
          Director of Alumni Relations
        </Link>

        <Link
          to="iqac"
          className={`menuButton ${
            location.pathname === "/directorates/iqac" ? "active" : ""
          }`}
        >
          Director of Internal Quality Assurance Cell
        </Link>

        {/* <Link
          to="empowerment"
          className={`menuButton ${
            location.pathname === "/directorates/empowerment" ? "active" : ""
          }`}
        >
          Director of Empowerment of Women & Grievances
        </Link> */}
        
        {/* <Link
          to="sports-administration"
          className={`menuButton ${
            location.pathname === "/directorates/sports-administration"
              ? "active"
              : ""
          }`}
        >
          Director of University Games & Sports Administration
        </Link> */}
      </div>
      <Outlet />
    </div>
  );
};

export default DirectoratesMain;
