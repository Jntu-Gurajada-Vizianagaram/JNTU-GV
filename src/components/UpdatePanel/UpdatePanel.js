import "./UpdatePanel.css";
import { useEffect, useState } from "react";
import { Data } from "./Data";
import Notification from "./Notification";

// import CircularProgress from "@mui/material/CircularProgress";

function UpdatePanel() {
  const examinationList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const sportsList = [];
  const eventsList = [];
  const bcdeList = [];

  const [displayData, setDisplayData] = useState(notificationList);

  const [activeButton, setActiveButton] = useState("Notifications");
  const [apiData, setApiData] = useState([]);

  const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    border: "1px solid #370A68",
    borderRadius: "7px",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jntugv.edu.in/api/updates/allnotifications"
        );
        const apiData = await response.json();
        const localData = Data;
        const mergedData = [...apiData, ...localData];
        setApiData(mergedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  apiData.forEach((entry) => {
    switch (entry.update_type) {
      case "notification":
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
      case "BCDE":
        bcdeList.push(entry);
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

  const handleBcde = (button) => {
    setDisplayData(bcdeList);
    setActiveButton(button);
  };
  const notificationData = apiData
    .map(
      (entry) =>
        entry.update_type === "notification" && {
          title: entry.title,
          description: entry.description,
          day: entry.day,
          month: entry.month,
          year: entry.year,
          file_link: entry.file_link,
          update_type: entry.update_type,
        }
    )
    .filter(Boolean);

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
          <button
            style={{
              ...buttonStyles,
              backgroundColor: activeButton === "BCDE" ? "#370a68" : "white",
              color: activeButton === "BCDE" ? "white" : "black",
            }}
            onClick={() => handleBcde("BCDE")}
          >
            BCDE
          </button>
        </div>
        {activeButton === "Notifications" ? (
          <Notification displayData={notificationData} />
        ) : (
          <Notification displayData={displayData} />
        )}
      </div>
    </div>
  );
}

export default UpdatePanel;
