import React from "react";
import "./MandatoryDisclosures.css";

const SCSTCell = () => {
  return (
    <div className="dir-profile-container">
      <div className="dir-profile-header">
        <div className="dir-profile-info">
          <h3>SC/ST and OBC Cell</h3>
          <h4>Empowerment and Equal Opportunity</h4>
          <p>
            The SC/ST and OBC Cell at JNTU-GV is dedicated to ensuring the protection of rights and interests 
            of socially disadvantaged categories within the university community.
          </p>
        </div>
      </div>

      <div className="dir-tabs-container">
        <button className="dir-tab-button active">Objective & Functions</button>
      </div>

      <div className="dir-profile-details">
        <p className="dir-sub-heading">Objective</p>
        <p>
          To implement the reservation policy for SC/ST and OBC candidates (students and staff) 
          as per the guidelines of the Government of India, UGC, and State Government. 
          The cell aim to create a supportive environment to foster social inclusion and equal opportunity.
        </p>

        <p className="dir-sub-heading">Key Functions</p>
        <p>❖ To monitor the implementation of various reservation measures across all departments.</p>
        <p>❖ To provide academic and career counseling for SC/ST and OBC students.</p>
        <p>❖ To facilitate scholarship and financial assistance programs.</p>
        <p>❖ To address grievances related to discrimination or exclusionary practices.</p>
        <p>❖ To maintain a database of SC/ST and OBC students and employees.</p>

        <p className="dir-sub-heading">Committee Composition</p>
        <div className="disclosure-table-container">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Member Designation</th>
                <th>Committee Role</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Liaison Officer / Coordinator</td>
                <td>Chairperson</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Faculty Representative (SC/ST)</td>
                <td>Member</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Faculty Representative (OBC)</td>
                <td>Member</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Administrative Staff</td>
                <td>Member Secretary</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          <i>Note: For more information on scholarships or to register a concern, please visit the coordinator's office directly.</i>
        </p>
      </div>
    </div>
  );
};

export default SCSTCell;
