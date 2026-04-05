import React from "react";
import "./ContactUs.css";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <Typography variant="h1" component="h1">Contact Us</Typography>
        <Typography variant="body1">
          Have questions? We're here to help. Reach out to the university administration, 
          academic departments, or visit our campus.
        </Typography>
      </section>

      {/* Main Content Container */}
      <div className="contact-container">
        {/* Top Row: Contact Info Cards */}
        <div className="contact-top-row">
          <div className="info-card">
            <h3>
              <div className="icon-wrapper"><BusinessIcon /></div>
              Vice Chancellor Peshi
            </h3>
            <div className="info-card-item">
              <CallIcon fontSize="small" />
              <span>08922 222606</span>
            </div>
            <div className="info-card-item">
              <EmailIcon fontSize="small" />
              <span>ps2vc@jntugv.edu.in</span>
            </div>
            <div className="info-card-item">
              <EmailIcon fontSize="small" />
              <span>pa2vc@jntugv.edu.in</span>
            </div>
          </div>

          <div className="info-card">
            <h3>
              <div className="icon-wrapper"><BusinessIcon /></div>
              Registrar Peshi
            </h3>
            <div className="info-card-item">
              <CallIcon fontSize="small" />
              <span>08922 294316</span>
            </div>
            <div className="info-card-item">
              <EmailIcon fontSize="small" />
              <span>registrarpeshi@jntugv.edu.in</span>
            </div>
            <div className="info-card-item">
              <EmailIcon fontSize="small" />
              <span>pa2registrarjntugv@gmail.com</span>
            </div>
          </div>

          <div className="info-card">
            <h3>
              <div className="icon-wrapper"><SchoolIcon /></div>
              Controller of Examination
            </h3>
            <div className="info-card-item">
              <CallIcon fontSize="small" />
              <span>08922 294997</span>
            </div>
            <div className="info-card-item">
              <EmailIcon fontSize="small" />
              <span>ce@jntugv.edu.in</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Address and Map Side-by-Side */}
        <div className="contact-bottom-row">
          <div className="info-card address-card">
            <h3>
              <div className="icon-wrapper"><PlaceIcon /></div>
              Our Location
            </h3>
            <div className="info-card-item" style={{ alignItems: 'flex-start' }}>
              <PlaceIcon fontSize="small" style={{ marginTop: '4px' }} />
              <Typography variant="body1">
                JNTU-Gurajada College of Engineering Vizianagaram, Nh 43, Dwarapudi (Post), Vizianagaram, AP 535003
              </Typography>
            </div>
            <div className="info-card-item">
              <CallIcon fontSize="small" />
              <span>General Inquiry: 08922 277388</span>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="JNTU Vizianagaram Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2779091876973!2d83.37309837464375!3d18.151107380356674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1705165640046!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
