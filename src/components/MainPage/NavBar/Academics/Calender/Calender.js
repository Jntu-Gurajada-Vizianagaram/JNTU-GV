import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./Calender.css";

const staticData = {
  "2024-2025": [
    {
      Title: "Academic calendar for B. Tech I Year",
      pdfLink: "https://drive.google.com/file/d/1Nx23wt4KmEGtbyP_1osLVXvN7XYeGmE9/view?usp=sharing"
    },
    {
      Title: "Academic calendar for B. Tech II Year",
      pdfLink: "https://drive.google.com/file/d/152978TmWC9bFxScPgnl4trqUDqn-6m1-/view?usp=sharing"
    },
    {
      Title: "Academic Calendar for B.Tech III Year",
      pdfLink:
        "https://drive.google.com/file/d/1cuFoeZP_fX-jJQoonjHdvcOzrxD7dMir/view?usp=sharing",
    }, 
    {
      Title: "Academic Calendar for B.Tech IV-Year",
      pdfLink:
        "https://drive.google.com/file/d/1Pkbz4tBRuRi8WeJo3dpOly0XYX0g8DU8/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for M.Tech II-Year",
      pdfLink:
        "https://drive.google.com/file/d/1k6AB3AkJ6SZOGb3g__LlpNAl9Fd9j7nt/view?usp=drive_link",
    },
    {
      Title: "Academic Calendar for MCA and MBA II-Year",
      pdfLink:
        "https://drive.google.com/file/d/1CWsA2ROiZv8vwO9Y2v49d3ARUtjOemo8/view?usp=drive_link",
    },
    {
      Title: "Academic Calendar for B.Pharmacy II Year",
      pdfLink:
        "https://drive.google.com/file/d/1nYJsXSxp0cJ1K1KvcR18DZKm5YsB5lIr/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for B.Pharmacy III Year",
      pdfLink:
        "https://drive.google.com/file/d/1dper2t-KqHJxOEsj9rlENfS1j-yqPOCa/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for B.Pharmacy IV Year",
      pdfLink:
        "https://drive.google.com/file/d/1krcUXGw7FoLzNy1Q0H6RWaTISO6msCTJ/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for Pharm-D II Year",
      pdfLink:
        "https://drive.google.com/file/d/1mGisItZYPdVJJy6IiVNEioLpJwBwzOXJ/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for Pharm-D III Year",
      pdfLink:
        "https://drive.google.com/file/d/1RzKC8HrA589vpgQqrFVc75aQEwFbEhph/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for Pharm-D IV and V Year",
      pdfLink:
        "https://drive.google.com/file/d/1DbS9SfUlT2BLiWGpNgu24AFKBieSDtWy/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for D.Pharmacy VI Year",
      pdfLink:
        "https://drive.google.com/file/d/1sGuHdQ2vF2siB_b4-4rScMfBNF4m_dP0/view?usp=sharing",
    },
    {
      Title: "Academic Calendar for M.Pharmacy II Year",
      pdfLink:
        "https://drive.google.com/file/d/1pa3GYKkgYyF-FgjAgGJ2x6mCoo4lAiur/view?usp=drive_link",
    }
  ],
  "2023-2024": [
    {
      Title: "Revised Academic Calendar for B. Tech I Year II Semester",
      pdfLink:
        "https://drive.google.com/file/d/1-8rE6GsyCJn5RBXjHFR-zqkwM0W68mQR/view?usp=sharing",
    },
    {
      Title: "Academic calendar for B. Tech II Year",
      pdfLink: "https://drive.google.com/file/d/1JH6aBA9krVrS6p_BdFvwxb5VQMrhbwCG/view?usp=sharing"
    },
    {
      Title: "Academic Calendar for B.Tech III Year",
      pdfLink:
        "https://drive.google.com/file/d/11Nwbcs3AkaNJfvle4kiNIiu1iDPgf3Xn/view?usp=drive_link",
    }, 
    {
      Title: "Academic Calendar for B.Tech IV-Year",
      pdfLink:
        "https://drive.google.com/file/d/1eekBCszWGkxrJFDxNgDpabta75U2UpUy/view",
    },
    {
      Title: "Academic Calendar M.Tech I Year",
      pdfLink:
        "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view",
    }, 
    {
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
  const [data, setData] = useState(staticData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/updates/allnotifications");
        const result = await response.json();

        const filteredData = result.filter(item => item.update_type === "calendar");

        const newData = { ...staticData };

        filteredData.forEach(item => {
          const academicYear = item.year + '-' + (item.year + 1);
          if (!newData[academicYear]) {
            newData[academicYear] = [];
          }
          newData[academicYear].push({
            Title: item.title,
            pdfLink: item.file_link,
          });
        });

        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sort academic years in descending order (most recent first)
  const academicYears = Object.keys(data).sort((a, b) => {
    const [yearA] = a.split('-');
    const [yearB] = b.split('-');
    return parseInt(yearB) - parseInt(yearA);
  });

  const [expandedYear, setExpandedYear] = useState(null);

  const handleAccordionChange = (year) => (event, isExpanded) => {
    setExpandedYear(isExpanded ? year : null);
  };

  return (
    <div className="Calender">
      <div className="calender-title">Academic Calendar</div>
      {academicYears.map((year) => (
        <Accordion 
          elevation={20} 
          expanded={expandedYear === year}
          onChange={handleAccordionChange(year)}
          className="accordion-affiliated" 
          key={year}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`panel-${year}-content`}
            id={`panel-${year}-header`}
            sx={{ 
              background: "#370A68", 
              color: "white",
              '&:hover': {
                background: "#4a0d8a"
              }
            }}
          >
            <Typography sx={{ width: "50%", flexShrink: 0, fontWeight: 500 }}>
              {year} Academic Calendar
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "16px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: "#3F6DD13D", fontWeight: 600 }}>S.no</TableCell>
                  <TableCell sx={{ background: "#3F6DD13D", fontWeight: 600 }}>Title</TableCell>
                  <TableCell sx={{ background: "#3F6DD13D", fontWeight: 600 }}>Calendar Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data[year].map((row, index) => (
                  <TableRow 
                    key={index + 1}
                    sx={{ 
                      '&:hover': { 
                        background: "#f5f5f5" 
                      }
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>
                      <a 
                        href={row.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          color: "#370A68",
                          textDecoration: "none",
                          fontWeight: 500,
                          '&:hover': {
                            textDecoration: "underline"
                          }
                        }}
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
      ))}
    </div>
  );
};

export default Calender;
