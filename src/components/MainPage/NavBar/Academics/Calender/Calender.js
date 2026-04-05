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
import { useEffect, useState } from "react";
import "./Calender.css";

const staticData = {
  "2024-2025": [
    { Title: "Academic calendar for B. Tech I Year", pdfLink: "https://drive.google.com/file/d/1Nx23wt4KmEGtbyP_1osLVXvN7XYeGmE9/view?usp=sharing" },
    { Title: "Academic calendar for B. Tech II Year", pdfLink: "https://drive.google.com/file/d/152978TmWC9bFxScPgnl4trqUDqn-6m1-/view?usp=sharing" },
    { Title: "Academic Calendar for B.Tech III Year", pdfLink: "https://drive.google.com/file/d/1cuFoeZP_fX-jJQoonjHdvcOzrxD7dMir/view?usp=sharing" },
    { Title: "Academic Calendar for B.Tech IV-Year", pdfLink: "https://drive.google.com/file/d/1Pkbz4tBRuRi8WeJo3dpOly0XYX0g8DU8/view?usp=sharing" },
    { Title: "Academic Calendar for M.Tech II-Year", pdfLink: "https://drive.google.com/file/d/1k6AB3AkJ6SZOGb3g__LlpNAl9Fd9j7nt/view?usp=drive_link" },
    { Title: "Academic Calendar for MCA and MBA II-Year", pdfLink: "https://drive.google.com/file/d/1CWsA2ROiZv8vwO9Y2v49d3ARUtjOemo8/view?usp=drive_link" },
    { Title: "Academic Calendar for B.Pharmacy II Year", pdfLink: "https://drive.google.com/file/d/1nYJsXSxp0cJ1K1KvcR18DZKm5YsB5lIr/view?usp=sharing" },
    { Title: "Academic Calendar for B.Pharmacy III Year", pdfLink: "https://drive.google.com/file/d/1dper2t-KqHJxOEsj9rlENfS1j-yqPOCa/view?usp=sharing" },
    { Title: "Academic Calendar for B.Pharmacy IV Year", pdfLink: "https://drive.google.com/file/d/1krcUXGw7FoLzNy1Q0H6RWaTISO6msCTJ/view?usp=sharing" },
    { Title: "Academic Calendar for Pharm-D II Year", pdfLink: "https://drive.google.com/file/d/1mGisItZYPdVJJy6IiVNEioLpJwBwzOXJ/view?usp=sharing" },
    { Title: "Academic Calendar for Pharm-D III Year", pdfLink: "https://drive.google.com/file/d/1RzKC8HrA589vpgQqrFVc75aQEwFbEhph/view?usp=sharing" },
    { Title: "Academic Calendar for Pharm-D IV and V Year", pdfLink: "https://drive.google.com/file/d/1DbS9SfUlT2BLiWGpNgu24AFKBieSDtWy/view?usp=sharing" },
    { Title: "Academic Calendar for D.Pharmacy VI Year", pdfLink: "https://drive.google.com/file/d/1sGuHdQ2vF2siB_b4-4rScMfBNF4m_dP0/view?usp=sharing" },
    { Title: "Academic Calendar for M.Pharmacy II Year", pdfLink: "https://drive.google.com/file/d/1pa3GYKkgYyF-FgjAgGJ2x6mCoo4lAiur/view?usp=drive_link" },
  ],
  "2023-2024": [
    { Title: "Revised Academic Calendar for B. Tech I Year II Semester", pdfLink: "https://drive.google.com/file/d/1-8rE6GsyCJn5RBXjHFR-zqkwM0W68mQR/view?usp=sharing" },
    { Title: "Academic calendar for B. Tech II Year", pdfLink: "https://drive.google.com/file/d/1JH6aBA9krVrS6p_BdFvwxb5VQMrhbwCG/view?usp=sharing" },
    { Title: "Academic Calendar for B.Tech III Year", pdfLink: "https://drive.google.com/file/d/11Nwbcs3AkaNJfvle4kiNIiu1iDPgf3Xn/view?usp=drive_link" },
    { Title: "Academic Calendar for B.Tech IV-Year", pdfLink: "https://drive.google.com/file/d/1eekBCszWGkxrJFDxNgDpabta75U2UpUy/view" },
    { Title: "Academic Calendar M.Tech I Year", pdfLink: "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view" },
    { Title: "Academic Calendar M.Tech II Year", pdfLink: "https://drive.google.com/file/d/1ypR3BKVi_u8GTR2ejQKf6fOGFcNKpEuK/view?usp=sharing" },
    { Title: "Academic Calendar for B.Pharmacy I Year", pdfLink: "https://drive.google.com/file/d/19Zkp0k64ouvlYw2awLs7IY408OqsZcbA/view" },
    { Title: "Academic Calendar for B.Pharmacy II Year", pdfLink: "https://drive.google.com/file/d/1IrawmiHcz5rP2le0Q5pXrNyt75psQnzH/view" },
    { Title: "Academic Calendar for B.Pharmacy III II Year", pdfLink: "https://drive.google.com/file/d/1UtDQJuz5axHnN-Qqv_CdW-Y2YFGFJOQY/view?usp=sharing" },
    { Title: "Academic Calendar for B.Pharmacy IV Year", pdfLink: "https://drive.google.com/file/d/1ypR3BKVi_u8GTR2ejQKf6fOGFcNKpEuK/view?usp=sharing" },
    { Title: "Academic Calendar for M-Pharmacy II Year", pdfLink: "https://drive.google.com/file/d/1r7zi9878ZJziKAhA7_yLPLym33xngZZ6/view?usp=drive_link" },
    { Title: "Academic Calendar for M-Pharmacy I Year", pdfLink: "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view" },
    { Title: "Academic Calendar for M-Tech & M-Pharmacy", pdfLink: "https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view" },
    { Title: "Academic Calendar for Pharm-D I Year", pdfLink: "https://drive.google.com/file/d/1WP--NiUYNNfPR1nJrqGR5bOEQsP84s7b/view" },
    { Title: "Academic Calendar for Pharm-D II Year", pdfLink: "https://drive.google.com/file/d/1C98jPJyDk3AY9ZgcZ0l2YCfmxzBIq9y5/view" },
    { Title: "Academic Calendar for Pharm-D III Year", pdfLink: "https://drive.google.com/file/d/1KTU0LGyTzSQN6SwKRTiUoCC8HYkxP56H/view" },
    { Title: "Academic Calendar for MBA & MCA", pdfLink: "https://drive.google.com/file/d/12h7w_EuGdnR3gqAEyM68HcLmUIx26qaI/view" },
  ],
};

