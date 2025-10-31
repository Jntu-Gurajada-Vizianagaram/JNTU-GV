import { useEffect, useState } from "react";
import { Data } from "./Data";
import Notification from "./Notification";
import "./UpdatePanel.css";

// import CircularProgress from "@mui/material/CircularProgress";

function UpdatePanel() {
  const examinationList = [];
  const notificationList = [];
  const workshopList = [];
  const recruitmentList = [];
  const sportsList = [];
  const eventsList = [];
  const calendarList = [];
  const tenderList =[];
  const syllabusList =[];

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
      case "notification" :
      case "regulation":
      case "circular":
              notificationList.push(entry);
        break;
      case "recruitment":
        notificationList.push(entry);
        recruitmentList.push(entry);
        break;
      case "examination":
      case "exams":
            notificationList.push(entry);
            examinationList.push(entry);
            break;
      case "workshop" :
      case "conference":
      case "seminar":
        notificationList.push(entry);
        workshopList.push(entry);
        break;
      case "sports":
        notificationList.push(entry);
        sportsList.push(entry);
        break;
      case "events":
        notificationList.push(entry);
        eventsList.push(entry);
        break;
      case "calendar":
        notificationList.push(entry);
        calendarList.push(entry);
        break;
      case "syllabus":
        syllabusList.push(entry);
        break;
      case "tender":
          notificationList.push(entry);
          tenderList.push(entry);
          break;

      default:
        break;
    }
  });

  const handleNotification = (button) => {
    setDisplayData(notificationList);
    setActiveButton(button);
  };
  const handleSyllabus = (button) => {
    setDisplayData(syllabusList);
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

  const handleCalendar = (button) => {
    setDisplayData(calendarList);
    setActiveButton(button);
      };

  const handleTenders = (button) => {
    setDisplayData(tenderList);
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

 
 const notificationData = notificationList;

  return (
    <div id="events">
      <div className="notifications-title">Notifications</div>
     
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
              backgroundColor: activeButton === "syllabus" ? "#370a68" : "white",
              color: activeButton === "syllabus" ? "white" : "black",
            }}
            onClick={() => handleSyllabus("syllabus")}
          >
            Syllabus
          </button>
          <button
            style={{
              ...buttonStyles,
              backgroundColor:
                activeButton === "Calendar" ? "#370a68" : "white",
              color: activeButton === "Calendar" ? "white" : "black",
            }}
            onClick={() => handleCalendar("Calendar")}
                      >
                                   Academic Calendars
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
              backgroundColor:
                activeButton === "Recruitment" ? "#370a68" : "white",
              color: activeButton === "Recruitment" ? "white" : "black",
            }}
            onClick={() => handleRecruitment("Recruitment")}
          >
            Recruitment
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
          Conferences
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
              backgroundColor: activeButton === "tenders" ? "#370a68" : "white",
              color: activeButton === "tenders" ? "white" : "black",
            }}
            onClick={() => handleTenders("tenders")}
          >
            Tenders
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