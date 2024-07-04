import React from "react";
import "./aboutUs.css";

import { Link } from "react-router-dom";

import chancellor from "../../../assets/AdminDirectoratesImages/chancellor.jpeg";
import vc from "../../../assets/AdminDirectoratesImages/vc.png";
import registrar from "../../../assets/AdminDirectoratesImages/registrar.jpeg";

const AboutUs = () => {

  return (
    <div className="aboutUs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4" >
          <Link to="administration/chancellor" className="more-link row justify-content-center">
            <div className="aboutUs-card">
              <img src={chancellor} alt="chancellor" className="aboutUs-image" />
              <p className="aboutUs-name">Shri Justice(Retd.) S.Abdul Nazeer</p>
              <p className="aboutUs-designation">Governor of Andhra Pradesh</p>
              <p className="aboutUs-designation">Hon’ble Chancellor</p>
              
            </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
          <Link to="administration/vice-chancellor" className="more-link row justify-content-center">
            <div className="aboutUs-card">
              <img src={vc} alt="vice-chancellor" className="aboutUs-image" />
              <p className="aboutUs-name">Prof. K. Venkatasubbaiah</p>
              <p className="aboutUs-designation">Hon’ble Vice Chancellor</p>
              <br/>
            </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
          <Link to="administration/registrar" className="more-link row justify-content-center">
            <div className="aboutUs-card">
              <img src={registrar} alt="registrar" className="aboutUs-image" />
              <p className="aboutUs-name">Prof. G. Jaya Suma</p>
              <p className="aboutUs-designation">M.Tech (CS&T), Ph.D(CSE)</p>
              <p className="aboutUs-designation">Registrar</p>
              
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
