import React, { useState, useEffect } from "react";
import "./MobileAnnouncement.css";
import newGif from "../../../assets/new.gif";

const getNotificationDate = (note) => {
  if (!note || note.day == null || !note.month || note.year == null) {
    return null;
  }

  const date = new Date(`${note.month} ${note.day}, ${note.year}`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const isOlderThanDays = (note, days) => {
  const notificationDate = getNotificationDate(note);
  if (!notificationDate) return false;

  const diffTime = new Date().getTime() - notificationDate.getTime();
  return diffTime > days * 24 * 60 * 60 * 1000;
};

const fetchNotifications = async () => {
  try {
    const response = await fetch(
      "https://api.jntugv.edu.in/api/updates/allnotifications"
    );
    const data = await response.json();
    return data.filter(
      (n) => n.scrolling === "yes" && !isExpired(n) && !isOlderThanDays(n, 4)
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};

const getExpirationDate = (note) => {
  const rawDate =
    note.expire_date ||
    note.expiry_date ||
    note.expireDate ||
    note.expiryDate ||
    note.expiry ||
    note.expires;

  if (!rawDate) return null;

  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return rawDate;
  }

  return parsedDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const isExpired = (note) => {
  const rawDate =
    note.expire_date ||
    note.expiry_date ||
    note.expireDate ||
    note.expiryDate ||
    note.expiry ||
    note.expires;

  if (!rawDate) return false;

  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return parsedDate.getTime() < today.getTime();
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
          {[...notifications, ...notifications].map((note, index) => {
            const expirationText = getExpirationDate(note);
            return (
              <a
                key={index}
                href={note.file_link || note.external_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="ticker-item"
              >
                🔔 {note.title}
                {expirationText && (
                  <span className="expiry-label">Expires: {expirationText}</span>
                )}
                {daysAgo(note.day, note.month, note.year) <= 3 && (
                  <img src={newGif} alt="new" className="new-icon" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMobile;
