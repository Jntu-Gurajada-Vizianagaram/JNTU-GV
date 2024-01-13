import React from "react";
import "./aboutUs.css";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

import chancellor from "../../assets/AdminDirectoratesImages/chancellor.jpeg";
import vc from "../../assets/AdminDirectoratesImages/vc.png";
import registrar from "../../assets/AdminDirectoratesImages/registrar.jpeg";

const AboutUs = () => {
  const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    boxShadow: "0px 0px 100px 0px rgba(0, 0, 0, 0.15)",
    background: "linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%)",
    width: "370px",
    height: "350px",
    flexShrink: " 0",
    alignItems: "center",

    "@media (max-width: 600px)": {
      width: "300px",
      height: "220px",
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0), #fff 0%, #fff 100%)",
    },
  });
  return (
    <div className="aboutUs">
      <div className="aboutUs-container">
        <StyledCard>
          <img src={chancellor} alt="chancellor" className="aboutUs-image" />
          <p className="aboutUs-name">Shri Justice(Retd.) S.Abdul Nazeer</p>
          <p className="aboutUs-designation">Governor of Andhra Pradesh</p>
          <p className="aboutUs-designation">Hon’ble Chancellor</p>
        </StyledCard>

        <StyledCard>
          <img src={vc} alt="chancellor" className="aboutUs-image" />
          <p className="aboutUs-name">Prof. Dr. K. Venkatasubbaiah</p>
          <p className="aboutUs-designation">Hon’ble Vice Chancellor</p>
        </StyledCard>

        <StyledCard>
          <img src={registrar} alt="chancellor" className="aboutUs-image" />

          <p className="aboutUs-name">Prof. Dr. G. Jaya Suma</p>
          <p className="aboutUs-designation">M.Tech (CS&T), Ph.D(CSE)</p>
          <p className="aboutUs-designation">Registrar </p>
        </StyledCard>
      </div>
    </div>
  );
};

export default AboutUs;
