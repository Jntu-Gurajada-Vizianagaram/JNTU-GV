import "./UpdatePanel.css";
import newGif from "../../assets/new.gif";
import { useState } from "react";
import { Data } from "./Data";
import { Button } from "@mui/material";

function UpdatePanel() {
  const examinationList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const sportsList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [activeButton, setActiveButton] = useState("Notifications");

  // const [events, setEvents] = useState([]);

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
  // const isCurrentMonth = currentDate.getMonth() === Data.month;

  const daysAgo = (notificationDate) => {
    const notificationDateTime = new Date(notificationDate);
    const timeDifference =
      currentDate.getTime() - notificationDateTime.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://api.jntugv.edu.in/api/updates/getevents"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setEvents(data); // Update state with the fetched data
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  Data.forEach((entry) => {
    if (entry.type === "notifications") {
      notificationList.push(entry);
    } else if (entry.type === "recruitment") {
      recruitmentList.push(entry);
    } else if (entry.type === "examination") {
      examinationList.push(entry);
    } else if (entry.type === "workshop") {
      workshopList.push(entry);
    } else if (entry.type === "sports") {
      sportsList.push(entry);
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

  return (
    <div>
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
            Workshops{" "}
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
        </div>
        <div className="updatesContainer">
          {displayData.map((entry,index) => (
            <div key={index}>
              <div className="updateBox">
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
                    <img src={newGif} alt="newimg" height="20vh" width="50vh" />
                  )}

                  <div>
                    {/* condition for button*/}
                    {entry.displaytext && (
                      <Button variant="text">
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
              </div>
              <div className="updateDivSeparator"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdatePanel;
