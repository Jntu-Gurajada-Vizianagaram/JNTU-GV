import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code-wrapper">
          <Typography variant="h1" className="error-code">404</Typography>
          <div className="floating-icon">
            <ErrorOutlineIcon style={{ fontSize: '120px', color: 'var(--accent-color)' }} />
          </div>
        </div>
        
        <Typography variant="h4" className="error-message">Oops! Page Not Found</Typography>
        <Typography variant="body1" className="error-description">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable. 
        </Typography>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            className="home-btn"
            startIcon={<HomeIcon />}
          >
            Back to Homepage
          </Button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
    </div>
  );
}

export default NotFound;
