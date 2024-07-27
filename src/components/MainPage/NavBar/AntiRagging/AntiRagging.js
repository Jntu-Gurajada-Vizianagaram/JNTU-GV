import { Link, Outlet, useLocation } from "react-router-dom";
import './Antiragging.css'

const Antiragging = () => {
  const location = useLocation();

  return (
    <div className="Antiragging-Main">
      <div className="allLeftMenuAOP">
        <Link
          to="about"
          className={`menubutton ${
            location.pathname === "/anti-ragging/about-us" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="committee"
          className={`menubutton ${
            location.pathname === "/anti-ragging/ragging-committee" ? "active" : ""
          }`}
        >
          Committee Members
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Antiragging;
