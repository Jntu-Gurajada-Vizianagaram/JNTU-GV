import React from "react";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function EngineeringCell() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Engineering Cell</h3>
      </div>

      <div className="infra-profile-details">
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          The Engineering Cell of the institution oversees all construction and civil works at the institutional level.
          The Chief Engineer at the University regularly inspects the ongoing projects to ensure quality and progress.
        </Typography>

        <h5 className="infra-sub-heading">Staff</h5>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Er. L. Hari Prakash</td><td>Assistant Executive Engineer</td></tr>
            <tr><td>2</td><td>M.S.R.Ch.S Raju</td><td>Work Inspector (Civil)</td></tr>
            <tr><td>3</td><td>A. Lakshmana Rao</td><td>Work Inspector (Civil)</td></tr>
            <tr><td>4</td><td>P. Suneetha</td><td>Work Inspector (Civil)</td></tr>
            <tr><td>5</td><td>M. Ramana</td><td>Work Inspector (Non-Technical)</td></tr>
          </tbody>
        </table>

        <h5 className="infra-sub-heading">Construction Activities</h5>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The Building Committee has already approved several key projects, with initial steps underway for the following:
        </Typography>
        <ul className="infra-list" style={{ lineHeight: '1.8', marginBottom: '24px' }}>
          <li>
            <strong>Academic Block-III (G+2):</strong> Approved construction with an estimated budget of ₹17.99 Crores.
            The tender process will initiate following University Executive Council approval.
          </li>
          <li>
            <strong>Pedestrian Connectivity:</strong> Construction of steps with CC paver paths from the Boys' Hostel to AB-II at an estimated cost of ₹18.0 Lac.
          </li>
          <li>
            <strong>Water Infrastructure:</strong> Construction of a water tank and installation of water pipelines at an estimated cost of ₹1.20 Lac.
          </li>
        </ul>

        <h5 className="infra-sub-heading">Project Engineer Electrical Section</h5>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The Project Engineer (Electrical) section handles all maintenance and original electrical works on the UCEV campus.
        </Typography>
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h6" className="infra-accent-text">Dr. A.Padmaja</Typography>
          <Typography variant="body1">Project Engineer (Electrical)</Typography>
        </div>

        <h6 className="infra-accent-text" style={{ marginBottom: '12px' }}>Supporting Staff</h6>
        <table className="infra-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Sri. N. Appa Rao</td><td>Technician</td></tr>
            <tr><td>2</td><td>Sri. B. Rama Krishna</td><td>Helper</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EngineeringCell;
