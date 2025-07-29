import React, { useState, useEffect } from 'react';
import './DesktopAnnouncement.css';

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

const NotificationPopup = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const loadNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    loadNotifications();
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
      }, 4000);
    }, 5000);

    return () => clearInterval(interval);
  }, [notifications]);

  const currentNote = notifications[currentIndex];

  return (
    <div className="announcement-wrapper">
        <div className="notification-header">
        <span className="notification-icon">📢</span>
        <span className="notification-label">Important Announcements</span>
      </div>
      
      <div className="notification-container">
        {currentNote && (
          <a
            href={currentNote.file_link || currentNote.external_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`notification-box ${visible ? 'visible' : 'hidden'}`}
          >
            🔔 {currentNote.title}
          </a>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