const Calender = () => {
  const [data, setData] = useState(staticData);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedYear, setExpandedYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/updates/allnotifications");
        const result = await response.json();
        const filteredData = result.filter((item) => item.update_type === "calendar");
        const newData = { ...staticData };

        filteredData.forEach((item) => {
          const academicYear = item.year + "-" + (item.year + 1);
          if (!newData[academicYear]) newData[academicYear] = [];
          
          // Prevent duplicates if static data already contains it
          if (!newData[academicYear].some(existing => existing.Title === item.title)) {
             newData[academicYear].push({
               Title: item.title,
               pdfLink: item.file_link,
             });
          }
        });

        setData(newData);
        setExpandedYear(Object.keys(newData).sort().reverse()[0]); // Auto-expand latest
      } catch (error) {
        console.error("Error fetching data:", error);
        setExpandedYear("2024-2025");
      }
    };
    fetchData();
  }, []);

  const academicYears = Object.keys(data).sort((a, b) => {
    const [yearA] = a.split("-");
    const [yearB] = b.split("-");
    return parseInt(yearB) - parseInt(yearA);
  });

  const handleAccordionChange = (year) => (event, isExpanded) => {
    setExpandedYear(isExpanded ? year : null);
  };

  return (
    <div className="Calender">
      <div className="calender-header">
        <div className="title-section">
          <h2 className="calender-title">Academic Calendar</h2>
          <p className="subtitle">Schedules and timelines for all academic programs</p>
        </div>
        <div className="search-section">
          <TextField
            fullWidth
            placeholder="Search calendars..."
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

      <div className="calender-content">
        {academicYears.map((year) => {
          const filteredData = data[year].filter((row) =>
            row.Title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredData.length === 0 && searchQuery !== "") return null;

          return (
            <Accordion
              elevation={0}
              expanded={expandedYear === year}
              onChange={handleAccordionChange(year)}
              className="premium-accordion"
              key={year}
              sx={{ mb: 3 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                sx={{
                  background: "#370A68",
                  color: "white",
                  borderRadius: expandedYear === year ? "8px 8px 0 0" : "8px",
                  transition: "all 0.3s ease"
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {year} Academic Session
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: "0 0 8px 8px" }}>
                  <Table stickyHeader aria-label={`${year} calendar table`}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white", width: "80px" }}>S.No</TableCell>
                        <TableCell sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Description</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bold", background: "#370A68", color: "white" }}>Document Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.map((row, index) => (
                        <TableRow key={index + 1} hover sx={{ "&:nth-child(even)": { backgroundColor: "#f9f9f9" } }}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell sx={{ fontWeight: 500, color: "#333" }}>{row.Title}</TableCell>
                          <TableCell align="center">
                            <a href={row.pdfLink} target="_blank" rel="noopener noreferrer" className="calendar-download-btn">
                              View Calendar
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

export default Calender;
