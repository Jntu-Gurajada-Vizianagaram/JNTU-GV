import React from 'react';
import './MaintenancePage.css';

const MaintenancePage = () => {
  return (
    <div className="maintenance-page">
      <div className="maintenance-card">
        <h1>Site Maintenance</h1>
        <p>
          Our website is currently under scheduled maintenance. We are working to
          restore service as quickly as possible.
        </p>
        <p>
          Please check back later. If you need immediate assistance, contact the
          university administration.
        </p>
        <a href="mailto:info@jntugv.edu.in" className="maintenance-link">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default MaintenancePage;
