import { Link, Outlet, useLocation } from "react-router-dom";
import "./Results-main.css";

const Results = () => {
  const location = useLocation();
  return (
    <div>
      <div className="ABOUT-Main">
        <div className="ABOUTallLeftMenu">
          {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
          <Link
            to="r13"
            className={`menuButton ${
              location.pathname === "/results/r13" ? "active" : ""
            }`}
          >
            R13
          </Link>
          <Link
            to="r16"
            className={`menuButton ${
              location.pathname === "/results/r16" ? "active" : ""
            }`}
          >
            R16
          </Link>
          <Link
            to="r19"
            className={`menuButton ${
              location.pathname === "/results/r19" ? "active" : ""
            }`}
          >
            R19
          </Link>
          <Link
            to="r20"
            className={`menuButton ${
              location.pathname === "/results/r20" ? "active" : ""
            }`}
          >
            R20
          </Link>
      
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Results;
