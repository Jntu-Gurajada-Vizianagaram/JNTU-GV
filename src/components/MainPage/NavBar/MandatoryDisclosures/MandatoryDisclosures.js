import {
  Box,
  Container,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Description as DescriptionIcon } from "@mui/icons-material";
import "./MandatoryDisclosures.css";

const MandatoryDisclosures = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const reports = [
    { title: "Annual Report 2023-24", link: "#", status: "Pending Release" },
    { title: "Annual Report 2022-23", link: "#", status: "Available" },
    { title: "Financial Statement 2023-24", link: "#", status: "Pending Audit" },
    { title: "Financial Statement 2022-23", link: "#", status: "Available" },
    { title: "NAAC Institutional Grade Sheet", link: "#", status: "Available" },
    { title: "NIRF 2024 Submission Details", link: "#", status: "Available" },
  ];

  const iccMembers = [
    { designation: "Senior Female Faculty Member", role: "Chairperson", contact: "icc.chairperson@jntugv.edu.in" },
    { designation: "Representative (Faculty)", role: "Member", contact: "-" },
    { designation: "Representative (Non-Teaching Staff)", role: "Member", contact: "-" },
    { designation: "Representative (NGO/Social Worker)", role: "External Member", contact: "-" },
  ];

  const scstMembers = [
    { designation: "Liaison Officer / Coordinator", role: "Chairperson", dept: "-" },
    { designation: "Faculty Representative (SC/ST)", role: "Member", dept: "-" },
    { designation: "Faculty Representative (OBC)", role: "Member", dept: "-" },
    { designation: "Administrative Staff", role: "Member Secretary", dept: "-" },
  ];

  return (
    <Container maxWidth="lg" className="disclosures-portal">
      <Box className="disclosures-header" sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" className="portal-title">UGC Mandatory Disclosures</Typography>
        <Typography variant="body1" className="portal-subtitle">
          Transparent institutional governance and compliance as per University Grants Commission (UGC) regulations.
        </Typography>
      </Box>

      <Paper elevation={4} className="disclosures-tab-container" sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            background: "#f8f9fa",
            borderBottom: "1px solid #eee",
            "& .MuiTabs-indicator": { height: 4, backgroundColor: "#370A68" },
            "& .MuiTab-root": { fontWeight: "bold", color: "#666" },
            "& .Mui-selected": { color: "#370A68 !important" },
          }}
        >
          <Tab label="ICC (POSH)" />
          <Tab label="SC/ST & OBC Cell" />
          <Tab label="Annual Reports & Financials" />
        </Tabs>

        <Box className="tab-content-area" sx={{ p: 4 }}>
          {selectedTab === 0 && (
            <Box className="icc-section">
              <Typography variant="h5" sx={{ color: "#370A68", mb: 2, fontWeight: 700 }}>
                Internal Complaint Committee (ICC)
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
                Constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, to provide a safe and conducive environment for all women stakeholders.
              </Typography>
              <TableContainer component={Paper} elevation={0} className="disclosure-table-wrapper">
                <Table className="disclosure-table">
                  <TableHead>
                    <TableRow sx={{ background: "#370A68" }}>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Designation</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Role in ICC</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Contact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {iccMembers.map((member, i) => (
                      <TableRow key={i} hover>
                        <TableCell>{member.designation}</TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>{member.contact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="caption" sx={{ mt: 2, display: "block", fontStyle: "italic", color: "#666" }}>
                ❖Confidentiality and fairness are strictly maintained in all inquiries.
              </Typography>
            </Box>
          )}

          {selectedTab === 1 && (
            <Box className="scst-section">
              <Typography variant="h5" sx={{ color: "#370A68", mb: 2, fontWeight: 700 }}>
                SC/ST and OBC Cell
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
                Dedicated to ensuring the protection of rights and interests of socially disadvantaged categories, implementing reservation policies as per Govt. guidelines.
              </Typography>
              <TableContainer component={Paper} elevation={0} className="disclosure-table-wrapper">
                <Table className="disclosure-table">
                  <TableHead>
                    <TableRow sx={{ background: "#370A68" }}>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Member Designation</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Committee Role</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Department</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {scstMembers.map((member, i) => (
                      <TableRow key={i} hover>
                        <TableCell>{member.designation}</TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>{member.dept}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="caption" sx={{ mt: 2, display: "block", fontStyle: "italic", color: "#666" }}>
                ❖ Reservation policy monitoring and academic counseling are primary functions of this cell.
              </Typography>
            </Box>
          )}

          {selectedTab === 2 && (
            <Box className="reports-section">
              <Typography variant="h5" sx={{ color: "#370A68", mb: 2, fontWeight: 700 }}>
                Annual Reports & Financial Statements
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Archive of university's performance metrics, audited financial records, and accreditation results for public transparency.
              </Typography>
              <TableContainer component={Paper} elevation={0} className="disclosure-table-wrapper">
                <Table className="disclosure-table">
                  <TableHead>
                    <TableRow sx={{ background: "#370A68" }}>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Report Title</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Download</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((report, i) => (
                      <TableRow key={i} hover>
                        <TableCell sx={{ fontWeight: 600 }}>{report.title}</TableCell>
                        <TableCell>{report.status}</TableCell>
                        <TableCell>
                          {report.link === "#" ? (
                            <Typography variant="caption" color="text.secondary">In Process</Typography>
                          ) : (
                            <a href={report.link} className="download-link">
                              <DescriptionIcon fontSize="small" sx={{ mr: 0.5 }} /> PDF
                            </a>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default MandatoryDisclosures;
