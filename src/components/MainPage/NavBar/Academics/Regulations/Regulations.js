import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Regulations.css";

const data = {
  UG: [
    {
      Title: "R23 Regulation for B. Tech",
      pdfLink: "https://drive.google.com/file/d/1lOTQWSiua52MgwaVkMa2BfWszRCzHabb/view?usp=sharing",
    },
    {
      Title: "R24 Regulation for BBA",
      pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-BBA.-%20R24%20Regulations%20.pdf",
    },
  ],
  PG: [
    {
      Title: "R24 Regulation for MBA",
      pdfLink: "https://api.jntugv.edu.in/media/R24%20MBA%20Regulations.pdf",
    },
    {
      Title: "R25 Regulation for MBA",
      pdfLink: "https://api.jntugv.edu.in/media/JNTUGV%20R25-MBA%20Syllabus.pdf",
    },
  ],
  "Ph.D": [
    {
      Title: "JNTU-GV-2022 Admitted PhD Scholars",
      pdfLink: "https://drive.google.com/file/d/100EBmm37-4PWZdkPMQnS8K-0g19X1JhD/view?usp=sharing",
    },
  ],
};

const Regulations = () => {
  const academicYears = Object.keys(data);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="regulations">
      <div className="regulations-header">
        <div className="title-section">
          <h2 className="regulations-title">Academic Regulations</h2>
          <p className="subtitle">Rules and guidelines governing academic progression and conduct</p>
        </div>
        <div className="search-section">
          <TextField
            fullWidth
            placeholder="Search regulations..."
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

      <div className="regulations-content">
        {academicYears.map((year) => {
          const filteredData = data[year].filter((row) =>
            row.Title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredData.length === 0 && searchQuery !== "") return null;

          return (
            <Accordion elevation={0} defaultExpanded className="premium-accordion" key={year} sx={{ mb: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                sx={{ background: "#370A68", color: "white", borderRadius: "8px 8px 0 0" }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>{year} Regulations</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: "0 0 8px 8px" }}>
                  <Table stickyHeader aria-label={`${year} regulations table`}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white", width: "80px" }}>S.No</TableCell>
                        <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Regulation Title</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Document Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.map((row, index) => (
                        <TableRow key={index + 1} hover sx={{ "&:nth-child(even)": { backgroundColor: "#f9f9f9" } }}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell sx={{ fontWeight: 500, color: "#333" }}>{row.Title}</TableCell>
                          <TableCell align="center">
                            <a href={row.pdfLink} target="_blank" rel="noopener noreferrer" className="regulations-download-btn">
                              View Regulation
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Regulations;
