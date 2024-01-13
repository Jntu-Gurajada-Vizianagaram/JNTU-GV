import { Link, Outlet, useLocation } from "react-router-dom";
import "./Infrastructure.css"; 
const InfrastructureMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="about-library"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-library" ? "active" : ""
          }`}
        >
          Library 
        </Link>
        <Link
          to="about-hostels"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-hostels" ? "active" : ""
          }`}
        >
          Hostels 
        </Link>
        <Link
          to="about-sports-and-fitness"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-sports-and-fitness" ? "active" : ""
          }`}
        >
          Sports & Fitness 
        </Link>
        <Link
          to="about-dispensary"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-dispensary" ? "active" : ""
          }`}
        >
          Dispensary 
        </Link>
        <Link
          to="about-banks"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-banks" ? "active" : ""
          }`}
        >
          Bank 
        </Link>
        <Link
          to="about-engineering-cell"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-engineering-cell" ? "active" : ""
          }`}
        >
          Engineering Cell 
        </Link>
        <Link
          to="about-canteen"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-canteen" ? "active" : ""
          }`}
        >
          Canteen  
        </Link>
        <Link
          to="about-staff-quarters"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-staff-quarters" ? "active" : ""
          }`}
        >
          Staff Quarters  
        </Link>
        <Link
          to="about-guest-house"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-guest-house" ? "active" : ""
          }`}
        >
         Guest House  
        </Link>
        <Link
          to="about-music-club"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-music-club" ? "active" : ""
          }`}
        >
         Music Club  
        </Link>
        <Link
          to="about-student-activity-club"
          className={`menuButton ${
            location.pathname === "/infrastructure/about-student-activity-club" ? "active" : ""
          }`}
        >
         Student Activity Club  
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default InfrastructureMain;