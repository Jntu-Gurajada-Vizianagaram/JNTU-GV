import { Link, Outlet, useLocation } from "react-router-dom";
import './Examinations.css'; 


const ExaminationMain = () => {
  const location = useLocation();

  return (
    <div style={{display:"flex"}} className="exam-main">
      <div className="allLeftMenuAOP">
        <Link
          to="director-evaluation"
          className={`menubutton ${
            location.pathname === "/examination/director-evaluation" ? "active" : ""
          }`}
        >
          Director Of Evaluation
        </Link>
        <Link
          to="controller"
          className={`menubutton ${
            location.pathname === "/examination/controller" ? "active" : ""
          }`}
        >
          Controller Of Examinations
        </Link>
        <Link
          to="controller-sdc"
          className={`menubutton ${
            location.pathname === "/examination/controller-sdc" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations SDC
        </Link>
        <Link
          to="controller1"
          className={`menubutton ${
            location.pathname === "/examination/controller1" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 1
        </Link>
        <Link
          to="controller2"
          className={`menubutton ${
            location.pathname === "/examination/controller2" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 2
        </Link>
        <Link
          to="controller3"
          className={`menubutton ${
            location.pathname === "/examination/controller3" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations 3
        </Link>
        <Link
          to="controller-pg"
          className={`menubutton ${
            location.pathname === "/examination/controller-pg" ? "active" : ""
          }`}
        >
          Addt. Controller Of Examinations PG
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ExaminationMain;
