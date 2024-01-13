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
import "./Calender.css";

// Sample data
const data = [
  {
    sno: 1,
    Title: "Academic Calendar for B.Tech IV-Year",
    pdfLink:
      "https://drive.google.com/file/d/1eekBCszWGkxrJFDxNgDpabta75U2UpUy/view",
  },
  {
    sno: 2,
    Title: "Academic Calendar for B.Tech III Year II-Semester ",
    pdfLink:
      "https://drive.google.com/file/d/11OXj7YlOOWJC61BwbhOVX2YkvqY4L_5v/view",
  },

  {
    sno: 3,
    Title: "Academic Calendar-M.Tech-l-Year",
    pdfLink:
      "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
  },

  {
    sno: 4,
    Title: "Academic Calendar for B.Pharmacy I Year",
    pdfLink:
      "https://drive.google.com/file/d/19Zkp0k64ouvlYw2awLs7IY408OqsZcbA/view",
  },
  {
    sno: 5,
    Title: "Academic Calendar for B.Pharmacy II Year",
    pdfLink:
      "https://drive.google.com/file/d/1IrawmiHcz5rP2le0Q5pXrNyt75psQnzH/view",
  },

  {
    sno: 6,
    Title: "Academic Calendar for Pharm-D I Year",
    pdfLink:
      "https://drive.google.com/file/d/1WP--NiUYNNfPR1nJrqGR5bOEQsP84s7b/view",
  },
  {
    sno: 7,
    Title: "Academic Calendar for Pharm-D II Year",
    pdfLink:
      "https://drive.google.com/file/d/1C98jPJyDk3AY9ZgcZ0l2YCfmxzBIq9y5/view",
  },
  {
    sno: 8,
    Title: "Academic Calendar for Pharm-D III Year",
    pdfLink:
      "https://drive.google.com/file/d/1KTU0LGyTzSQN6SwKRTiUoCC8HYkxP56H/view",
  },

  {
    sno: 9,
    Title: "Academic Calendar for MBA & MCA",
    pdfLink:
      "https://drive.google.com/file/d/12h7w_EuGdnR3gqAEyM68HcLmUIx26qaI/view",
  },
  {
    sno: 10,
    Title: "Academic Calendar for M-Tech & M-Pharmacy",
    pdfLink:
      "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
  },
];

const Calender = () => {
  return (
    <div className="Calender">
      <div className="calender-title"> Academic Calender</div>
      <Accordion
        elevation={20}
        defaultExpanded
        className="accordion-affiliated"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ background: "#370A68", color: "white" }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            2023-2024 Academic Calender
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            {/* Table Head */}
            <TableHead sx={{ background: "#3F6DD13D" }}>
              <TableRow>
                <TableCell>S.no</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Calender Link</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.sno}>
                  <TableCell>{row.sno}</TableCell>
                  <TableCell>{row.Title}</TableCell>
                  <TableCell>
                    <a
                      href={row.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Calender;
