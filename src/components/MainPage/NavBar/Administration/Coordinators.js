import React from "react";
import "./Administration.css";
import { MdOutlineMailOutline, MdAccountBalance } from "react-icons/md";

const Coordinators = () => {
  const coordinatorsList = [
    {
      name: "Dr.B.Nalini",
      designation: "Coordinator DMC",
      department: "Digital  Monitoring Cell",
      email: "dmc@jntugv.edu.in"
    },
    {
      name: "Dr.B.Nalini",
      designation: "Coordinator WEGC CELL",
      department: "Women Empowerment and Grievances Cell",
      email: "wegc@jntugv.edu.in"
    },
    {
      name: "Dr. C. Neelima Devi",
      designation: "Coordinator of MSME",
      department: "MSME Coordinator",
      email: "msmecoordinator@jntugv.edu.in"
    },
    {
      name: "Dr. B. Tirimula Rao",
      designation: "Program Coordinator",
      department: "PGCPAITL",
      email: "pgcpaitl@jntugv.edu.in"
    },
    {
      name: "Mr. R.D.D.V. Siva Ram",
      designation: "Coordinator of ONOS",
      department: "One Nation One Subscrption - E Library",
      email: "oil@jntugvcev.edu.in"
    },

  ];

  return (
    <div className="admin-profile-details">
      <div className="coordinators-grid">
        {coordinatorsList.map((coordinator, index) => (
          <div key={index} className="coordinator-card">
            <div className="card-header">
              <h3 className="coordinator-name">{coordinator.name}</h3>
              <p className="coordinator-designation">{coordinator.designation}</p>
            </div>
            <div className="card-body">
              <div className="info-item">
                <MdAccountBalance className="info-icon" />
                <span>{coordinator.department}</span>
              </div>
              <div className="info-item">
                <MdOutlineMailOutline className="info-icon" />
                <a href={`mailto:${coordinator.email}`} className="coordinator-email">
                  {coordinator.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4" style={{ borderTop: "1px solid #eee", paddingTop: "20px", color: "#666", fontSize: "0.9rem" }}>
        <i>Note: The above list contains the key administrative and academic directors/coordinators of JNTU-GV. For specific department-level coordinators, please visit the respective department pages.</i>
      </p>
    </div>
  );
};

export default Coordinators;
