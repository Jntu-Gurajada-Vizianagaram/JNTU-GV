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
import { useState } from "react";
import "./Syllabus.css";

const data = {
  year: { 
        R25:{
         
      PG: [
        {
          sno: 1,
          branch: "MASTER OF BUSINESS ADMINISTRATION ",
          pdfLink:
           "https://api.jntugv.edu.in/media/JNTUGV%20R25-MBA%20Syllabus.pdf"
        },
      ]
 },
    R23: {
      UG: [
        {
          sno: 1,
          branch: "Civil Engineering",
          pdfLink:
            "https://api.jntugv.edu.in/media/B.Tech-R23-CIVIL%20Engineering%20syllabus%2030-7-2024.pdf",
        },

        {
          sno: 2,
          branch: "Electronics and Communication Engineering",
          pdfLink:
        "https://api.jntugv.edu.in/media/B.Tech-JNTUGV-R23-ECE%20Course%20Structure%20and%20Syllabus.pdf",
        },
        
        {
          sno: 3,
          branch: "Electrical and Electronic Engineering",
          pdfLink:
            "https://api.jntugv.edu.in/media/EEE-R23-JNTU-GV%20-B.Tech-Course%20Structure%20and%20Syllabus.pdf",
        },

        {
          sno: 4,
          branch: "Mechanical Engineering",
          pdfLink:
            "https://api.jntugv.edu.in/media/B.Tech-R23-Mechanical%20Engineering%20Course%20Structure%20and%20Syllabus.pdf",
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
            "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE(DS)%20Syllabus.pdf",
        },

        {
          sno:8,
          branch: "Computer Science and Engineering (AI&DS)",
          pdfLink:
          "https://api.jntugv.edu.in/media/JNTUGV-UG-B.Tech.-AI&DS-_R23_Regulations.pdf",
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
            "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE(CS)%20Syllabus.pdf",
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
            "https://api.jntugv.edu.in/media/JNTUGV-R23%20CSE%20Syllabus.pdf",
        },

        {
          sno: 12,
          branch: "Information Technology",
          pdfLink:
            "https://api.jntugv.edu.in/media/JNTUGV-R23%20IT%20Syllabus.pdf",
        },

        {
          sno: 13,
          branch: "Artificial Intelligence",
          pdfLink:
            "https://api.jntugv.edu.in/media/14.ARTIFICIAL%20INTELLIGENCE%20-R23%20Course%20Strcture%20&%20Syallabus.pdf",
        },

        {
          sno:14,
          branch:"Computer Science and Engineering (Artificial Intelligrnce)",
          pdfLink:
            "https://api.jntugv.edu.in/media/14.ARTIFICIAL%20INTELLIGENCE%20-R23%20Course%20Strcture%20&%20Syallabus.pdf"
        },

        {
          sno: 15,
          branch: "Automobile Engineering",
          pdfLink:
            "https://api.jntugv.edu.in/media/Automobile%20Engg..-R23-JNTU-GV%20B.Tech-Course%20Structure%20and%20Syllabus.pdf",
        },
        
      ],
    },

    R24:{
      UG: [
        {
          sno: 1,
          branch: "JNTU-GV-BBA & BBA(Honors) Full Syllabus",
          pdfLink: "https://api.jntugv.edu.in/media/JNTU-GV BBA  & BBA (Honors) full syllabus.pdf",
        }
      ],
      PG: [
        {
          sno: 1,
          branch: "MASTER OF BUSINESS ADMINISTRATION ",
          pdfLink:
            "https://api.jntugv.edu.in/media/R24%20MBA%20Syllabus.pdf",
        },
      ]

    },
    R13:{
      UG: [
        {
          sno: 1,
          branch: 'Aeronautical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Aeronautical%20Engineering-R13.pdf"
        },
        {
          sno: 2,
          branch: 'Civil Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Civil-R13.pdf"
        },
        {
          sno: 3,
          branch: 'Computer Science and Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/CSE-R13.pdf"
        },
        {
          sno: 4,
          branch: 'Electrical and Electronics Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/EEE-R13.pdf"
        },
        {
          sno: 5,
          branch: 'Electronics and Communication Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/ECE-R13.pdf"
        },
        {
          sno: 6,
          branch: 'Information Technology',
          pdfLink: "https://api.jntugv.edu.in/media/IT-R13.pdf"
        },
        {
          sno: 7,
          branch: 'Mechanical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Mechanical%20Engineering-R13.pdf"
        },
        {
          sno: 8,
          branch: 'Mining Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/MINING%20ENGG-R13.pdf"
        },
        {
          sno: 9,
          branch: 'Petrochemical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/PETROCHEMICAL%20ENGINEERING-R13.pdf"
        },
        {
          sno: 10,
          branch: 'Chemical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Chemical%20Engineering-R13.pdf"
        },
        {
          sno: 11,
          branch: 'Metallurgical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Metllurgical-R13.pdf"
        },
        {
          sno: 12,
          branch: 'Biotechnology',
          pdfLink: "https://api.jntugv.edu.in/media/Biotechnology-R13.pdf"
        },
        {
          sno: 13,
          branch: 'Petroleum Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Petroleum%20Engineering%20-%20R13.pdf"
        },
        {
          sno: 14,
          branch: 'Electronics and Instrumentation Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/EIE-R13.pdf"
        },
        {
          sno: 15,
          branch: 'Electronics and Computer Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/ELECTRONICS%20AND%20COMPUTER%20ENGINEERING-R13.pdf"
        },
        {
          sno: 16,
          branch: 'Automobile Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/AUTOMOBILE%20ENGG-R13.pdf"
        },
        {
          sno: 17,
          branch: 'Agricultural Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Agricultural%20Engineering-R13.pdf"
        },
        {
          sno: 18,
          branch: 'B.Pharmacy',
          pdfLink: "https://api.jntugv.edu.in/media/B.Pharmacy-R13.pdf"
        }

      ]
    },
    R16: {
      UG: [
        {
          sno: 1,
          branch: 'Aeronautical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Aeronautical%20Engineering.pdf"
        },
        {
          sno: 2,
          branch: 'Civil Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Civil%20Engineering.pdf"
        },
        {
          sno: 3,
          branch: 'Computer Science and Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/CSE%20R16.pdf"
        },
        {
          sno: 4,
          branch: 'Electrical and Electronics Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/EEE.pdf"
        },
        {
          sno: 5,
          branch: 'Electronics and Communication Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/ECE.pdf"
        },
        {
          sno: 6,
          branch: 'Information Technology',
          pdfLink: "https://api.jntugv.edu.in/media/IT.pdf"
        },
        {
          sno: 7,
          branch: 'Mechanical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Mechanical%20Engineering%20R16.pdf"
        },
        {
          sno: 8,
          branch: 'Mining Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Mining%20Engieering%2019082016.pdf"
        },
        {
          sno: 9,
          branch: 'Petrochemical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Ptrochemical%20Engineering.pdf"
        },
        {
          sno: 10,
          branch: 'Chemical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Chemical%20Engineering.pdf"
        },
        {
          sno: 11,
          branch: 'Metallurgical Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Metallurgical%20Engineering.pdf"
        },
        {
          sno: 12,
          branch: 'Biotechnology',
          pdfLink: "https://api.jntugv.edu.in/media/Biotechnology.pdf"
        },
        {
          sno: 13,
          branch: 'Petroleum Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Petroleum%20Engineering.pdf"
        },
        {
          sno: 14,
          branch: 'Electronics and Instrumentation Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/EIE.pdf"
        },
        {
          sno: 15,
          branch: 'Automobile Engineering',
          pdfLink: "https://api.jntugv.edu.in/media/Automobile%20Engineering.pdf"
        },
        {
          sno: 16,
          branch: 'B.Pharmacy',
          pdfLink: "https://api.jntugv.edu.in/media/B.Pharmacy.pdf"
        }
      ]
    }
  }
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
