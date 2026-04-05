import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputAdornment,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Syllabus.css";

const data = {
  year: {
    R25: {
      PG: [
        {
          sno: 1,
          branch: "MASTER OF BUSINESS ADMINISTRATION ",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV%20R25-MBA%20Syllabus.pdf",
        },
      ],
    },
    R23: {
      UG: [
        {
          sno: 1,
          branch: "Civil Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/B.Tech-R23-CIVIL%20Engineering%20syllabus%2030-7-2024.pdf",
        },
        {
          sno: 2,
          branch: "Electronics and Communication Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/B.Tech-JNTUGV-R23-ECE%20Course%20Structure%20and%20Syllabus.pdf",
        },
        {
          sno: 3,
          branch: "Electrical and Electronic Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/EEE-R23-JNTU-GV%20-B.Tech-Course%20Structure%20and%20Syllabus.pdf",
        },
        {
          sno: 4,
          branch: "Mechanical Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/B.Tech-R23-Mechanical%20Engineering%20Course%20Structure%20and%20Syllabus.pdf",
        },
        {
          sno: 5,
          branch: "Artificial Intelligence & Machine Learning",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&ML-_R23_Regulations.pdf",
        },
        {
          sno: 6,
          branch: "Artificial Intelligence & Data Science",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&DS-_R23_Regulations.pdf",
        },
        {
          sno: 7,
          branch: "Computer Science and Engineering (Data Science)",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE(DS)%20Syllabus.pdf",
        },
        {
          sno: 8,
          branch: "Computer Science and Engineering (AI&DS)",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&DS-_R23_Regulations.pdf",
        },
        {
          sno: 9,
          branch: "Computer Science and Engineering (Cyber security)",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE(CS)%20Syllabus.pdf",
        },
        {
          sno: 10,
          branch: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-CSE(AI&ML)-_R23_Regulations.pdf",
        },
        {
          sno: 11,
          branch: "Computer Science and Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE%20Syllabus.pdf",
        },
        {
          sno: 12,
          branch: "Information Technology",
          pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-R23%20IT%20Syllabus.pdf",
        },
        {
          sno: 13,
          branch: "Artificial Intelligence",
          pdfLink: "https://api.jntugv.edu.in/media/14.ARTIFICIAL%20INTELLIGENCE%20-R23%20Course%20Strcture%20&%20Syallabus.pdf",
        },
        {
          sno: 14,
          branch: "Computer Science and Engineering (Artificial Intelligrnce)",
          pdfLink: "https://api.jntugv.edu.in/media/14.ARTIFICIAL%20INTELLIGENCE%20-R23%20Course%20Strcture%20&%20Syallabus.pdf",
        },
        {
          sno: 15,
          branch: "Automobile Engineering",
          pdfLink: "https://api.jntugv.edu.in/media/Automobile%20Engg..-R23-JNTU-GV%20B.Tech-Course%20Structure%20and%20Syllabus.pdf",
        },
      ],
    },
    R24: {
      UG: [
        {
          sno: 1,
          branch: "JNTU-GV-BBA & BBA(Honors) Full Syllabus",
          pdfLink: "https://api.jntugv.edu.in/media/JNTU-GV BBA  & BBA (Honors) full syllabus.pdf",
        },
      ],
      PG: [
        {
          sno: 1,
          branch: "MASTER OF BUSINESS ADMINISTRATION ",
          pdfLink: "https://api.jntugv.edu.in/media/R24%20MBA%20Syllabus.pdf",
        },
      ],
    },
    R13: {
      UG: [
        { sno: 1, branch: "Aeronautical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Aeronautical%20Engineering-R13.pdf" },
        { sno: 2, branch: "Civil Engineering", pdfLink: "https://api.jntugv.edu.in/media/Civil-R13.pdf" },
        { sno: 3, branch: "Computer Science and Engineering", pdfLink: "https://api.jntugv.edu.in/media/CSE-R13.pdf" },
        { sno: 4, branch: "Electrical and Electronics Engineering", pdfLink: "https://api.jntugv.edu.in/media/EEE-R13.pdf" },
        { sno: 5, branch: "Electronics and Communication Engineering", pdfLink: "https://api.jntugv.edu.in/media/ECE-R13.pdf" },
        { sno: 6, branch: "Information Technology", pdfLink: "https://api.jntugv.edu.in/media/IT-R13.pdf" },
        { sno: 7, branch: "Mechanical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Mechanical%20Engineering-R13.pdf" },
        { sno: 8, branch: "Mining Engineering", pdfLink: "https://api.jntugv.edu.in/media/MINING%20ENGG-R13.pdf" },
        { sno: 9, branch: "Petrochemical Engineering", pdfLink: "https://api.jntugv.edu.in/media/PETROCHEMICAL%20ENGINEERING-R13.pdf" },
        { sno: 10, branch: "Chemical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Chemical%20Engineering-R13.pdf" },
        { sno: 11, branch: "Metallurgical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Metllurgical-R13.pdf" },
        { sno: 12, branch: "Biotechnology", pdfLink: "https://api.jntugv.edu.in/media/Biotechnology-R13.pdf" },
        { sno: 13, branch: "Petroleum Engineering", pdfLink: "https://api.jntugv.edu.in/media/Petroleum%20Engineering%20-%20R13.pdf" },
        { sno: 14, branch: "Electronics and Instrumentation Engineering", pdfLink: "https://api.jntugv.edu.in/media/EIE-R13.pdf" },
        { sno: 15, branch: "Electronics and Computer Engineering", pdfLink: "https://api.jntugv.edu.in/media/ELECTRONICS%20AND%20COMPUTER%20ENGINEERING-R13.pdf" },
        { sno: 16, branch: "Automobile Engineering", pdfLink: "https://api.jntugv.edu.in/media/AUTOMOBILE%20ENGG-R13.pdf" },
        { sno: 17, branch: "Agricultural Engineering", pdfLink: "https://api.jntugv.edu.in/media/Agricultural%20Engineering-R13.pdf" },
        { sno: 18, branch: "B.Pharmacy", pdfLink: "https://api.jntugv.edu.in/media/B.Pharmacy-R13.pdf" },
      ],
    },
    R16: {
      UG: [
        { sno: 1, branch: "Aeronautical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Aeronautical%20Engineering.pdf" },
        { sno: 2, branch: "Civil Engineering", pdfLink: "https://api.jntugv.edu.in/media/Civil%20Engineering.pdf" },
        { sno: 3, branch: "Computer Science and Engineering", pdfLink: "https://api.jntugv.edu.in/media/CSE%20R16.pdf" },
        { sno: 4, branch: "Electrical and Electronics Engineering", pdfLink: "https://api.jntugv.edu.in/media/EEE.pdf" },
        { sno: 5, branch: "Electronics and Communication Engineering", pdfLink: "https://api.jntugv.edu.in/media/ECE.pdf" },
        { sno: 6, branch: "Information Technology", pdfLink: "https://api.jntugv.edu.in/media/IT.pdf" },
        { sno: 7, branch: "Mechanical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Mechanical%20Engineering%20R16.pdf" },
        { sno: 8, branch: "Mining Engineering", pdfLink: "https://api.jntugv.edu.in/media/Mining%20Engieering%2019082016.pdf" },
        { sno: 9, branch: "Petrochemical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Ptrochemical%20Engineering.pdf" },
        { sno: 10, branch: "Chemical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Chemical%20Engineering.pdf" },
        { sno: 11, branch: "Metallurgical Engineering", pdfLink: "https://api.jntugv.edu.in/media/Metallurgical%20Engineering.pdf" },
        { sno: 12, branch: "Biotechnology", pdfLink: "https://api.jntugv.edu.in/media/Biotechnology.pdf" },
        { sno: 13, branch: "Petroleum Engineering", pdfLink: "https://api.jntugv.edu.in/media/Petroleum%20Engineering.pdf" },
        { sno: 14, branch: "Electronics and Instrumentation Engineering", pdfLink: "https://api.jntugv.edu.in/media/EIE.pdf" },
        { sno: 15, branch: "Automobile Engineering", pdfLink: "https://api.jntugv.edu.in/media/Automobile%20Engineering.pdf" },
        { sno: 16, branch: "B.Pharmacy", pdfLink: "https://api.jntugv.edu.in/media/B.Pharmacy.pdf" },
      ],
    },
  },
};

