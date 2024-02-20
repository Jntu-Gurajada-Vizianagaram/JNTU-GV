import "./UpdatePanel.css";
import newGif from "../../assets/new.gif";
import { useState } from "react";
import { Data } from "./Data";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function UpdatePanel() {
  const examinationList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const sportsList = [];
  const eventsList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [activeButton, setActiveButton] = useState("Notifications");

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    border: "1px solid #370A68",
    borderRadius: "7px",
  };

  const currentDate = new Date();

  const daysAgo = (notificationDate) => {
    const notificationDateTime = new Date(notificationDate);
    const timeDifference =
      currentDate.getTime() - notificationDateTime.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  Data.forEach((entry) => {
    switch (entry.type) {
      case "notifications":
        notificationList.push(entry);
        break;
      case "recruitment":
        recruitmentList.push(entry);
        break;
      case "examination":
        examinationList.push(entry);
        break;
      case "workshop":
        workshopList.push(entry);
        break;
      case "sports":
        sportsList.push(entry);
        break;
      case "events":
        eventsList.push(entry);
        break;
      default:
        break;
    }
  });

  const handleNotification = (button) => {
    setDisplayData(notificationList);
    setActiveButton(button);
  };

  const handleRecruitment = (button) => {
    setDisplayData(recruitmentList);
    setActiveButton(button);
  };

  const handleexamination = (button) => {
    setDisplayData(examinationList);
    setActiveButton(button);
  };

  const handleWorkshop = (button) => {
    setDisplayData(workshopList);
    setActiveButton(button);
  };

  const handleSports = (button) => {
    setDisplayData(sportsList);
    setActiveButton(button);
  };

  const handleEvents = (button) => {
    setDisplayData(eventsList);
    setActiveButton(button);
  };

  return (
    <div id="events">
      <h1 className="notifications-title">Notifications</h1>
      <div className="updateComponent">
        <div className="updateButtons">
          <button
            style={{
              ...buttonStyles,
              backgroundColor:
                activeButton === "Notifications" ? "#370a68" : "white",
              color: activeButton === "Notifications" ? "white" : "black",
            }}
            onClick={() => handleNotification("Notifications")}
            target="_blank"
          >
            Notifications
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor:
                activeButton === "Recruitment" ? "#370a68" : "white",
              color: activeButton === "Recruitment" ? "white" : "black",
            }}
            onClick={() => handleRecruitment("Recruitment")}
          >
            Recruitment 2023
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor:
                activeButton === "Conferences" ? "#370a68" : "white",
              color: activeButton === "Conferences" ? "white" : "black",
            }}
            onClick={() => handleWorkshop("Conferences")}
          >
            Academic Events
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor:
                activeButton === "Examinations" ? "#370a68" : "white",
              color: activeButton === "Examinations" ? "white" : "black",
            }}
            onClick={() => handleexamination("Examinations")}
          >
            Exams
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor: activeButton === "Sports" ? "#370a68" : "white",
              color: activeButton === "Sports" ? "white" : "black",
            }}
            onClick={() => handleSports("Sports")}
          >
            Sports
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor: activeButton === "Events" ? "#370a68" : "white",
              color: activeButton === "Events" ? "white" : "black",
            }}
            onClick={() => handleEvents("Events")}
          >
            Events
          </button>
        </div>
        <div className="updatesContainer">
          {displayData.map((entry, index) => (
            <>
              <div key={index} className="updateBox">
                {entry.type === "events" ? (
                  <div className="eventBox">
                    <a href={entry.link} style={{ textDecoration: "none" }}>
                      <Card
                        sx={{
                          width: "350px",
                          backgroundColor: "#370A68",
                          height: "250px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="194"
                          image={entry.image}
                          alt="Paella dish"
                        />
                        <CardContent>
                          <Typography variant="body1" color="white">
                            {entry.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="dateTimeContainer">
                      <div className="dateDiv">{entry.date}</div>
                      <div className="monYear">
                        <div className="monthDiv">{entry.month}</div>
                        <div className="yearDiv">{entry.year}</div>
                      </div>
                    </div>
                    <div className="updateDescription">
                      <a
                        href={entry.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "rgb(55, 10, 104)",
                        }}
                      >
                        {entry.description}
                      </a>
                      {daysAgo(`${entry.month} ${entry.date}, ${entry.year}`) <=
                        5 && (
                        <img
                          src={newGif}
                          alt="newimg"
                          height="20vh"
                          width="50vh"
                        />
                      )}
                      <div>
                        {/* condition for button*/}
                        {entry.displaytext && (
                          <Button
                            variant="outlined"
                            color="inherit"
                            sx={{ backgroundColor: "370a68" }}
                          >
                            <a
                              href={entry.displaylink}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                textDecoration: "none",
                                color: "rgb(55, 10, 104)",
                              }}
                            >
                              {entry.displaytext}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              {entry.type === "events" ? (
                <></>
              ) : (
                <div className="updateDivSeparator"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdatePanel;
