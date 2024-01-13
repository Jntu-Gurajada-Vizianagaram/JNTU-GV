import { Link, Outlet, useLocation } from "react-router-dom";

const JntuGvUnits = () => {
  const location = useLocation();

  return (
    <div>
      <div className="allLeftMenuAOP">
        <Link
          to="/JntuGvUnits/DMC"
          className={`menubutton ${
            location.pathname === "/JntuGvUnits/DMC" ? "active" : ""
          }`}
        >
          DMC{" "}
        </Link>
        <Link
          to="/JntuGvUnits/IQACUnits"
          className={`menubutton ${
            location.pathname === "/JntuGvUnits/IQACUnits" ? "active" : ""
          }`}
        >
          IQAC
        </Link>
        <Link
          to="/JntuGvUnits/Sports"
          className={`menubutton ${
            location.pathname === "/JntuGvUnits/Sports" ? "active" : ""
          }`}
        >
          Sports{" "}
        </Link>
        <Link
          to="/JntuGvUnits/LibraryUnit"
          className={`menubutton ${
            location.pathname === "/JntuGvUnits/LibraryUnit" ? "active" : ""
          }`}
        >
          Library
        </Link>
        <Link
          to="/JntuGvUnits/IncubationCenter"
          className={`menubutton ${
            location.pathname === "/JntuGvUnits/IncubationCenter"
              ? "active"
              : ""
          }`}
        >
          Incubation Center
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default JntuGvUnits;
