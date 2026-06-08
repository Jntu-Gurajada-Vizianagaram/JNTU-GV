import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import {
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";

function Recruitment() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const isExpired = (note) => {
    if (!note.day || !note.month || !note.year) return false;

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthIndex = monthNames.findIndex((m) =>
      m.toLowerCase().startsWith(
        note.month.toLowerCase().substring(0, 3)
      )
    );

    if (monthIndex === -1) return false;

    const publishedDate = new Date(
      note.year,
      monthIndex,
      note.day
    );

    const expiryDate = new Date(publishedDate);
    expiryDate.setMonth(expiryDate.getMonth() + 2);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today > expiryDate;
  };

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const response = await fetch(
          "https://api.jntugv.edu.in/api/updates/allnotifications"
        );

        const data = await response.json();

        const filtered = data.filter(
          (n) =>
            (n.update_type === "recruitment" ||
              n.update_type === "recruitments") &&
            !isExpired(n)
        );

        const processed = filtered.map((n) => ({
          ...n,
          status: "Active",
          displayDate:
            `${n.day || ""} ${n.month || ""} ${n.year || ""}`.trim() ||
            n.date,
        }));

        const sorted = [...processed].sort((a, b) => {
          const dateA = new Date(
            `${a.month} ${a.day}, ${a.year}`
          );

          const dateB = new Date(
            `${b.month} ${b.day}, ${b.year}`
          );

          return dateB - dateA;
        });

        setNotifications(sorted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruitments();
  }, []);

  return (
    <main className="recruitment-container" role="main" aria-labelledby="recruitment-heading">

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/" className="breadcrumb-link">
          <HomeIcon fontSize="inherit" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Recruitment</span>
      </nav>

      {/* Scrolling Notice */}
      <div className="scroll-notice-container">
        <div className="scroll-notice-label">
          <CampaignIcon sx={{ mr: 1, color: '#fff', fontSize: '20px' }} />
          <span>Latest Announcement</span>
        </div>
        <div className="scroll-notice" role="status" aria-live="polite" aria-atomic="true">
          <div className="scroll-viewport">
            <div className="scroll-track">
              Faculty Recruitment–2026: Last date for online application submission and registration fee payment extended to 15-06-2026. Hard copy submission deadline extended to 22-06-2026.
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="recruitment-header">
        <Typography id="recruitment-heading" variant="h3" fontWeight={700} component="h1" className="recruitment-title">
          Faculty Recruitment Notifications — 2026
        </Typography>

        <Typography variant="body1" className="recruitment-subtitle">
          Latest notifications, application links, and important dates. Use the links provided to view or download official documents.
        </Typography>
      </div>
      <div className="header-divider" />

      {/* Apply Banner */}
      <div className="apply-banner">
        <div className="apply-banner-content">
          <h2>Faculty Recruitment 2026</h2>
          <p>
            Online application submission and registration
            fee payment extended up to 15-06-2026.
          </p>
        </div>

        <Button
          variant="contained"
          color="success"
          href="https://apuniversitiesrecruitment.apcfss.in/"
          target="_blank"
          className="btn-apply-now"
        >
          Apply Now
        </Button>
      </div>

      {/* Recruitment Cards */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 8,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {notifications.length === 0 ? (
            <div className="empty-state">
              <Typography variant="h6" gutterBottom>
                No active recruitment notifications at the moment
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Check back later or visit the recruitment portal for archived notices.
              </Typography>
              <Button variant="contained" color="primary" href="https://apuniversitiesrecruitment.apcfss.in/" target="_blank" rel="noopener noreferrer">
                Visit Recruitment Portal
              </Button>
            </div>
          ) : (
            <div className="recruitment-grid">
              {notifications.map((row, index) => {
                // determine badges (role / meta) from title or content
                const titleText = (row.title || '').toLowerCase();
                const textSource = (row.description || '') + ' ' + titleText;
                const badges = [];

                if (/assistant|asst\.?\s?prof|assistant professor/.test(textSource)) {
                  badges.push({ key: 'asst', label: 'Asst. Prof', cls: 'badge-assistant' });
                }

                if (/associate|assoc\.?\s?prof|associate professor/.test(textSource)) {
                  badges.push({ key: 'assoc', label: 'Assoc. Prof', cls: 'badge-associate' });
                }

                // add full professor if not assistant/associate
                if (/professor/.test(textSource) && !/assistant|associate|asst|assoc/.test(textSource)) {
                  badges.push({ key: 'prof', label: 'Professor', cls: 'badge-professor' });
                }

                if (/press release|press\b/.test(textSource)) {
                  badges.push({ key: 'press', label: 'Press', cls: 'badge-press' });
                }

                if (/detailed|detailed notification|detailed advt|detailed advertisement/.test(textSource)) {
                  badges.push({ key: 'detailed', label: 'Detailed', cls: 'badge-detailed' });
                }

                const viewLink = row.external_link || row.file_link || "#";
                const downloadLink = row.file_link || row.external_link || "#";
                const filename = (row.file_link || row.external_link || "").split('/').pop() || '';
                const tag = (row.title || '').toLowerCase().includes('backlog') ? 'Backlog' : 'Regular';

                return (
                  <article className="recruitment-card" key={row.id || index} aria-labelledby={`title-${index}`}>
                    <div className="card-top">
                      <div className="badge-wrapper">
                        <span className="card-badge">Recruitment</span>
                        <span className="card-type">{tag}</span>
                        <div className="role-badges" aria-hidden>
                          {badges.map((b) => (
                            <span key={b.key} className={`role-badge ${b.cls}`}>{b.label}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 className="card-title" id={`title-${index}`}>{row.title}</h3>
                      {filename && <div className="card-file" title={filename}>{filename}</div>}
                      <div className="card-date">📅 {row.displayDate}</div>
                    </div>

                    <div className="card-actions">
                      <Button
                        variant="outlined"
                        size="small"
                        href={viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${row.title}`}
                        className="btn-view"
                        startIcon={<VisibilityIcon />}
                      >
                        View
                      </Button>

                      <Button
                        variant="contained"
                        size="small"
                        component="a"
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={Boolean(row.file_link)}
                        aria-label={`Download ${row.title}`}
                        className="btn-download"
                        startIcon={<DownloadIcon />}
                      >
                        Download
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Contact Footer */}
      <div className="recruitment-footer-card">
        <h3 className="footer-title">Contact for Queries</h3>
        <div className="footer-grid">
          <div className="footer-item">
            <div className="footer-icon-wrapper">
              <EmailIcon className="footer-icon" />
            </div>
            <div className="footer-text">
              <span className="footer-label">Email Support</span>
              <a href="mailto:jntugvrecruitment@jntugv.edu.in" className="footer-link">
                jntugvrecruitment@jntugv.edu.in
              </a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-icon-wrapper">
              <CallIcon className="footer-icon" />
            </div>
            <div className="footer-text">
              <span className="footer-label">Phone Helpline</span>
              <a href="tel:+917780351078" className="footer-link">
                +91-7780351078
              </a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-icon-wrapper">
              <PlaceIcon className="footer-icon" />
            </div>
            <div className="footer-text">
              <span className="footer-label">Office Address</span>
              <span className="footer-value">
                JNTU-GV Campus, Vizianagaram
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recruitment;