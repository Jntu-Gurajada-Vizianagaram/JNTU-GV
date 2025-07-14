import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Regulations.css";

const data = {
  "UG": [
    {
      Title: "R23 Regulation for B. Tech",
      pdfLink: "https://drive.google.com/file/d/1lOTQWSiua52MgwaVkMa2BfWszRCzHabb/view?usp=sharing"
    },
    {
      Title: "R24 Regulation for BBA",
      pdfLink: "https://api.jntugv.edu.in/media/JNTUGV-UG-BBA.-%20R24%20Regulations%20.pdf"
    }
    ],
    "PG": [
    {
      Title: "R24 Regulation for MBA",
      pdfLink: "https://api.jntugv.edu.in/media/R24%20MBA%20Regulations.pdf"
    },
      {
       Title: "R25 Regulation for MBA" ,
       pdfLink: "https://api.jntugv.edu.in/media/JNTUGV%20R25-MBA%20Syllabus.pdf"
    ],

    "Ph.D": [
    {
      Title: "JNTU-GV-2022 Admitted PhD Scholars",
      pdfLink: "https://drive.google.com/file/d/100EBmm37-4PWZdkPMQnS8K-0g19X1JhD/view?usp=sharing"
    },
    ],

};

const Regulations = () => {
  const academicYears = Object.keys(data); // Get the academic years from the data object

  return (
    <div className="regulations">
      <div className="regulations-title">Academic Regulations </div>
      {academicYears.map((year) => (
        <Accordion elevation={20} defaultExpanded className="accordion-affiliated" key={year}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`panel-${year}-content`}
            id={`panel-${year}-header`}
            sx={{ background: "#370A68", color: "white" }}
          >
            <Typography sx={{ width: "50%", flexShrink: 0 }}>
              {year}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead sx={{ background: "#3F6DD13D" }}>
                <TableRow>
                  <TableCell>S.no</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Regulation Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data[year].map((row, index) => (
                  <TableRow key={index + 1}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>
                      <a href={row.pdfLink} target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Regulations;
