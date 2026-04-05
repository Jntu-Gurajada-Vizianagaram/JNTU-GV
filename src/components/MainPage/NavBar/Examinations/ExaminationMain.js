import { Link, Outlet, useLocation } from "react-router-dom";
import './Examinations.css';


const ExaminationMain = () => {
  const location = useLocation();

  return (
    <div className="exam-container">
      <div className="exam-left-menu">
        <Link
          to="director"
          className={`exam-item-link ${location.pathname === "/examination/director" ? "active" : ""
            }`}
        >
          Director Of Evaluation
        </Link>
        <Link
          to="controller"
          className={`exam-item-link ${location.pathname === "/examination/controller" ? "active" : ""
            }`}
        >
          Controller Of Examinations
        </Link>
        <Link
          to="controller-sdc"
          className={`exam-item-link ${location.pathname === "/examination/controller-sdc" ? "active" : ""
            }`}
        >
          Addt. Controller Of Examinations SDC
        </Link>
        <Link
          to="controller2"
          className={`exam-item-link ${location.pathname === "/examination/controller2" ? "active" : ""
            }`}
        >
          Addt. Controller Of Examinations 2
        </Link>
        <Link
          to="controller3"
          className={`exam-item-link ${location.pathname === "/examination/controller3" ? "active" : ""
            }`}
        >
          Addt. Controller Of Examinations 3
        </Link>
        <Link
          to="controller4"
          className={`exam-item-link ${location.pathname === "/examination/controller4" ? "active" : ""
            }`}
        >
          Addt. Controller Of Examinations 4
        </Link>
        <Link
          to="controller-pg"
          className={`exam-item-link ${location.pathname === "/examination/controller-pg" ? "active" : ""
            }`}
        >
          Addt. Controller Of Examinations PG
        </Link>
      </div>
      <div className="exam-content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default ExaminationMain;
