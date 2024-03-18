import React from "react";
import "./ContactUs.css";

import { Paper, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { styled } from "@mui/system";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const RoundedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2), // Adjust the padding as needed
  width: "20rem",
  height: "180px",
  fontSize: "16px",
  borderRadius: "5px",
  boxShadow: "0px 4px 29px 0px rgba(228, 218, 218, 0.34)",
  display: "flex",
  flexDirection: "column",
  paddingBlock: "10px",
  margin: "5px",

  "@media screen and (max-width: 600px)": {},
}));

function ContactUs() {
  return (
    <div className="contact-page">
      {/* College Section */}
      <div className="contact-details">
        {/* <RoundedPaper elevation={4} sx={{ lineHeight: "3" }}>
          <CallIcon fontSize="large" color="primary" />
          <Typography variant="h6">Contact Phone Number</Typography>
          <Typography variant="p"> 08922 277388</Typography>
          <Typography variant="p"> 08922 222606</Typography>
        </RoundedPaper>
        <RoundedPaper elevation={4} sx={{ lineHeight: "3" }}>
          <EmailIcon fontSize="large" color="primary" />
          <Typography variant="h6">Contact Phone Number</Typography>
          <Typography variant="p"> vc@jntugv.edu.in</Typography>
          <Typography variant="p"> registrarpeshi@jntugv.edu.in</Typography>
        </RoundedPaper> */}
        <RoundedPaper elevation={4} className="paper-details">
          <Typography variant="h6">
            <strong>Vice Chancellor Peshi</strong>{" "}
          </Typography>
          <Typography variant="p">
            <CallIcon fontSize="medium" color="primary" /> 08922 222606{" "}
          </Typography>
          <Typography variant="p">
            <EmailIcon fontSize="medium" color="primary" /> ps2vc@jntugv.edu.in
          </Typography>
          <Typography variant="p">
            <EmailIcon fontSize="medium" color="primary" /> pa2vc@jntugv.edu.in
          </Typography>
        </RoundedPaper>
        {/* Member 2 */}
        <RoundedPaper elevation={4} className="paper-details">
          <Typography variant="h6">
            <strong>Registrar Peshi</strong>{" "}
          </Typography>
          <Typography variant="p">
            <CallIcon fontSize="medium" color="primary" /> 08922 294316
          </Typography>
          <Typography variant="p">
            <EmailIcon fontSize="medium" color="primary" />{" "}
            registrarpeshi@jntugv.edu.in
          </Typography>
          <Typography variant="p">
            <EmailIcon fontSize="medium" color="primary" />{" "}
            pa2registrarjntugv@gmail.com
          </Typography>
        </RoundedPaper>
        <RoundedPaper elevation={4} className="paper-details">
          <span style={{ display: "flex", alignItems: "center" }}> <PlaceIcon fontSize="medium" color="primary" />
            <Typography variant="h6">  <strong>Our Location</strong></Typography> </span>
          <Typography variant="p">
            JNTU-Gurajada College of Engineering Vizianagaram, Nh 43, Dwarapudi
            (Post), Vizianagaram, Andhra Pradesh, Andhra Pradesh 535003 · ~4.8
            km
          </Typography>
        </RoundedPaper>
      </div>

      <iframe
        title="JNTU Vizianagaram Campus Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2779091876973!2d83.37309837464375!3d18.151107380356674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1705165640046!5m2!1sen!2sin"
        width="1100px"
        height="500px"
        allowfullscreen="true"
        loading="lazy"
        className="contact-map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Additional Contact Section */}
      <div className="additional-contact-section ">
        <div className="contact-cards">
          {/* <RoundedPaper elevation={2} className="paper-details">
            <Typography variant="h6">
              <strong>Vice Chancellor Peshi</strong>{" "}
            </Typography>
            <Typography variant="p">
              <CallIcon fontSize="medium" color="primary" /> 08922 222606{" "}
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" /> ps2vc@jntugv.edu.in
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" /> pa2vc@jntugv.edu.in
            </Typography>
          </RoundedPaper>
          <RoundedPaper elevation={2} className="paper-details">
            <Typography variant="h6">
              <strong>Registrar Peshi</strong>{" "}
            </Typography>
            <Typography variant="p">
              {" "}
              <CallIcon fontSize="medium" color="primary" /> 08922 294316
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" />{" "}
              registrarpeshi@jntugv.edu.in
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" />{" "}
              pa2registrarjntugv@gmail.com
            </Typography>
          </RoundedPaper> */}

          <RoundedPaper elevation={2} className="paper-details">
            <Typography variant="h6">
              <strong>Controller of Examination Office</strong>{" "}
            </Typography>
            <Typography variant="p">
              {" "}
              <CallIcon fontSize="medium" color="primary" /> 08922 294997
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" /> ce@jntugv.edu.in
            </Typography>
          </RoundedPaper>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
