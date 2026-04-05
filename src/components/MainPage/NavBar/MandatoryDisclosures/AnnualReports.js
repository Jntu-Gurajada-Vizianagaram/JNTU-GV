import React from "react";
import "./MandatoryDisclosures.css";
import { Description as DescriptionIcon } from "@mui/icons-material";

const AnnualReports = () => {
  const reports = [
    { title: "Annual Report 2023-24", link: "#", date: "Pending Release" },
    { title: "Annual Report 2022-23", link: "#", date: "Available" },
    { title: "Financial Statement 2023-24", link: "#", date: "Pending Audit" },
    { title: "Financial Statement 2022-23", link: "#", date: "Available" },
    { title: "NAAC Institutional Grade Sheet", link: "#", date: "Available" },
    { title: "NIRF 2024 Submission Details", link: "#", date: "Available" },
  ];

  return (
    <div className="dir-profile-container">
      <div className="dir-profile-header">
        <div className="dir-profile-info">
          <h3>Annual Reports & Financial Statements</h3>
          <h4>Transparency and Public Disclosure</h4>
          <p>
            The following section contains links to the university's annual reports, 
            audited financial statements, and accreditation documents for public viewing.
          </p>
        </div>
      </div>

      <div className="dir-tabs-container">
        <button className="dir-tab-button active">Reports/Downloads</button>
      </div>

      <div className="dir-profile-details">
        <p className="dir-sub-heading">Archive of Reports</p>
        <div className="disclosure-table-container">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Report Title</th>
                <th>Status</th>
                <th>Download Link</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.title}</td>
                  <td>{report.date}</td>
                  <td>
                    {report.link === "#" ? (
                      <span className="text-muted">In Process</span>
                    ) : (
                      <a href={report.link} className="dir-action-link" target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon fontSize="small" /> Download PDF
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="dir-sub-heading mt-4">NAAC / NIRF Accreditations</p>
        <p>
          Institutional accreditation and ranking documents are mandatory for university websites under UGC guidelines. 
          Current Grade and NIRF scores will be updated here following current results and cycle reviews.
        </p>
      </div>
    </div>
  );
};

export default AnnualReports;
