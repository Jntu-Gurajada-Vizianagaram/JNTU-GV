import React, { useState, useEffect } from "react";
import "./MobileAnnouncement.css";
import newGif from "../../../assets/new.gif";

// ✅ STATIC ANNOUNCEMENTS - Displayed first with highest priority
// These will scroll continuously every day until manually removed
// To add new static announcements, add objects to this array
const staticAnnouncements = [
  {
    id: "static-1",
    date: "2026-04-25",
    title: "Connect the Alumni Association of JNTUGV with this Google form",
    file_path: "",
    external_text: "Click here to Join Alumni Network",
    external_link: "https://docs.google.com/forms/d/e/1FAIpQLSdke9d4vfKeJm6802cXX4K1_ljZ9A3OMv096Aq9-x4nf9g8tg/viewform?usp=sf_link",
    main_page: "yes",
    scrolling: "yes",
    update_type: "circular",
    update_status: "update",
    submitted_by: "admin",
    admin_approval: "accepted",
    file_link: "",
    day: 25,
    month: "Apr",
    year: 2026,
    isStatic: true, // Mark as static for identification
  },

  {
"id": "static-2",
"date": "2026-04-17",
"title": "Registrar - JNTUGV - Request for Sponsorship of Gold Medals for First Convocation - Reg",
"file_path": "JNTUGV - Request for Sponsorship of Gold Medals_ Cash Awards  for First Convocation.pdf",
"external_text": "Click here to record Sponsorship",
"external_link": "https://forms.gle/L8R51nXrUNar1aUS7",
"main_page": "yes",
"scrolling": "yes",
"update_type": "circular",
"update_status": "update",
"submitted_by": "admin",
"admin_approval": "accepted",
"file_link": "https://api.jntugv.edu.in/media/JNTUGV - Request for Sponsorship of Gold Medals_ Cash Awards  for First Convocation.pdf",
"day": 17,
"month": "Apr",
"year": 2026,
"isStatic": true, // Mark as static for identification
},


// Add more static announcements here by copying the structure above
];

// ✅ Function to expand notifications with both file and external links into two separate notifications
const expandNotificationsWithBothLinks = (notifications) => {
  return notifications.flatMap((note) => {
    // If notification has both file_link and external_link, split into two
    if (note.file_link && note.external_link) {
      const baseTitle = note.title;
      return [
        {
          ...note,
          id: note.id + "-file",
          title: `${baseTitle}`,
          displayLink: note.file_link,
          linkType: "file",
        },
        {
          ...note,
          id: note.id + "-action",
          title: `${note.external_text || "Action Required"} - ${baseTitle}`,
          displayLink: note.external_link,
          linkType: "action",
        },
      ];
    }
    // If only file_link
    if (note.file_link) {
      return [{
        ...note,
        displayLink: note.file_link,
        linkType: "file",
      }];
    }
    // If only external_link
    if (note.external_link) {
      return [{
        ...note,
        displayLink: note.external_link,
        linkType: "action",
      }];
    }
    return [note];
  });
};

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
      const dynamicData = await fetchNotifications();
      // ✅ Expand static and dynamic announcements that have both file and external links
      const expandedStatic = expandNotificationsWithBothLinks(staticAnnouncements);
      const expandedDynamic = expandNotificationsWithBothLinks(dynamicData);
      // ✅ Combine expanded static announcements first (priority) + expanded dynamic announcements
      const combinedData = [...expandedStatic, ...expandedDynamic];
      setNotifications(combinedData);
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
          {/* ✅ Loop twice for continuous scroll: static + dynamic repeated */}
          {[...notifications, ...notifications].map((note, index) => {
            const expirationText = getExpirationDate(note);
            const linkHref = note.displayLink || note.file_link || note.external_link || "#";
            return (
              <a
                key={index}
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`ticker-item ${note.isStatic ? "" : ""}`}
                title={note.isStatic ? "Static Announcement (Daily Scroll)" : ""}
              >
                {note.isStatic ? "📌" : "🔔"} {note.title}
                {expirationText && (
                  <span className="expiry-label">Expires: {expirationText}</span>
                )}
                {!note.isStatic && daysAgo(note.day, note.month, note.year) <= 3 && (
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
