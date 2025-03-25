import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Syllabus.css";

const data = {
  year: {
    R23: {
      UG: [
        {
          sno: 1,
          branch: "Civil Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1QDjfTrwjHj15UGaDTUqzYIpcrt8C18xt/view?usp=sharing",
        },

        {
          sno: 2,
          branch: "Electronics and Communication Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1YJdaXP-4ywSob7Q3GpBKRlOXeleNi4ny/view?usp=sharing",
        },
        
        {
          sno: 3,
          branch: "Electrical and Electronic Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1_rRYo1S76dmS11CYI1vA_w3FyWh6iEq7/view?usp=drive_link",
        },

        {
          sno: 4,
          branch: "Mechanical Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1L6q2UbCFpt_52UAUT2i2EbPddS6cuaeH/view?usp=drive_link",
        },

        // {
        //   sno: 5,
        //   branch: "Computer Science and Engineering (Internet of Things)",
        //   pdfLink:
        //     "https://drive.google.com/file/d/1JDY5M4GK_NUb8MKIWi07BJuonQwKXFr4/view?usp=drive_link",
        // },

        {
          sno: 5,
          branch: "Artificial Intelligence & Machine Learning",
          pdfLink:
            "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&ML-_R23_Regulations.pdf",
        },

        {
          sno: 6,
          branch: "Artificial Intelligence & Data Science",
          pdfLink:
            "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&DS-_R23_Regulations.pdf",
        },

        {
          sno: 7,
          branch: "Computer Science and Engineering (Data Science)",
          pdfLink:
            "https://drive.google.com/file/d/1OjbXp6GrzQ0Rk8AZMV0Xji-_XqBPExd4/view?usp=sharing",
        },

        {
          sno:8,
          branch: "Computer Science and Engineering (AI&DS)",
          pdfLink:
          "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&DS-_R23_Regulations.pd"
        },

        // {
        //   sno: 9,
        //   branch: "Computer Science and Engineering (IOT and Cyber security including BCT)",
        //   pdfLink:
        //     "https://drive.google.com/file/d/1gsdaPVZ0iPD8vBHAvNk4YE6f6RuQo8Tr/view?usp=drive_link",
        // },

        {
          sno: 9,
          branch: "Computer Science and Engineering (Cyber security)",
          pdfLink:
            "https://drive.google.com/file/d/1rInHyz4Y0Jv34NIqgQTiml-nDPLzxx6S/view?usp=drive_link",
        },

        {
          sno: 10,
          branch: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
          pdfLink:
            "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-CSE(AI&ML)-_R23_Regulations.pdf",
        },

        {
          sno: 11,
          branch: "Computer Science and Engineering",
          pdfLink:
            "https://drive.google.com/file/d/1ZE-YD-by4-nM5JaD5fA-c_YBzbW6bCbd/view?usp=drive_link",
        },

        {
          sno: 12,
          branch: "Information Technology",
          pdfLink:
            "https://drive.google.com/file/d/1HeLmB5gohd1Zohz4HVjWBnH2DKIkfb_v/view?usp=drive_link",
        },

        {
          sno: 13,
          branch: "Artificial Intelligence",
          pdfLink:
            "https://drive.google.com/file/d/1tTQi0bppS1EL_y9IB44Dg3KTpABtxqpO/view?usp=sharing",
        },

        {
          sno:14,
          branch:"Computer Science and Engineering (Artificial Intelligrnce)",
          pdfLink:
            "https://drive.google.com/file/d/1tTQi0bppS1EL_y9IB44Dg3KTpABtxqpO/view?usp=sharing"
        },

        {
          sno: 15,
          branch: "Automobile Engineering",
          pdfLink:
            "https://drive.google.com/file/d/12m_-2ACbpDfOpNhJzxbrP9roPdTuO7Dv/view?usp=sharing",
        },
        
      ],
    },

    R24:{
      PG: [
        {
          sno: 1,
          branch: "MASTER OF BUSINESS ADMINISTRATION ",
          pdfLink:
            "https://api.jntugv.edu.in/media/R24%20MBA%20Syllabus.pdf",
        },
      ]

    }
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
