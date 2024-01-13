import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.marquee";
import "./NewsAndEvents.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import { arr } from "./ScrollData.js";
import { newNotification } from "./ScrollData.js";
import { useNavigate } from "react-router";


function Scrollbar() {
  const el = useRef();
  const navigate= useNavigate();
  const eventHandler = () =>{
    navigate('/news-and-events');
  }
  useEffect(function () {
    const $el = $(el.current);

    $el.marquee({
      duration: 10000,
      gap: 50,
      delayBeforeStart: 0,
      direction: "up",
      pauseOnHover: true,
    });
  });

  //The Scrollbar component
  return (
    <div className="d1">
      <center>
        <h1 className="h1">
          <CampaignIcon
            sx={{ fontSize: "45px", transform: "scaleX(-1)" }}
          ></CampaignIcon>{" "}
          NEWS AND EVENTS{" "}
          <CampaignIcon sx={{ fontSize: "45px" }}></CampaignIcon>
        </h1>
      </center>
      <div className="m1" ref={el}>
        {newNotification.map((item, i) => (
          <div>
            <a href={item.hypertext} target="_blank" rel="noreferrer">
              <div>
                {item.text}
                <img
                  src="images/new.gif"
                  alt="newimg"
                  height="20vh"
                  width="50vh"
                ></img>
                <hr />
              </div>
            </a>
          </div>
        ))}
        {arr.map((item, i) => (
          <div>
            <a href={item.hypertext}>
              <div>
                {item.text}
                <hr />
              </div>
            </a>
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={eventHandler}>Show All...</button>
    </div>
  );
}

export default Scrollbar;
