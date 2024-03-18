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

const data = [
  {
    Title: " Revised Academic Calendar for B. Tech I Year II Semester",
    pdfLink:
      "https://drive.google.com/file/d/1-8rE6GsyCJn5RBXjHFR-zqkwM0W68mQR/view?usp=sharing",
  },
  {
    Title: "Academic calendar for B. Tech II Year",
    pdfLink: "https://drive.google.com/file/d/1JH6aBA9krVrS6p_BdFvwxb5VQMrhbwCG/view?usp=sharing"
  },
  {
    Title: "Academic Calendar for B.Tech III Year ",
    pdfLink:
      "https://drive.google.com/file/d/11Nwbcs3AkaNJfvle4kiNIiu1iDPgf3Xn/view?usp=drive_link",
  }, {
    Title: "Academic Calendar for B.Tech IV-Year",
    pdfLink:
      "https://drive.google.com/file/d/1eekBCszWGkxrJFDxNgDpabta75U2UpUy/view",
  },
  {
    Title: "Academic Calendar M.Tech I Year",
    pdfLink:
      "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
  }, {
    Title: "Academic Calendar M.Tech II Year",
    pdfLink:
      "https://drive.google.com/file/d/1ypR3BKVi_u8GTR2ejQKf6fOGFcNKpEuK/view?usp=sharing",
  },
  {
    Title: "Academic Calendar for B.Pharmacy I Year",
    pdfLink:
      "https://drive.google.com/file/d/19Zkp0k64ouvlYw2awLs7IY408OqsZcbA/view",
  },
  {
    Title: "Academic Calendar for B.Pharmacy II Year",
    pdfLink:
      "https://drive.google.com/file/d/1IrawmiHcz5rP2le0Q5pXrNyt75psQnzH/view",
  },
  {
    Title: "Academic Calendar for B.Pharmacy III II Year",
    pdfLink:
      "https://drive.google.com/file/d/1UtDQJuz5axHnN-Qqv_CdW-Y2YFGFJOQY/view?usp=sharing",
  },
  {
    Title: "Academic Calendar for B.Pharmacy IV Year",
    pdfLink:
      "https://drive.google.com/file/d/1ypR3BKVi_u8GTR2ejQKf6fOGFcNKpEuK/view?usp=sharing",
  },
  {
    Title: "Academic Calendar for M-Pharmacy II Year",
    pdfLink:
      "https://drive.google.com/file/d/1r7zi9878ZJziKAhA7_yLPLym33xngZZ6/view?usp=drive_link",
  },
  {
    Title: "Academic Calendar for M-Pharmacy I Year",
    pdfLink:
      "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
  },
  {
    Title: "Academic Calendar for M-Tech & M-Pharmacy",
    pdfLink:
      "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
  },
  {
    Title: "Academic Calendar for Pharm-D I Year",
    pdfLink:
      "https://drive.google.com/file/d/1WP--NiUYNNfPR1nJrqGR5bOEQsP84s7b/view",
  },
  {
    Title: "Academic Calendar for Pharm-D II Year",
    pdfLink:
      "https://drive.google.com/file/d/1C98jPJyDk3AY9ZgcZ0l2YCfmxzBIq9y5/view",
  },
  {
    Title: "Academic Calendar for Pharm-D III Year",
    pdfLink:
      "https://drive.google.com/file/d/1KTU0LGyTzSQN6SwKRTiUoCC8HYkxP56H/view",
  },
  {
    Title: "Academic Calendar for MBA & MCA",
    pdfLink:
      "https://drive.google.com/file/d/12h7w_EuGdnR3gqAEyM68HcLmUIx26qaI/view",
  },
  
];

const Calender = () => {
  return (
    <div className="Calender">
      <div className="calender-title"> Academic Calendar</div>
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
            2023-2024 Academic Calendar
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
              {data.map((row, index) => (
                <TableRow key={index + 1}>
                  <TableCell>{index + 1}</TableCell>
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
