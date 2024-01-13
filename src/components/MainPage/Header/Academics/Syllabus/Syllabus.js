import React, { useState } from "react";
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
  Tabs,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Syllabus.css";

const data = {
  year: {
    R23: {
      UG: [
        {
          sno: 1,
          branch: "Civil Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1hEGLoAX6trn7qoiMNSYvnR960HMJHT_G/view?usp=sharing",
        },
        {
          sno: 2,
          branch: "Mechanical Engineering and Automobile Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1rg6W0T7tVHAFhoDfcfZs499QA_hhCt9B/view?usp=sharing",
        },
        {
          sno: 3,
          branch: "Electrical and Electronic Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1Jgx9-JWH5DP5GIPtf8KOSdf7Iyvg6Tg5/view?usp=sharing",
        },
        {
          sno: 4,
          branch: "Electronics and Communication Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1vr1-14rHGB-LIhzDzSIlJgZBS0OL_tp5/view?usp=sharing",
        },
        {
          sno: 5,
          branch: "Computer Science and Engineering and Information Technology",
          pdfLink:
            "https://drive.google.com/file/d/1TKfA85Uwqj3VIaRHu5VnaacDLeT-TxlR/view?usp=sharing",
        },
      ],
    },
  },
};

const Syllabus = () => {
  const availableYears = Object.keys(data.year);
  const [selectedTab, setSelectedTab] = useState(availableYears[0] || ""); // Set the first available year as the default

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTable = (program) => {
    if (!data.year[selectedTab] || !data.year[selectedTab][program]) {
      return null;
    }

    return (
      <Accordion elevation={20} className="accordion-affiliated">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls={`panel1bh-content-${selectedTab}-${program}`}
          id={`panel1bh-header-${selectedTab}-${program}`}
          sx={{ background: "#370A68", color: "white" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {program}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead sx={{ background: "#3F6DD13D" }}>
              <TableRow>
                <TableCell>S.no</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Syllabus Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.year[selectedTab][program].map((row) => (
                <TableRow key={row.sno}>
                  <TableCell>{row.sno}</TableCell>
                  <TableCell>{row.branch}</TableCell>
                  <TableCell>
                    <a
                      href={row.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography variant="body2">View/Download</Typography>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className="syllabus">
      {/* <div className="syllabus-title">Academic Syllabus</div> */}

      {availableYears.length >= 1 && (
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          {availableYears.map((year) => (
            <Tab key={year} label={year} value={year} />
          ))}
        </Tabs>
      )}

      {renderTable("UG")}
      {renderTable("PG")}
    </div>
  );
};

export default Syllabus;
