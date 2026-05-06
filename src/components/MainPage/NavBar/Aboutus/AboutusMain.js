import { Link, Outlet, useLocation } from "react-router-dom";
import "./Aboutus.css"; 

const AboutusMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main-VM">
      <div className="ABOUT-allLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="about-jntugv"
          className={`menuButton ${
            location.pathname === "/about-us/about-jntugv" ? "active" : ""
          }`}
        >
          About JNTU-GV
        </Link>
        <Link
          to="vision"
          className={`menuButton ${
            location.pathname === "/about-us/vision" ? "active" : ""
          }`}
        >
          Vision
        </Link>
        <Link
          to="mission"
          className={`menuButton ${
            location.pathname === "/about-us/mission" ? "active" : ""
          }`}
        >
          Mission
        </Link>
        <Link
          to="about-vizianagaram"
          className={`menuButton ${
            location.pathname === "/about-us/about-vizianagaram" ? "active" : ""
          }`}
        >
          About Vizianagaram
        </Link>
      </div>
      <br></br>
      <Outlet />
    </div>
  );
};

export default AboutusMain;