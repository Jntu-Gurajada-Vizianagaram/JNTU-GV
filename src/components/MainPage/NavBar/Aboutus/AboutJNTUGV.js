// AboutJNTUGV.js
import React from "react";
import "./Aboutus.css";
import data from "./About.json";

function AboutJNTUGV({ id }) {

  const section = data.sections.find((sec) => sec.id === id);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <section className="ABOUTmainContainer" aria-labelledby="about-section-title">
      <div className="allRightContent">
        <h2 id="about-section-title" className="allRightContentHeading">
          {section.title}
        </h2>

        <div className="allRight-ContentProfile" role="list">
          <ul className="about-contentList">
            {section.content.map((item, index) => (
              <li key={index} className="about-contentListItem">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}



export default AboutJNTUGV;

