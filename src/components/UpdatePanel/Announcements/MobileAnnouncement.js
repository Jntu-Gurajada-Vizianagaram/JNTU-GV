import React, { useState, useEffect, useRef } from 'react';
import './MobileAnnouncement.css';

const fetchNotifications = async () => {
  try {
    const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
    const data = await response.json();
    return data.filter(n => n.scrolling === 'yes');
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }
};

const AnnouncementMobile = () => {
  const [notifications, setNotifications] = useState([]);
  const tickerRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    load();
  }, []);

  return (
    <div className="notification-ticker-wrapper">
      <div className="notification-header">
        <span className="notification-icon">📢</span>
        <span className="notification-label">Important Announcements</span>
      </div>

      <div className="ticker-container" onMouseEnter={() => tickerRef.current.style.animationPlayState = 'paused'} onMouseLeave={() => tickerRef.current.style.animationPlayState = 'running'}>
        <div className="ticker-content" ref={tickerRef}>
          {notifications.length > 0 ? (
            notifications.map((note, index) => (
              <a
                key={index}
                href={note.file_link || note.external_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="ticker-item"
              >
                🔔 {note.title}
              </a>
            ))
          ) : (
            <span className="ticker-item">No important notifications available.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMobile;
