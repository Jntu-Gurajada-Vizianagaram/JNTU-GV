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

const data = {
  "2024-2025": [
    {
      Title: "Academic calendar for B. Tech II Year",
      pdfLink: "https://drive.google.com/file/d/152978TmWC9bFxScPgnl4trqUDqn-6m1-/view?usp=sharing"
    },
    {
      Title: "Academic Calendar for B.Tech III Year ",
      pdfLink:
        "https://drive.google.com/file/d/1cuFoeZP_fX-jJQoonjHdvcOzrxD7dMir/view?usp=sharing",
    }, 
    {
      Title: "Academic Calendar for B.Tech IV-Year",
      pdfLink:
        "https://drive.google.com/file/d/1Pkbz4tBRuRi8WeJo3dpOly0XYX0g8DU8/view?usp=sharing",
    },
   
    {
      Title: "Academic Calendar for Pharm-D IV and V Year",
      pdfLink:
        "https://drive.google.com/file/d/1DbS9SfUlT2BLiWGpNgu24AFKBieSDtWy/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for B.Pharmacy IV Year",
      pdfLink:
        "https://drive.google.com/file/d/1krcUXGw7FoLzNy1Q0H6RWaTISO6msCTJ/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for D.Pharmacy VI Year",
      pdfLink:
        "https://drive.google.com/file/d/1sGuHdQ2vF2siB_b4-4rScMfBNF4m_dP0/view?usp=sharing",
    }
    ],

  "2023-2024": [
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
  ]
};

const Calender = () => {
  const academicYears = Object.keys(data); // Get the academic years from the data object

  return (
    <div className="Calender">
      <div className="calender-title">Academic Calendar</div>
      {academicYears.map((year) => (
        <Accordion elevation={20} defaultExpanded className="accordion-affiliated" key={year}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`panel-${year}-content`}
            id={`panel-${year}-header`}
            sx={{ background: "#370A68", color: "white" }}
          >
            <Typography sx={{ width: "50%", flexShrink: 0 }}>
              {year} Academic Calendar
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead sx={{ background: "#3F6DD13D" }}>
                <TableRow>
                  <TableCell>S.no</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Calendar Link</TableCell>
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

export default Calender;