const Syllabus = () => {
  const availableYears = Object.keys(data.year);
  const [selectedTab, setSelectedTab] = useState(availableYears[0] || "");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
    setSearchQuery("");
  };

  const renderTable = (program) => {
    const programData = data.year[selectedTab]?.[program];
    if (!programData) return null;

    const filteredData = programData.filter((row) =>
      row.branch.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <Accordion elevation={0} className="premium-accordion" defaultExpanded sx={{ mb: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {program} Syllabus ({selectedTab} Regulation)
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: "0 0 8px 8px" }}>
            <Table stickyHeader aria-label={`${program} syllabus table`}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white", width: "80px" }}>S.No</TableCell>
                  <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Department / Branch</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Syllabus Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.sno} hover sx={{ "&:nth-child(even)": { backgroundColor: "#f9f9f9" } }}>
                    <TableCell align="center">{row.sno}</TableCell>
                    <TableCell sx={{ fontWeight: 500, color: "#333" }}>{row.branch}</TableCell>
                    <TableCell align="center">
                      <a href={row.pdfLink} target="_blank" rel="noopener noreferrer" className="syllabus-download-btn">
                        View/Download PDF
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredData.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} align="center" sx={{ py: 3, color: "#999" }}>
                      No syllabus found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className="syllabus">
      <div className="syllabus-header">
        <div className="title-section">
          <h2 className="syllabus-title">Academic Syllabus</h2>
          <p className="subtitle">Official course structures and detailed branch-wise syllabus</p>
        </div>
        <div className="search-section">
          <TextField
            fullWidth
            placeholder="Search by department..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#370A68" }} />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 400, background: "white" }}
          />
        </div>
      </div>

      <div className="tabs-container">
        {availableYears.length >= 1 && (
          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#370A68" },
              "& .MuiTab-root": { color: "#666", fontWeight: 600 },
              "& .MuiTab-root.Mui-selected": { color: "#370A68" },
              mb: 3,
            }}
          >
            {availableYears.map((year) => (
              <Tab key={year} label={year} value={year} />
            ))}
          </Tabs>
        )}
      </div>

      <div className="syllabus-content">
        {renderTable("UG")}
        {renderTable("PG")}
      </div>
    </div>
  );
};

export default Syllabus;
