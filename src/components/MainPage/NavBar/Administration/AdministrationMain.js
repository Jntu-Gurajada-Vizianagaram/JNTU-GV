import { Link, Outlet, useLocation } from "react-router-dom";
import "./Administration.css"
const AdministrationMain = () => {
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/administration/chancellor":
        return "Chancellor";
      case "/administration/vice-chancellor":
        return "Vice Chancellor";
      case "/administration/registrar":
        return "Registrar";
      case "/administration/osd":
        return "Officer on Special Duty (OSD)";
      case "/administration/chairpersons":
        return "Chairpersons";
      default:
        return "Administration";
    }
  };

  return (
    <div className="admin-main-container">
      <div className="admin-left-menu">
        <Link
          to="chancellor"
          className={`admin-menu-button ${location.pathname === "/administration/chancellor" ? "active" : ""
            }`}
        >
          Chancellor
        </Link>
        <Link
          to="vice-chancellor"
          className={`admin-menu-button ${location.pathname === "/administration/vice-chancellor" ? "active" : ""
            }`}
        >
          Vice Chancellor
        </Link>
        <Link
          to="registrar"
          className={`admin-menu-button ${location.pathname === "/administration/registrar" ? "active" : ""
            }`}
        >
          Registrar
        </Link>
        <Link
          to="osd"
          className={`admin-menu-button ${location.pathname === "/administration/osd" ? "active" : ""
            }`}
        >
          Officer on Special Duty (OSD)
        </Link>
        <Link
          to="chairpersons"
          className={`admin-menu-button ${location.pathname === "/administration/chairpersons" ? "active" : ""
            }`}
        >
          Chairpersons
        </Link>
      </div>
      <div className="admin-right-content">
        <div className="admin-right-content-heading">
          {getTitle(location.pathname)}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdministrationMain;