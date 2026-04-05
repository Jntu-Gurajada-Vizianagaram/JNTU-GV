import React from "react";
import "./MandatoryDisclosures.css";

const ICC = () => {
  return (
    <div className="dir-profile-container">
      <div className="dir-profile-header">
        <div className="dir-profile-info">
          <h3>Internal Complaint Committee (ICC)</h3>
          <h4>Prevention of Sexual Harassment (POSH)</h4>
          <p>
            The Internal Complaint Committee (ICC) has been constituted at JNTU-GV in accordance with the 
            Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
          </p>
        </div>
      </div>

      <div className="dir-tabs-container">
        <button className="dir-tab-button active">Objective & Guidelines</button>
      </div>

      <div className="dir-profile-details">
        <p className="dir-sub-heading">Objective</p>
        <p>
          The primary objective of the ICC is to provide a safe and conducive work and academic environment, 
          free from sexual harassment, for all women stakeholders including students, faculty, and administrative staff.
        </p>

        <p className="dir-sub-heading">Key Responsibilities</p>
        <p>❖ To provide an appropriate complaint mechanism for any victim of sexual harassment.</p>
        <p>❖ To conduct inquiries into complaints with strict confidentiality and fairness.</p>
        <p>❖ To organize awareness programs, workshops, and seminars on gender sensitization and women's rights.</p>
        <p>❖ To recommend disciplinary actions against the offender in accordance with the university's statutes.</p>

        <p className="dir-sub-heading">Contact Information</p>
        <div className="disclosure-table-container">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Designation</th>
                <th>Role in ICC</th>
                <th>Email Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senior Female Faculty Member</td>
                <td>Chairperson</td>
                <td>icc.chairperson@jntugv.edu.in</td>
              </tr>
              <tr>
                <td>Representative (Faculty)</td>
                <td>Member</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Representative (Non-Teaching Staff)</td>
                <td>Member</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Representative (NGO/Social Worker)</td>
                <td>External Member</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          <i>Note: For immediate assistance or to file a formal complaint, please contact the Chairperson directly via the email above.</i>
        </p>
      </div>
    </div>
  );
};

export default ICC;
