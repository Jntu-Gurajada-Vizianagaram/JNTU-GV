// AboutJNTUGV.js
import React from "react";
import "./Aboutus.css";
import data from "./About.json";
import Typography from "@mui/material/Typography";

function AboutJNTUGV({ id }) {
  const section = data.sections.find((sec) => sec.id === id);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">{section.title}</div>
        <div className="allRight-ContentProfile">
          {section.content.map((item, index) => (
            <Typography key={index}>
              ❖ {item} <br /><br />
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutJNTUGV;
