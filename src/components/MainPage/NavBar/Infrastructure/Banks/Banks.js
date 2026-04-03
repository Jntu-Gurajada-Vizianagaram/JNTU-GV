import React from "react";
import image from "./BankImages/1.jpg";
import { Typography } from "@mui/material";
import "../Infrastructure.css";

function Banks() {
  return (
    <div className="infra-profile-container">
      <div className="infra-content-area-header">
        <h3>Bank</h3>
      </div>
      
      <div className="infra-profile-details">
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Jawaharlal Nehru Technological University-Gurajada, Vizianagaram (JNTU-GV) provides comprehensive banking facilities directly on its campus to ensure a seamless experience for the university community. A full-fledged branch of the <strong>State Bank of India (SBI)</strong> is located within the administrative zone, offering a complete suite of financial services.
        </Typography>

        <h5 className="infra-sub-heading">Key Services Provided</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          Students can utilize this facility for the convenient payment of college, hostel, and examination fees. Faculty and staff also have access to essential banking services, including account management and safe financial transactions.
        </Typography>

        <h5 className="infra-sub-heading">24/7 ATM Access</h5>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          For immediate cash requirements, a round-the-clock ATM facility is situated near the bank branch, providing secure and convenient access to funds for all students, staff, and visitors at any time.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image} alt="State Bank of India" className="infra-logo" />
        </div>
      </div>
    </div>
  );
}

export default Banks;
