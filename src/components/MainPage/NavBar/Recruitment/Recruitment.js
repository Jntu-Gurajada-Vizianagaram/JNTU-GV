import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

// const staticRecruitment = {
//   id: "static-0",
//   date: "2026-05-15",
//   title: "JNTU-GV Annoucement: Recruitment Notification 2026 for Professor, Associate Professor, Assistant Professor positions were released. Click here to view details.",
//   external_link: "https://jntugv.edu.in/recruitment-notification-2026/",
//   update_type: "recruitment",
//   day: 15,
//   month: "May",
//   year: 2026,
//   isStatic: true,
// };

function Recruitment() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const isExpired = (note) => {
    if (!note.day || !note.month || !note.year) return false;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = monthNames.findIndex(m => m.toLowerCase().startsWith(note.month.toLowerCase().substring(0, 3)));

    if (monthIndex === -1) return false;

    // Create published date
    const publishedDate = new Date(note.year, monthIndex, note.day);

    // Create expiry date (2 months after published date)
    const expiryDate = new Date(publishedDate);
    expiryDate.setMonth(expiryDate.getMonth() + 2);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today > expiryDate;
  };

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const response = await fetch("https://api.jntugv.edu.in/api/updates/allnotifications");
        const data = await response.json();

        const filtered = data.filter(n =>
          (n.update_type === "recruitment" || n.update_type === "recruitments") && !isExpired(n)
        );

        const processed = filtered.map(n => ({
          ...n,
          status: "Active",
          displayDate: `${n.day || ''} ${n.month || ''} ${n.year || ''}`.trim() || n.date
        }));

        const sorted = [...processed].sort((a, b) => {
          if (a.status === b.status) {
            const dateA = new Date(`${a.month} ${a.day}, ${a.year}`);
            const dateB = new Date(`${b.month} ${b.day}, ${b.year}`);
            return dateB - dateA;
          }
          return a.status === "Active" ? -1 : 1;
        });

        setNotifications([
          ...sorted
        ]);
      } catch (error) {
        console.error("Error fetching recruitments:", error);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruitments();
  }, []);

  return (
    <div className="recruitment-container-simple">
      <div className="recruitment-header-simple">
        <Typography variant="h4" component="h1" gutterBottom>
          Faculty Recruitment Notifications - 2026
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Check the latest job opportunities and recruitment updates from JNTU-GV.
        </Typography>
      </div>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={1} className="recruitment-table-simple">
          <Table aria-label="recruitment table">
            <TableHead>
              <TableRow>
                <TableCell>Notification</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notifications.map((row, index) => (
                <TableRow key={row.id || index}>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: row.isStatic ? 'bold' : 'normal' }}>
                      {row.title}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{row.displayDate}</TableCell>
                  <TableCell align="center">
                    <span className={`badge-simple ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      href={row.file_link || row.external_link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={row.status === "Closed"}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div className="recruitment-footer-info">
        <Typography variant="h6" gutterBottom>Contact for Queries</Typography>
        <Typography variant="body2">Email: jntugvrecruitment@jntugv.edu.in</Typography>
        <Typography variant="body2">Phone: +91-7780351078</Typography>
        <Typography variant="body2">Address: JNTU-GV, Vizianagaram</Typography>

      </div>
    </div>
  );
}

export default Recruitment;
