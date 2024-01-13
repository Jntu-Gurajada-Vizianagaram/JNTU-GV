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
        <RoundedPaper elevation={4} sx={{ lineHeight: "3" }}>
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
          {/* <Typography variant="p"> 08922 294316</Typography> */}
        </RoundedPaper>
        <RoundedPaper elevation={4}>
          <PlaceIcon fontSize="large" color="primary" />
          <Typography variant="h6">Our Location</Typography>
          <Typography>
            JNTU-Gurajada College of Engineering Vizianagaram, Nh 43, Dwarapudi
            (Post), Vizianagaram, Andhra Pradesh, Andhra Pradesh 535003 · ~4.8
            km
          </Typography>
        </RoundedPaper>
      </div>

      <iframe
        title="JNTU Vizianagaram Campus Map"
        width="1100px"
        height="500px"
        className="contact-map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

      {/* Additional Contact Section */}
      <div className="additional-contact-section ">
        <div className="contact-cards">
          {/* Member 1 */}
          <RoundedPaper elevation={2} className="paper-details">
            <Typography variant="h6">
              <strong>Vice Chancellor Peshi</strong>{" "}
            </Typography>
            <Typography variant="p">
              <CallIcon fontSize="medium" color="primary" /> 08922 222606{" "}
            </Typography>
            <Typography variant="p">
              <EmailIcon fontSize="medium" color="primary" /> vc@jntugv.edu.in
            </Typography>
          </RoundedPaper>
          {/* Member 2 */}
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
          </RoundedPaper>

          {/* Member 3 */}
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
