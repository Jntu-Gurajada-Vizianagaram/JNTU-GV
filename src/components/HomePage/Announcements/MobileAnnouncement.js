import React, { useState, useEffect } from "react";
import "./MobileAnnouncement.css";
import newGif from "../../../assets/new.gif";

const fetchNotifications = async () => {
  try {
    const response = await fetch(
      "https://api.jntugv.edu.in/api/updates/allnotifications"
    );
    const data = await response.json();
    return data.filter((n) => n.scrolling === "yes");
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};

const AnnouncementMobile = () => {
  const [notifications, setNotifications] = useState([]);

  // ✅ Function to calculate days difference
  const daysAgo = (day, month, year) => {
    if (!day || !month || !year) return Infinity; // safeguard
    const notificationDate = new Date(`${month} ${day}, ${year}`);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - notificationDate.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    load();
  }, []);

  return (
    <div className="notification-ticker-wrapper">
      <div
        className="ticker-container"
        onMouseEnter={(e) =>
          (e.currentTarget.querySelector(".ticker-content").style.animationPlayState =
            "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.querySelector(".ticker-content").style.animationPlayState =
            "running")
        }
      >
        <div className="ticker-content">
          {[...notifications, ...notifications].map((note, index) => (
            <a
              key={index}
              href={note.file_link || note.external_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="ticker-item" >
              🔔 {note.title}{" "}
              {daysAgo(note.day, note.month, note.year) <= 3 && (
                <img
                  src={newGif}
                  alt="new"
                  className="new-icon"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMobile;
