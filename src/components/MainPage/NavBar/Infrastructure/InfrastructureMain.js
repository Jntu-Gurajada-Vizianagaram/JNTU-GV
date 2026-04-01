import { Link, Outlet, useLocation } from "react-router-dom";
import "./Infrastructure.css"; 

const InfrastructureMain = () => {
  const location = useLocation();

  const menuItems = [
    { label: "Library", path: "about-library" },
    { label: "Hostels", path: "about-hostels" },
    { label: "Sports & Fitness", path: "about-sports-and-fitness" },
    { label: "Dispensary", path: "about-dispensary" },
    { label: "Bank", path: "about-banks" },
    { label: "Engineering Cell", path: "about-engineering-cell" },
    { label: "Canteen", path: "about-canteen" },
    { label: "Staff Quarters", path: "about-staff-quarters" },
    { label: "Guest House", path: "about-guest-house" },
    { label: "Music Club", path: "about-music-club" },
    { label: "Student Activity Club", path: "about-student-activity-club" },
  ];

  return (
    <div className="infra-container">
      <div className="infra-left-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`infra-item-link ${
              location.pathname === `/infrastructure/${item.path}` ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="infra-content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default InfrastructureMain;